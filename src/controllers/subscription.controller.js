import prisma from "../config/prisma.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const checkoutSession = async (req, res) => {

  try {
    const { priceId } = req.body;
    const userId = req.user.id;

    const company = await prisma.company.findFirst({ where: { user_id: userId } });
    if (!company) return res.status(404).json({ message: "Company not found" });

    let stripeCustomerId = company.stripeCustomerId;
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({ metadata: { companyId: company.id.toString() } });
      stripeCustomerId = customer.id;
      await prisma.company.update({ where: { id: company.id }, data: { stripeCustomerId } });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      customer: stripeCustomerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const stripeWebhook = async (req, res) => {
  const signature = req.headers["stripe-signature"]
  let event;
  // console.log("Signature:", signature);
// console.log("Raw Body:", req.body.toString());

  // console.log("Headers ทั้งหมด:", req.headers);
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET);
    const session = event.data.object
//     console.log("Stripe Event Type:", event.type);
// console.log("Event Data Object:", event.data.object);
    // console.log("session", session)
    // console.log("ควย",event) 

  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customer = await stripe.customers.retrieve(session.customer);
    const companyId = customer.metadata.companyId;
    console.log("companyId", companyId)
    if (!companyId) {
  return res.status(400).json({ message: "companyId not found in customer metadata" });
}
    const subscriptionId = session.subscription;
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 1 });
    const priceId = lineItems.data[0]?.price.id;

    const stripeSub = await stripe.subscriptions.retrieve(subscriptionId);
    const subscriptionItem = stripeSub.items.data[0];
  const currentPeriodStarts = subscriptionItem.current_period_start;
  const currentPeriodEnds = subscriptionItem.current_period_end;
    // console.log("stripeSub",stripeSub)
    // console.log("stripeSub", stripeSub.items.data[0]);
    // const currentPeriod = stripeSub.items.data[0]
    // const {current_period_start, current_period_end} = currentPeriod

    await prisma.subscription.upsert({
      where: { companyId: parseInt(companyId) },
      update: {
        stripeSessionId: session.id,
        currentPeriodStart: new Date(currentPeriodStarts * 1000),
        currentPeriodEnd: new Date(currentPeriodEnds * 1000),
        subScriptionStatus: stripeSub.status.toUpperCase(),
        priceId,
        isAvailable: true,
      },
      create: {
        id: subscriptionId,
        stripeSessionId: session.id,
        currentPeriodStart: new Date(currentPeriodStarts * 1000),
        currentPeriodEnd: new Date(currentPeriodEnds * 1000),
        subScriptionStatus: stripeSub.status.toUpperCase(),
        priceId,
        isAvailable: true,
        companyId: parseInt(companyId),
      },
    });

    const packagePlan = await prisma.packagePlan.findUnique({ where: { stripePriceId: priceId } });
    if (packagePlan) {
      await prisma.company.update({ where: { id: parseInt(companyId) }, data: { package: packagePlan.name } });
    }
  }

  if (event.type === 'customer.subscription.updated' || event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object;
    await prisma.subscription.update({
      where: { id: subscription.id },
      data: {
        currentPeriodStart: new Date(subscription.current_period_start * 1000),
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
        subScriptionStatus: subscription.status.toUpperCase(),
        isAvailable: subscription.status === 'active',
      },
    });
  }

  res.json({ received: true });
};

export const getSubscriptionStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const company = await prisma.company.findFirst({ where: { user_id: userId }, include: { subscription: true } });
    if (!company) return res.status(404).json({ message: "Company not found" });

    res.json({
      package: company.package,
      subscription: company.subscription,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getPackagePlans = async (req, res) => {
  try {
    const plans = await prisma.packagePlan.findMany();
    const order = ["LITE", "BASIC", "PREMIUM"];
    const sortedPlans = plans.sort(
      (a, b) => order.indexOf(a.name) - order.indexOf(b.name)
    );
    res.json(sortedPlans);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};