import prisma from "../src/config/prisma.js";
import bcrypt from "bcryptjs";

const hashedPassword = bcrypt.hashSync("123456", 10);

const companyData = [
  {
    name: "TechFlow Solutions",
    email: "hr@techflow.co.th",
    password: hashedPassword,
    phone: "0212345678",
    address: "Sukhumvit Road, Bangkok, Thailand",
  },
  {
    name: "Digital Marketing Pro",
    email: "careers@digitalmarketingpro.com",
    password: hashedPassword,
    phone: "0223456789",
    address: "Silom Complex, Bangkok, Thailand",
  },
  {
    name: "Bangkok General Hospital",
    email: "recruitment@bgh.co.th",
    password: hashedPassword,
    phone: "0234567890",
    address: "New Petchburi Road, Bangkok, Thailand",
  },
  {
    name: "CP All Public Company",
    email: "hr@cpall.co.th",
    password: hashedPassword,
    phone: "0256789012",
    address: "Lat Phrao Road, Bangkok, Thailand",
  },
  {
    name: "Agoda Company",
    email: "talent@agoda.com",
    password: hashedPassword,
    phone: "0267890123",
    address: "Phaya Thai Road, Bangkok, Thailand",
  },
  {
    name: "True Corporation",
    email: "careers@true.co.th",
    password: hashedPassword,
    phone: "0278901234",
    address: "Ratchathewi, Bangkok, Thailand",
  },
  {
    name: "Central Group",
    email: "jobs@central.co.th",
    password: hashedPassword,
    phone: "0289012345",
    address: "Ploenchit Road, Bangkok, Thailand",
  },
  {
    name: "Kasikorn Bank",
    email: "recruitment@kasikornbank.com",
    password: hashedPassword,
    phone: "0290123456",
    address: "Rat Burana Road, Bangkok, Thailand",
  },
  {
    name: "PTT Public Company",
    email: "careers@pttplc.com",
    password: hashedPassword,
    phone: "0201234567",
    address: "Viphavadi Rangsit Road, Bangkok, Thailand",
  },
  {
    name: "Shopee Thailand",
    email: "th-careers@shopee.com",
    password: hashedPassword,
    phone: "0212345679",
    address: "Chamchuri Square, Bangkok, Thailand",
  },
  {
    name: "Lazada Thailand",
    email: "careers@lazada.co.th",
    password: hashedPassword,
    phone: "0223456780",
    address: "Asok Road, Bangkok, Thailand",
  },
  {
    name: "King Power Group",
    email: "hr@kingpower.com",
    password: hashedPassword,
    phone: "0234567891",
    address: "Rangnam Road, Bangkok, Thailand",
  },
  {
    name: "Thai Airways",
    email: "careers@thaiairways.com",
    password: hashedPassword,
    phone: "0245678902",
    address: "Vibhavadi Rangsit Road, Bangkok, Thailand",
  },
  {
    name: "Siam Cement Group",
    email: "jobs@scg.com",
    password: hashedPassword,
    phone: "0256789013",
    address: "Rama IV Road, Bangkok, Thailand",
  },
  {
    name: "DTAC TriNet",
    email: "careers@dtac.co.th",
    password: hashedPassword,
    phone: "0301234567",
    address: "Chamchuri Square, Phaya Thai, Bangkok, Thailand",
  },
  {
    name: "AIS Thailand",
    email: "jobs@ais.co.th",
    password: hashedPassword,
    phone: "0312345678",
    address: "Paholyothin Road, Chatuchak, Bangkok, Thailand",
  },
  {
    name: "Grab Thailand",
    email: "careers-th@grab.com",
    password: hashedPassword,
    phone: "0323456789",
    address: "Empire Tower, Sathorn Road, Bangkok, Thailand",
  },
  {
    name: "LINE Company Thailand",
    email: "careers@linecorp.com",
    password: hashedPassword,
    phone: "0334567890",
    address: "Gaysorn Tower, Ploenchit Road, Bangkok, Thailand",
  },
  {
    name: "Bangkok Bank",
    email: "recruitment@bbl.co.th",
    password: hashedPassword,
    phone: "0356789012",
    address: "Silom Road, Bang Rak, Bangkok, Thailand",
  },
  {
    name: "Bumrungrad Hospital",
    email: "careers@bumrungrad.com",
    password: hashedPassword,
    phone: "0367890123",
    address: "Sukhumvit Road, Wattana, Bangkok, Thailand",
  },
  {
    name: "Siriraj Hospital",
    email: "hr@siriraj.ac.th",
    password: hashedPassword,
    phone: "0378901234",
    address: "Wang Thonglang, Bangkok Noi, Bangkok, Thailand",
  },
  {
    name: "KPMG Thailand",
    email: "careers@kpmg.co.th",
    password: hashedPassword,
    phone: "0389012345",
    address: "Empire Tower, Sathorn Road, Bangkok, Thailand",
  },
  {
    name: "Deloitte Thailand",
    email: "thcareers@deloitte.com",
    password: hashedPassword,
    phone: "0390123456",
    address: "CRC Tower, Ploenchit Road, Bangkok, Thailand",
  },
  {
    name: "Accenture Thailand",
    email: "careers@accenture.com",
    password: hashedPassword,
    phone: "0301234568",
    address: "Park Ventures Ecoplex, Ploenchit Road, Bangkok, Thailand",
  },
  {
    name: "IBM Thailand",
    email: "careers@ibm.com",
    password: hashedPassword,
    phone: "0312345679",
    address: "Sathorn Square Office Tower, Sathorn Road, Bangkok, Thailand",
  },
  {
    name: "Oracle Thailand",
    email: "careers@oracle.com",
    password: hashedPassword,
    phone: "0323456780",
    address: "The Offices at CentralWorld, Pathumwan, Bangkok, Thailand",
  },
  {
    name: "Microsoft Thailand",
    email: "careers@microsoft.com",
    password: hashedPassword,
    phone: "0334567891",
    address: "Sindhorn Building Tower 3, Ploenchit Road, Bangkok, Thailand",
  },
  {
    name: "Google Thailand",
    email: "careers@google.com",
    password: hashedPassword,
    phone: "0345678902",
    address: "Abdulrahim Place, Rama IV Road, Bangkok, Thailand",
  },
  {
    name: "Amazon Thailand",
    email: "careers@amazon.com",
    password: hashedPassword,
    phone: "0356789013",
    address: "Park Ventures Ecoplex, Ploenchit Road, Bangkok, Thailand",
  },
  {
    name: "Foodpanda Thailand",
    email: "careers@foodpanda.co.th",
    password: hashedPassword,
    phone: "0367890124",
    address: "The Offices at CentralWorld, Pathumwan, Bangkok, Thailand",
  },
  {
    name: "Kerry Express Thailand",
    email: "careers@kerryexpress.com",
    password: hashedPassword,
    phone: "0378901235",
    address: "Sukhumvit Road, Khlong Toei, Bangkok, Thailand",
  },
  {
    name: "DHL Thailand",
    email: "careers@dhl.co.th",
    password: hashedPassword,
    phone: "0389012346",
    address: "Grand Amarin Tower, Ploenchit Road, Bangkok, Thailand",
  },
  {
    name: "FedEx Thailand",
    email: "careers@fedex.com",
    password: hashedPassword,
    phone: "0390123457",
    address: "Q House Lumpini, Sathorn Road, Bangkok, Thailand",
  },
  {
    name: "Robinson Department Store",
    email: "hr@robinson.co.th",
    password: hashedPassword,
    phone: "0412345678",
    address: "Sukhumvit Road, Khlong Toei, Bangkok, Thailand",
  },
  {
    name: "Index Living Mall",
    email: "careers@indexlivingmall.com",
    password: hashedPassword,
    phone: "0423456789",
    address: "Rama IV Road, Pathumwan, Bangkok, Thailand",
  },
  {
    name: "Power Buy",
    email: "jobs@powerbuy.co.th",
    password: hashedPassword,
    phone: "0434567890",
    address: "Ratchadapisek Road, Din Daeng, Bangkok, Thailand",
  },
  {
    name: "HomePro",
    email: "recruitment@homepro.co.th",
    password: hashedPassword,
    phone: "0445678901",
    address: "Phahonyothin Road, Chatuchak, Bangkok, Thailand",
  },
  {
    name: "Watsons Thailand",
    email: "careers@watsons.co.th",
    password: hashedPassword,
    phone: "0456789012",
    address: "Ploenchit Road, Pathumwan, Bangkok, Thailand",
  },
  {
    name: "Boots Thailand",
    email: "hr@boots.co.th",
    password: hashedPassword,
    phone: "0467890123",
    address: "Silom Road, Bang Rak, Bangkok, Thailand",
  },
  {
    name: "Pizza Hut Thailand",
    email: "careers@pizzahut.co.th",
    password: hashedPassword,
    phone: "0478901234",
    address: "Phra Ram II Road, Bang Khun Thian, Bangkok, Thailand",
  },
  {
    name: "KFC Thailand",
    email: "jobs@kfc.co.th",
    password: hashedPassword,
    phone: "0489012345",
    address: "Lat Phrao Road, Chatuchak, Bangkok, Thailand",
  },
  {
    name: "McDonald's Thailand",
    email: "careers@mcdonalds.co.th",
    password: hashedPassword,
    phone: "0490123456",
    address: "Sukhumvit Road, Wattana, Bangkok, Thailand",
  },
  {
    name: "Starbucks Thailand",
    email: "careers@starbucks.co.th",
    password: hashedPassword,
    phone: "0401234568",
    address: "Central World, Pathumwan, Bangkok, Thailand",
  },
  {
    name: "Minor Food Group",
    email: "hr@minorfood.com",
    password: hashedPassword,
    phone: "0412345679",
    address: "Ploenchit Road, Pathumwan, Bangkok, Thailand",
  },
  {
    name: "Siam Commercial Bank",
    email: "recruitment@scb.co.th",
    password: hashedPassword,
    phone: "0423456780",
    address: "Ratchadapisek Road, Chatuchak, Bangkok, Thailand",
  },
  {
    name: "Krungsri Bank",
    email: "careers@krungsri.com",
    password: hashedPassword,
    phone: "0434567891",
    address: "Sathorn Road, Bang Rak, Bangkok, Thailand",
  },
  {
    name: "Government Savings Bank",
    email: "hr@gsb.or.th",
    password: hashedPassword,
    phone: "0445678902",
    address: "Phaya Thai Road, Ratchathewi, Bangkok, Thailand",
  },
  {
    name: "Thai Red Cross Society",
    email: "careers@redcross.or.th",
    password: hashedPassword,
    phone: "0456789013",
    address: "Henri Dunant Road, Pathumwan, Bangkok, Thailand",
  },
  {
    name: "Department of Land Transport",
    email: "hr@dlt.go.th",
    password: hashedPassword,
    phone: "0467890124",
    address: "Phahonyothin Road, Chatuchak, Bangkok, Thailand",
  },
  {
    name: "Bangkok Metropolitan Administration",
    email: "jobs@bangkok.go.th",
    password: hashedPassword,
    phone: "0478901235",
    address: "Din So Road, Dusit, Bangkok, Thailand",
  },
  {
    name: "CAT Telecom",
    email: "hr@cat.co.th",
    password: hashedPassword,
    phone: "0490123457",
    address: "Chaeng Watthana Road, Laksi, Bangkok, Thailand",
  },
  {
    name: "Central Pattana PCL",
    email: "careers@centralpattana.co.th",
    password: hashedPassword,
    phone: "0501234567",
    address: "Central World, Rajdamri Road, Bangkok, Thailand",
  },
  {
    name: "S&P Restaurant Group",
    email: "hr@snp.co.th",
    password: hashedPassword,
    phone: "0512345678",
    address: "Huai Khwang District, Bangkok, Thailand",
  },
  {
    name: "Double A Paper",
    email: "careers@doublea.co.th",
    password: hashedPassword,
    phone: "0523456789",
    address: "Bang Na District, Bangkok, Thailand",
  },
  {
    name: "Major Cineplex Group",
    email: "jobs@majorcineplex.com",
    password: hashedPassword,
    phone: "0534567890",
    address: "Ratchayothin Avenue, Bangkok, Thailand",
  },
  {
    name: "Saha Group",
    email: "recruitment@sahagroup.com",
    password: hashedPassword,
    phone: "0545678901",
    address: "Phetchaburi Road, Bangkok, Thailand",
  },
  {
    name: "BTS Group Holdings",
    email: "careers@btsgroup.co.th",
    password: hashedPassword,
    phone: "0556789012",
    address: "Phaya Thai Road, Bangkok, Thailand",
  },
  {
    name: "Thammasat University",
    email: "hr@tu.ac.th",
    password: hashedPassword,
    phone: "0567890123",
    address: "Rangsit Campus, Pathum Thani, Thailand",
  },
  {
    name: "Chulalongkorn University",
    email: "careers@chula.ac.th",
    password: hashedPassword,
    phone: "0578901234",
    address: "Phaya Thai Road, Bangkok, Thailand",
  },
  {
    name: "Bangkok Airways",
    email: "recruitment@bangkokair.com",
    password: hashedPassword,
    phone: "0589012345",
    address: "Vibhavadi Rangsit Road, Bangkok, Thailand",
  },
  {
    name: "Icon Siam",
    email: "jobs@iconsiam.com",
    password: hashedPassword,
    phone: "0590123456",
    address: "Charoen Nakhon Road, Bangkok, Thailand",
  },
  {
    name: "Emporium Department Store",
    email: "hr@emporium.co.th",
    password: hashedPassword,
    phone: "0501234568",
    address: "Sukhumvit Road, Bangkok, Thailand",
  },
  {
    name: "Tops Supermarket",
    email: "careers@tops.co.th",
    password: hashedPassword,
    phone: "0512345679",
    address: "Ploenchit Road, Bangkok, Thailand",
  },
  {
    name: "Villa Market",
    email: "jobs@villamarket.com",
    password: hashedPassword,
    phone: "0523456780",
    address: "Thonglor District, Bangkok, Thailand",
  },
  {
    name: "Fitness First Thailand",
    email: "careers@fitnessfirst.co.th",
    password: hashedPassword,
    phone: "0534567891",
    address: "Asok Junction, Bangkok, Thailand",
  },
  {
    name: "Anytime Fitness Thailand",
    email: "jobs@anytimefitness.co.th",
    password: hashedPassword,
    phone: "0545678902",
    address: "Ekkamai District, Bangkok, Thailand",
  },
  {
    name: "SF Cinema City",
    email: "recruitment@sfcinemacity.com",
    password: hashedPassword,
    phone: "0556789013",
    address: "MBK Center, Bangkok, Thailand",
  },
  {
    name: "True Coffee",
    email: "careers@truecoffee.co.th",
    password: hashedPassword,
    phone: "0567890124",
    address: "Siam Square, Bangkok, Thailand",
  },
  {
    name: "After You Dessert Cafe",
    email: "hr@afteryou.co.th",
    password: hashedPassword,
    phone: "0578901235",
    address: "Thonglor District, Bangkok, Thailand",
  },
  {
    name: "Oishi Group",
    email: "jobs@oishi.co.th",
    password: hashedPassword,
    phone: "0589012346",
    address: "Lat Phrao District, Bangkok, Thailand",
  },
  {
    name: "CP Fresh Mart",
    email: "careers@cpfreshmart.com",
    password: hashedPassword,
    phone: "0590123457",
    address: "Saphan Phut District, Bangkok, Thailand",
  },
  {
    name: "Charoen Pokphand Foods",
    email: "careers@cpf.co.th",
    password: hashedPassword,
    phone: "0601234567",
    address: "Silom Road, Bang Rak, Bangkok, Thailand",
  },
  {
    name: "Betagro Group",
    email: "hr@betagro.com",
    password: hashedPassword,
    phone: "0612345678",
    address: "Lat Phrao Road, Wang Thonglang, Bangkok, Thailand",
  },
  {
    name: "Toyota Motor Thailand",
    email: "careers@toyota.co.th",
    password: hashedPassword,
    phone: "0623456789",
    address: "Gateway Ekamai, Bangkok, Thailand",
  },
  {
    name: "Honda Automobile Thailand",
    email: "jobs@honda.co.th",
    password: hashedPassword,
    phone: "0634567890",
    address: "Lat Phrao Road, Bangkok, Thailand",
  },
  {
    name: "Samsung Electronics Thailand",
    email: "careers@samsung.com",
    password: hashedPassword,
    phone: "0645678901",
    address: "Rama III Road, Bang Phongphang, Bangkok, Thailand",
  },
  {
    name: "LG Electronics Thailand",
    email: "hr@lge.com",
    password: hashedPassword,
    phone: "0656789012",
    address: "Lat Phrao Road, Bangkok, Thailand",
  },
  {
    name: "Unilever Thailand",
    email: "careers@unilever.com",
    password: hashedPassword,
    phone: "0667890123",
    address: "Lumpini Tower, Rama IV Road, Bangkok, Thailand",
  },
  {
    name: "Nestle Thailand",
    email: "jobs@nestle.co.th",
    password: hashedPassword,
    phone: "0678901234",
    address: "Lat Phrao Road, Bangkok, Thailand",
  },
  {
    name: "Thai Union Group",
    email: "careers@thaiunion.com",
    password: hashedPassword,
    phone: "0689012345",
    address: "Vibhavadi Rangsit Road, Bangkok, Thailand",
  },
  {
    name: "Siam Makro",
    email: "recruitment@makro.co.th",
    password: hashedPassword,
    phone: "0690123456",
    address: "Lat Phrao Road, Bangkok, Thailand",
  },
  {
    name: "Lotus's (Tesco Lotus)",
    email: "careers@lotuss.com",
    password: hashedPassword,
    phone: "0601234568",
    address: "Ratchadapisek Road, Bangkok, Thailand",
  },
  {
    name: "Big C Extra",
    email: "hr@bigcextra.co.th",
    password: hashedPassword,
    phone: "0612345679",
    address: "Saphan Phut, Bangkok, Thailand",
  },
  {
    name: "Fashion Island",
    email: "jobs@fashionisland.co.th",
    password: hashedPassword,
    phone: "0623456780",
    address: "Ram Inthra Road, Bangkok, Thailand",
  },
  {
    name: "Future Park Rangsit",
    email: "careers@futurepark.co.th",
    password: hashedPassword,
    phone: "0634567891",
    address: "Phahonyothin Road, Pathum Thani, Thailand",
  },
  {
    name: "Se-ed Book Center",
    email: "hr@se-ed.com",
    password: hashedPassword,
    phone: "0645678902",
    address: "Huai Khwang, Bangkok, Thailand",
  },
  {
    name: "B2S (Books, Toys, Stationery)",
    email: "careers@b2s.co.th",
    password: hashedPassword,
    phone: "0656789013",
    address: "Siam Paragon, Bangkok, Thailand",
  },
  {
    name: "Office Mate",
    email: "jobs@officemate.co.th",
    password: hashedPassword,
    phone: "0667890124",
    address: "Lat Phrao Road, Bangkok, Thailand",
  },
  {
    name: "Thai Post EMS",
    email: "careers@thailandpost.co.th",
    password: hashedPassword,
    phone: "0678901235",
    address: "Charoenkrung Road, Bangkok, Thailand",
  },
  {
    name: "Flash Express",
    email: "hr@flashexpress.co.th",
    password: hashedPassword,
    phone: "0689012346",
    address: "Bang Sue District, Bangkok, Thailand",
  },
  {
    name: "J&T Express Thailand",
    email: "careers@jtexpress.co.th",
    password: hashedPassword,
    phone: "0690123457",
    address: "Huai Khwang District, Bangkok, Thailand",
  },
];

const jobData = [
  {
    company_id: 1,
    title: "Senior Full Stack Developer",
    jobDescription:
      "We are seeking an experienced Full Stack Developer to join our dynamic team. You will be responsible for developing and maintaining web applications using modern technologies. This role involves working with both frontend and backend systems, collaborating with cross-functional teams, and ensuring high-quality code delivery. You'll participate in the entire software development lifecycle from planning to deployment.",
    address: "Sukhumvit Road, Bangkok, Thailand (Hybrid work available)",
    salary: 80000,
    jobRequirement:
      "Bachelor's degree in Computer Science or related field. 5+ years experience in JavaScript, React, Node.js, MongoDB/PostgreSQL. Experience with AWS or GCP, Git version control, Agile methodologies. Strong problem-solving skills and ability to work in a fast-paced environment.",
  },
  {
    company_id: 2,
    title: "Digital Marketing Specialist",
    jobDescription:
      "Join our marketing team as a Digital Marketing Specialist where you'll develop and execute comprehensive digital marketing strategies. You'll manage social media campaigns, create engaging content, analyze performance metrics, and optimize campaigns for maximum ROI. This position requires creativity, analytical thinking, and staying up-to-date with the latest digital marketing trends.",
    address: "Silom Complex, Bangkok, Thailand",
    salary: 45000,
    jobRequirement:
      "Bachelor's degree in Marketing, Communications, or related field. 2-3 years experience in digital marketing, social media management, Google Ads, Facebook Ads. Proficiency in Google Analytics, SEO/SEM knowledge. Excellent communication skills in Thai and English.",
  },
  {
    company_id: 3,
    title: "Registered Nurse - ICU",
    jobDescription:
      "We are looking for a dedicated Registered Nurse to work in our Intensive Care Unit. The successful candidate will provide direct patient care to critically ill patients, monitor vital signs, administer medications, and collaborate with physicians and healthcare teams. This role requires compassion, attention to detail, and the ability to work under pressure in a fast-paced medical environment.",
    address: "New Petchburi Road, Bangkok, Thailand",
    salary: 35000,
    jobRequirement:
      "Bachelor's degree in Nursing. Valid nursing license in Thailand. 1-2 years ICU experience preferred. BLS and ACLS certification required. Strong clinical skills, ability to work 12-hour shifts, excellent communication skills.",
  },
  {
    company_id: 4,
    title: "Store Manager",
    jobDescription:
      "Lead and manage daily operations of our retail store, ensuring excellent customer service and meeting sales targets. You'll supervise staff, manage inventory, handle customer complaints, and ensure compliance with company policies. This position requires strong leadership skills and retail management experience.",
    address: "Lat Phrao Road, Bangkok, Thailand",
    salary: 40000,
    jobRequirement:
      "Bachelor's degree preferred. 3+ years retail management experience. Strong leadership and communication skills. Ability to work flexible hours including weekends. Experience in inventory management and staff supervision.",
  },
  {
    company_id: 5,
    title: "Product Manager - Travel Tech",
    jobDescription:
      "Drive product strategy and development for our travel technology platform. You'll work with engineering, design, and business teams to define product requirements, prioritize features, and ensure successful product launches. This role involves market research, competitive analysis, and data-driven decision making to enhance user experience.",
    address: "Phaya Thai Road, Bangkok, Thailand (Remote work options)",
    salary: 90000,
    jobRequirement:
      "Bachelor's degree in Business, Engineering, or related field. 3-5 years product management experience, preferably in travel or e-commerce. Strong analytical skills, experience with product management tools (Jira, Confluence), data analysis capabilities.",
  },
  {
    company_id: 6,
    title: "Network Engineer",
    jobDescription:
      "Design, implement, and maintain network infrastructure to ensure optimal performance and security. You'll troubleshoot network issues, configure network equipment, and work on network optimization projects. This role requires strong technical skills and knowledge of telecommunications systems.",
    address: "Ratchathewi, Bangkok, Thailand",
    salary: 55000,
    jobRequirement:
      "Bachelor's degree in Computer Engineering, Telecommunications, or related field. 2-4 years network engineering experience. CCNA certification required, CCNP preferred. Knowledge of routing protocols, VPN, firewall configuration.",
  },
  {
    company_id: 7,
    title: "Fashion Buyer",
    jobDescription:
      "Source and purchase fashion merchandise for our retail stores. You'll analyze market trends, negotiate with suppliers, manage vendor relationships, and ensure optimal inventory levels. This position requires strong fashion sense, negotiation skills, and understanding of retail merchandising.",
    address: "Ploenchit Road, Bangkok, Thailand",
    salary: 50000,
    jobRequirement:
      "Bachelor's degree in Fashion Merchandising, Business, or related field. 2-3 years buying experience in fashion retail. Strong negotiation skills, trend analysis capabilities, proficiency in Excel and inventory management systems.",
  },
  {
    company_id: 8,
    title: "Risk Management Analyst",
    jobDescription:
      "Assess and analyze various types of risks including credit, market, and operational risks. You'll develop risk assessment models, prepare reports for management, and ensure compliance with regulatory requirements. This role involves working with large datasets and creating risk mitigation strategies.",
    address: "Rat Burana Road, Bangkok, Thailand",
    salary: 65000,
    jobRequirement:
      "Bachelor's degree in Finance, Economics, Mathematics, or related field. 2-4 years experience in risk management or financial analysis. Strong analytical skills, proficiency in statistical software (R, Python, SAS), knowledge of banking regulations.",
  },
  {
    company_id: 9,
    title: "Process Engineer - Refinery",
    jobDescription:
      "Optimize refinery processes to improve efficiency, safety, and environmental compliance. You'll analyze process data, troubleshoot operational issues, and implement process improvements. This role involves working with sophisticated process control systems and collaborating with operations teams.",
    address: "Viphavadi Rangsit Road, Bangkok, Thailand",
    salary: 75000,
    jobRequirement:
      "Bachelor's degree in Chemical Engineering or related field. 3-5 years experience in oil refinery or petrochemical industry. Knowledge of process simulation software, understanding of refinery operations, strong problem-solving skills.",
  },
  {
    company_id: 10,
    title: "E-commerce Operations Manager",
    jobDescription:
      "Oversee daily e-commerce operations including order fulfillment, inventory management, and customer service. You'll work with multiple teams to ensure smooth operations, optimize processes, and improve customer satisfaction. This role requires strong operational skills and e-commerce platform knowledge.",
    address: "Chamchuri Square, Bangkok, Thailand",
    salary: 60000,
    jobRequirement:
      "Bachelor's degree in Business, Operations Management, or related field. 3-4 years e-commerce operations experience. Knowledge of warehouse management systems, strong analytical skills, ability to work in fast-paced environment.",
  },
  {
    company_id: 11,
    title: "Data Scientist",
    jobDescription:
      "Analyze large datasets to extract business insights and build predictive models. You'll work on machine learning projects, create data visualizations, and collaborate with business teams to drive data-driven decisions. This role involves working with cutting-edge analytics tools and technologies.",
    address: "Asok Road, Bangkok, Thailand (Flexible work arrangements)",
    salary: 85000,
    jobRequirement:
      "Master's degree in Data Science, Statistics, Computer Science, or related field. 3+ years experience in data science or analytics. Proficiency in Python/R, SQL, machine learning libraries. Experience with cloud platforms (AWS, GCP).",
  },
  {
    company_id: 12,
    title: "Duty Free Sales Associate",
    jobDescription:
      "Provide excellent customer service in our duty-free retail environment. You'll assist international travelers with product selection, process sales transactions, and maintain store presentation standards. This role requires multilingual abilities and knowledge of luxury products.",
    address: "Rangnam Road, Bangkok, Thailand",
    salary: 25000,
    jobRequirement:
      "High school diploma or equivalent. 1-2 years retail sales experience preferred. Fluency in English and Thai, additional languages a plus. Customer service skills, ability to work shifts including weekends and holidays.",
  },
  {
    company_id: 13,
    title: "Flight Attendant",
    jobDescription:
      "Ensure passenger safety and comfort during flights while providing exceptional customer service. You'll conduct safety demonstrations, serve meals and beverages, and handle emergency situations. This role requires extensive travel and adherence to strict safety protocols.",
    address: "Vibhavadi Rangsit Road, Bangkok, Thailand",
    salary: 45000,
    jobRequirement:
      "High school diploma, flight attendant certification required. Height requirement 160-185 cm, swimming ability, excellent health condition. Fluency in English and Thai, customer service experience preferred. Willingness to work irregular schedules.",
  },
  {
    company_id: 14,
    title: "Sustainability Manager",
    jobDescription:
      "Lead sustainability initiatives across the organization to reduce environmental impact and promote sustainable practices. You'll develop sustainability strategies, monitor environmental metrics, and ensure compliance with environmental regulations. This role involves stakeholder engagement and project management.",
    address: "Rama IV Road, Bangkok, Thailand",
    salary: 70000,
    jobRequirement:
      "Bachelor's degree in Environmental Science, Engineering, or related field. 4+ years experience in sustainability or environmental management. Knowledge of environmental regulations, project management skills, strong communication abilities.",
  },
  {
    company_id: 1,
    title: "Junior Frontend Developer",
    jobDescription:
      "Join our development team as a Junior Frontend Developer where you'll create responsive web interfaces and collaborate with senior developers. You'll work with modern JavaScript frameworks, participate in code reviews, and contribute to our user-facing applications. This is an excellent opportunity for recent graduates to grow their skills.",
    address: "Sukhumvit Road, Bangkok, Thailand (Hybrid work available)",
    salary: 35000,
    jobRequirement:
      "Bachelor's degree in Computer Science or related field. Knowledge of HTML, CSS, JavaScript, React or Vue.js. Understanding of responsive design, Git version control. Fresh graduates welcome, internship experience is a plus.",
  },
  {
    company_id: 2,
    title: "Content Creator",
    jobDescription:
      "Create engaging content for various digital platforms including social media, blogs, and websites. You'll develop content strategies, write compelling copy, create visual content, and analyze engagement metrics. This role requires creativity and understanding of different content formats.",
    address: "Silom Complex, Bangkok, Thailand",
    salary: 30000,
    jobRequirement:
      "Bachelor's degree in Communications, Marketing, or related field. 1-2 years content creation experience. Strong writing skills in Thai and English, basic graphic design skills, familiarity with social media platforms.",
  },
  {
    company_id: 3,
    title: "Medical Technologist",
    jobDescription:
      "Perform laboratory tests and procedures to assist in patient diagnosis and treatment. You'll operate sophisticated medical equipment, maintain quality control standards, and ensure accurate test results. This role requires attention to detail and knowledge of laboratory procedures.",
    address: "New Petchburi Road, Bangkok, Thailand",
    salary: 30000,
    jobRequirement:
      "Bachelor's degree in Medical Technology or related field. Valid medical technologist license in Thailand. Knowledge of laboratory equipment and procedures, attention to detail, ability to work accurately under pressure.",
  },
  {
    company_id: 4,
    title: "Inventory Analyst",
    jobDescription:
      "Monitor and analyze inventory levels to optimize stock management and reduce costs. You'll forecast demand, track inventory movements, and work with suppliers to ensure adequate stock levels. This role involves data analysis and supply chain coordination.",
    address: "Lat Phrao Road, Bangkok, Thailand",
    salary: 35000,
    jobRequirement:
      "Bachelor's degree in Supply Chain, Business, or related field. 1-2 years experience in inventory management or analysis. Strong Excel skills, analytical abilities, understanding of supply chain principles.",
  },
  {
    company_id: 15,
    title: "5G Network Solutions Engineer",
    jobDescription:
      "Lead the design and implementation of 5G network solutions for enterprise and consumer markets. You'll work on cutting-edge telecommunications technology, optimize network performance, and collaborate with technical teams to deliver next-generation mobile services. This role involves troubleshooting complex network issues and ensuring seamless connectivity.",
    address: "Chamchuri Square, Phaya Thai, Bangkok, Thailand",
    salary: 75000,
    jobRequirement:
      "Bachelor's degree in Telecommunications, Electrical Engineering, or related field. 4+ years experience in mobile network engineering. Knowledge of 5G technology, LTE, network protocols. Strong problem-solving skills and ability to work with complex technical systems.",
  },
  {
    company_id: 16,
    title: "Mobile App Developer - iOS",
    jobDescription:
      "Develop innovative mobile applications for iOS platform focusing on user experience and performance. You'll work with cross-functional teams to create feature-rich apps, implement new technologies, and maintain code quality. This position requires staying current with iOS development trends and Apple's ecosystem.",
    address: "Paholyothin Road, Chatuchak, Bangkok, Thailand",
    salary: 65000,
    jobRequirement:
      "Bachelor's degree in Computer Science or related field. 3+ years iOS development experience using Swift and Objective-C. Experience with Xcode, iOS SDK, RESTful APIs. Knowledge of App Store submission process and mobile UI/UX principles.",
  },
  {
    company_id: 17,
    title: "Driver Partner Operations Manager",
    jobDescription:
      "Manage driver partner operations to ensure service quality and driver satisfaction. You'll develop driver engagement programs, analyze performance metrics, handle driver concerns, and implement operational improvements. This role involves working closely with local driver communities and operations teams.",
    address: "Empire Tower, Sathorn Road, Bangkok, Thailand",
    salary: 55000,
    jobRequirement:
      "Bachelor's degree in Business, Operations, or related field. 2-3 years experience in operations management or driver/partner management. Strong communication skills in Thai and English. Data analysis skills and experience with ride-hailing or logistics industry preferred.",
  },
  {
    company_id: 18,
    title: "UX/UI Designer",
    jobDescription:
      "Create intuitive and engaging user experiences for our digital products. You'll conduct user research, design wireframes and prototypes, collaborate with product teams, and ensure design consistency across platforms. This role requires creativity, user-centered design thinking, and proficiency in design tools.",
    address: "Gaysorn Tower, Ploenchit Road, Bangkok, Thailand",
    salary: 50000,
    jobRequirement:
      "Bachelor's degree in Design, HCI, or related field. 2-3 years UX/UI design experience. Proficiency in Figma, Sketch, Adobe Creative Suite. Strong portfolio demonstrating user-centered design process. Understanding of mobile and web design principles.",
  },
  {
    company_id: 19,
    title: "Credit Risk Analyst",
    jobDescription:
      "Assess credit risk for individual and corporate lending portfolios. You'll analyze financial statements, develop risk models, prepare credit reports, and monitor loan performance. This role involves working with large datasets and supporting lending decisions through comprehensive risk analysis.",
    address: "Silom Road, Bang Rak, Bangkok, Thailand",
    salary: 55000,
    jobRequirement:
      "Bachelor's degree in Finance, Economics, or related field. 2-3 years experience in credit analysis or risk management. Strong analytical skills, proficiency in Excel and statistical software. Knowledge of banking regulations and financial statement analysis.",
  },
  {
    company_id: 20,
    title: "International Patient Coordinator",
    jobDescription:
      "Coordinate medical services for international patients including appointment scheduling, treatment planning, and cultural support. You'll work with medical teams, handle insurance coordination, and ensure excellent patient experience. This role requires multilingual abilities and cultural sensitivity.",
    address: "Sukhumvit Road, Wattana, Bangkok, Thailand",
    salary: 40000,
    jobRequirement:
      "Bachelor's degree in Healthcare Administration, International Relations, or related field. 1-2 years healthcare or hospitality experience. Fluency in English and Thai, additional languages preferred. Strong communication and organizational skills.",
  },
  {
    company_id: 21,
    title: "Emergency Medicine Physician",
    jobDescription:
      "Provide emergency medical care in our emergency department, handling acute medical conditions and trauma cases. You'll make critical decisions under pressure, collaborate with medical teams, and ensure high-quality patient care. This position requires board certification and ability to work rotating shifts.",
    address: "Wang Thonglang, Bangkok Noi, Bangkok, Thailand",
    salary: 120000,
    jobRequirement:
      "Medical degree and emergency medicine residency completion. Board certification in Emergency Medicine. Valid medical license in Thailand. 2+ years emergency medicine experience. Strong clinical skills and ability to work under pressure.",
  },
  {
    company_id: 22,
    title: "Management Consultant",
    jobDescription:
      "Provide strategic consulting services to clients across various industries. You'll analyze business processes, identify improvement opportunities, develop recommendations, and support implementation. This role involves client interaction, project management, and delivering high-quality consulting solutions.",
    address: "Empire Tower, Sathorn Road, Bangkok, Thailand",
    salary: 85000,
    jobRequirement:
      "Master's degree in Business Administration or related field. 3-5 years consulting experience. Strong analytical and problem-solving skills. Excellent presentation and communication abilities. Experience with project management and client relationship management.",
  },
  {
    company_id: 23,
    title: "Tax Senior Associate",
    jobDescription:
      "Provide tax consulting and compliance services for corporate clients. You'll prepare tax returns, conduct tax research, assist with tax planning strategies, and support audit processes. This role requires deep knowledge of Thai tax regulations and international tax compliance.",
    address: "CRC Tower, Ploenchit Road, Bangkok, Thailand",
    salary: 60000,
    jobRequirement:
      "Bachelor's degree in Accounting, Finance, or related field. CPA certification preferred. 3-4 years tax experience in public accounting. Knowledge of Thai tax laws and regulations. Strong attention to detail and analytical skills.",
  },
  {
    company_id: 24,
    title: "Cloud Solutions Architect",
    jobDescription:
      "Design and implement cloud infrastructure solutions for enterprise clients. You'll assess client needs, architect scalable cloud solutions, and oversee migration projects. This role involves working with cutting-edge cloud technologies and ensuring optimal performance and security.",
    address: "Park Ventures Ecoplex, Ploenchit Road, Bangkok, Thailand",
    salary: 95000,
    jobRequirement:
      "Bachelor's degree in Computer Science, Engineering, or related field. 5+ years experience in cloud architecture and design. Certification in AWS, Azure, or GCP. Strong knowledge of cloud security, networking, and infrastructure as code.",
  },
  {
    company_id: 25,
    title: "Database Administrator",
    jobDescription:
      "Manage and maintain enterprise database systems ensuring optimal performance, security, and availability. You'll monitor database performance, implement backup and recovery procedures, and troubleshoot database issues. This role requires expertise in multiple database technologies and platforms.",
    address: "Sathorn Square Office Tower, Sathorn Road, Bangkok, Thailand",
    salary: 70000,
    jobRequirement:
      "Bachelor's degree in Computer Science or related field. 4+ years database administration experience. Expertise in Oracle, SQL Server, MySQL, or PostgreSQL. Knowledge of database security, performance tuning, and disaster recovery procedures.",
  },
  {
    company_id: 26,
    title: "ERP Functional Consultant",
    jobDescription:
      "Implement and configure ERP systems for enterprise clients, focusing on business process optimization. You'll gather requirements, configure system modules, conduct user training, and provide ongoing support. This role requires understanding of business processes and ERP technology.",
    address: "The Offices at CentralWorld, Pathumwan, Bangkok, Thailand",
    salary: 75000,
    jobRequirement:
      "Bachelor's degree in Business, Information Systems, or related field. 3-5 years ERP implementation experience (SAP, Oracle, Microsoft Dynamics). Strong business process knowledge, project management skills, and client communication abilities.",
  },
  {
    company_id: 27,
    title: "DevOps Engineer",
    jobDescription:
      "Build and maintain CI/CD pipelines, automate deployment processes, and ensure system reliability. You'll work with development teams to streamline software delivery, monitor system performance, and implement infrastructure as code. This role requires expertise in automation tools and cloud platforms.",
    address: "Sindhorn Building Tower 3, Ploenchit Road, Bangkok, Thailand",
    salary: 80000,
    jobRequirement:
      "Bachelor's degree in Computer Science or related field. 3-4 years DevOps experience. Proficiency in Docker, Kubernetes, Jenkins, Terraform. Experience with AWS/Azure, monitoring tools, and scripting languages (Python, Bash).",
  },
  {
    company_id: 28,
    title: "AI/ML Engineer",
    jobDescription:
      "Develop machine learning models and AI solutions to solve complex business problems. You'll work on data preprocessing, model training, deployment, and optimization. This role involves collaborating with data scientists and engineering teams to productionize AI solutions.",
    address: "Abdulrahim Place, Rama IV Road, Bangkok, Thailand",
    salary: 90000,
    jobRequirement:
      "Master's degree in Computer Science, Data Science, or related field. 3+ years experience in machine learning and AI. Proficiency in Python, TensorFlow, PyTorch. Experience with cloud ML platforms and MLOps practices.",
  },
  {
    company_id: 29,
    title: "Software Development Manager",
    jobDescription:
      "Lead software development teams and manage product development lifecycle. You'll oversee project planning, resource allocation, team mentoring, and ensure delivery of high-quality software products. This role requires both technical expertise and strong leadership skills.",
    address: "Park Ventures Ecoplex, Ploenchit Road, Bangkok, Thailand",
    salary: 110000,
    jobRequirement:
      "Bachelor's degree in Computer Science or related field. 7+ years software development experience with 3+ years in management. Strong technical background, project management skills, and experience leading development teams.",
  },
  {
    company_id: 30,
    title: "Delivery Operations Specialist",
    jobDescription:
      "Optimize food delivery operations including route planning, driver management, and customer satisfaction. You'll analyze delivery metrics, implement process improvements, and coordinate with restaurant partners. This role requires analytical skills and understanding of logistics operations.",
    address: "The Offices at CentralWorld, Pathumwan, Bangkok, Thailand",
    salary: 35000,
    jobRequirement:
      "Bachelor's degree in Operations, Logistics, or related field. 1-2 years experience in operations or logistics. Strong analytical skills, proficiency in Excel, understanding of delivery/logistics operations. Ability to work in fast-paced environment.",
  },
  {
    company_id: 31,
    title: "Logistics Coordinator",
    jobDescription:
      "Coordinate domestic and international shipping operations ensuring timely and cost-effective delivery. You'll track shipments, communicate with customers, resolve delivery issues, and maintain shipping documentation. This role requires attention to detail and customer service skills.",
    address: "Sukhumvit Road, Khlong Toei, Bangkok, Thailand",
    salary: 32000,
    jobRequirement:
      "Bachelor's degree in Logistics, Supply Chain, or related field. 1-2 years logistics or shipping experience. Knowledge of international shipping procedures, customs regulations. Strong communication skills and attention to detail.",
  },
  {
    company_id: 32,
    title: "Supply Chain Analyst",
    jobDescription:
      "Analyze supply chain performance and identify optimization opportunities. You'll track KPIs, prepare reports, forecast demand, and support strategic planning. This role involves working with large datasets and providing insights to improve supply chain efficiency.",
    address: "Grand Amarin Tower, Ploenchit Road, Bangkok, Thailand",
    salary: 45000,
    jobRequirement:
      "Bachelor's degree in Supply Chain, Operations, or related field. 2-3 years supply chain or analytics experience. Strong Excel and data analysis skills, knowledge of supply chain principles. Experience with ERP systems preferred.",
  },
  {
    company_id: 33,
    title: "International Trade Specialist",
    jobDescription:
      "Manage international shipping documentation and customs compliance for global shipments. You'll prepare export/import documents, ensure regulatory compliance, and coordinate with customs authorities. This role requires knowledge of international trade regulations and documentation.",
    address: "Q House Lumpini, Sathorn Road, Bangkok, Thailand",
    salary: 40000,
    jobRequirement:
      "Bachelor's degree in International Business, Logistics, or related field. 2-3 years international trade experience. Knowledge of customs procedures, trade regulations, shipping documentation. Strong attention to detail and organizational skills.",
  },
  {
    company_id: 34,
    title: "Store Cashier",
    jobDescription:
      "Handle customer transactions at point-of-sale systems and provide friendly customer service. You'll process payments, handle returns, maintain cash accuracy, and assist customers with inquiries. This role offers excellent entry-level experience in retail operations and customer service.",
    address: "Sukhumvit Road, Khlong Toei, Bangkok, Thailand",
    salary: 12000,
    jobRequirement:
      "High school diploma. No experience required. Basic math skills, attention to detail. Honest and reliable character. Ability to stand for long periods and work flexible hours including weekends.",
  },
  {
    company_id: 35,
    title: "Furniture Sales Consultant",
    jobDescription:
      "Help customers choose furniture and home decor items that meet their needs and budget. You'll learn about product features, provide design suggestions, and process sales orders. This position includes product training and offers commission-based earnings potential.",
    address: "Rama IV Road, Pathumwan, Bangkok, Thailand",
    salary: 18000,
    jobRequirement:
      "High school diploma or vocational certificate. Interest in interior design and home decoration. Good communication skills. No experience required, training provided. Ability to work weekends and holidays.",
  },
  {
    company_id: 36,
    title: "Junior IT Support Technician",
    jobDescription:
      "Provide basic technical support for computer hardware and software issues. You'll assist customers with product selection, troubleshoot simple technical problems, and learn about various technology products. This role offers excellent entry into the IT field with on-the-job training.",
    address: "Ratchadapisek Road, Din Daeng, Bangkok, Thailand",
    salary: 20000,
    jobRequirement:
      "Vocational certificate in IT or related field. Basic computer knowledge. Problem-solving skills. No experience required, training provided. Interest in technology and willingness to learn. Good communication skills.",
  },
  {
    company_id: 37,
    title: "Warehouse Assistant",
    jobDescription:
      "Support warehouse operations including receiving, storing, and shipping merchandise. You'll learn inventory management, operate basic warehouse equipment, and ensure accurate order fulfillment. This entry-level position offers growth opportunities in logistics and supply chain.",
    address: "Phahonyothin Road, Chatuchak, Bangkok, Thailand",
    salary: 14000,
    jobRequirement:
      "High school diploma. Physical fitness for lifting and moving items. Attention to detail. No experience required. Willingness to work in warehouse environment. Basic computer skills preferred.",
  },
  {
    company_id: 38,
    title: "Beauty Consultant",
    jobDescription:
      "Assist customers with cosmetics and personal care product selection. You'll learn about different beauty brands, provide product demonstrations, and help customers find suitable products. This role includes comprehensive beauty product training and offers commission opportunities.",
    address: "Ploenchit Road, Pathumwan, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma. Interest in beauty and cosmetics. Good personal grooming. No experience required, comprehensive training provided. Customer service mindset. Ability to work retail hours.",
  },
  {
    company_id: 39,
    title: "Pharmacy Assistant",
    jobDescription:
      "Support pharmacists with basic pharmacy operations including inventory management, customer service, and product organization. You'll learn about pharmaceutical products and health supplements while providing excellent customer care in a healthcare setting.",
    address: "Silom Road, Bang Rak, Bangkok, Thailand",
    salary: 17000,
    jobRequirement:
      "High school diploma. Interest in healthcare and pharmacy. Good communication skills. No experience required, training provided. Attention to detail. Honest and trustworthy character.",
  },
  {
    company_id: 40,
    title: "Restaurant Crew Member",
    jobDescription:
      "Serve customers, take orders, prepare food items, and maintain restaurant cleanliness. You'll learn food service operations, work as part of a team, and provide excellent customer service. This position offers flexible scheduling and advancement opportunities within the company.",
    address: "Phra Ram II Road, Bang Khun Thian, Bangkok, Thailand",
    salary: 13000,
    jobRequirement:
      "High school diploma. No experience required. Good attitude and willingness to learn. Ability to work in fast-paced environment. Flexibility to work various shifts including weekends. Food handler's license preferred but training provided.",
  },
  {
    company_id: 41,
    title: "Kitchen Assistant",
    jobDescription:
      "Support kitchen operations including food preparation, cooking assistance, and maintaining kitchen cleanliness. You'll learn food safety procedures, basic cooking techniques, and work in a team environment. This entry-level position can lead to cook and kitchen management roles.",
    address: "Lat Phrao Road, Chatuchak, Bangkok, Thailand",
    salary: 14000,
    jobRequirement:
      "High school diploma. Interest in food service. No experience required, training provided. Ability to work in hot kitchen environment. Physical stamina for standing long hours. Willingness to learn food safety procedures.",
  },
  {
    company_id: 42,
    title: "Barista Trainee",
    jobDescription:
      "Learn to prepare coffee drinks, serve customers, and maintain café cleanliness. You'll receive comprehensive training in coffee preparation, customer service, and point-of-sale operations. This role offers opportunities to develop skills in hospitality and beverage service.",
    address: "Sukhumvit Road, Wattana, Bangkok, Thailand",
    salary: 15000,
    jobRequirement:
      "High school diploma. Interest in coffee and customer service. No experience required, full training provided. Good communication skills. Ability to work early morning, evening, and weekend shifts. Friendly and energetic personality.",
  },
  {
    company_id: 43,
    title: "Coffee Shop Crew",
    jobDescription:
      "Prepare beverages, serve food items, handle customer orders, and maintain store appearance. You'll learn about coffee preparation, food service, and customer relationship building. This position offers a fun work environment and opportunities for advancement.",
    address: "Central World, Pathumwan, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma. Customer service orientation. No experience required. Ability to multitask and work under pressure. Flexible scheduling availability. Interest in learning about coffee and food service.",
  },
  {
    company_id: 44,
    title: "Restaurant Server",
    jobDescription:
      "Take customer orders, serve food and beverages, and ensure excellent dining experience. You'll learn menu knowledge, food service techniques, and customer relations. This role includes tips and offers growth opportunities in restaurant management.",
    address: "Ploenchit Road, Pathumwan, Bangkok, Thailand",
    salary: 17000,
    jobRequirement:
      "High school diploma. Good communication and interpersonal skills. No experience required, training provided. Ability to carry food trays and work on feet for extended periods. Professional appearance and friendly attitude.",
  },
  {
    company_id: 45,
    title: "Bank Teller Trainee",
    jobDescription:
      "Learn basic banking operations including customer transactions, account services, and cash handling. You'll receive comprehensive banking training and work directly with customers to provide financial services. This entry-level position offers excellent career prospects in banking.",
    address: "Ratchadapisek Road, Chatuchak, Bangkok, Thailand",
    salary: 22000,
    jobRequirement:
      "Bachelor's degree in any field. Strong math skills and attention to detail. No banking experience required, comprehensive training provided. Good communication skills. Honest and trustworthy character. Customer service orientation.",
  },
  {
    company_id: 46,
    title: "Junior Credit Officer",
    jobDescription:
      "Assist in processing loan applications and conducting basic credit analysis. You'll learn banking procedures, customer interview techniques, and documentation requirements. This role provides excellent foundation for a career in banking and finance.",
    address: "Sathorn Road, Bang Rak, Bangkok, Thailand",
    salary: 25000,
    jobRequirement:
      "Bachelor's degree in Business, Finance, or related field. Fresh graduates welcome. Strong analytical skills. Good communication abilities. No experience required, training provided. Willingness to travel for customer visits.",
  },
  {
    company_id: 47,
    title: "Customer Service Representative",
    jobDescription:
      "Handle customer inquiries, process account requests, and provide information about banking products and services. You'll learn about various financial products and develop strong customer service skills in a professional banking environment.",
    address: "Phaya Thai Road, Ratchathewi, Bangkok, Thailand",
    salary: 20000,
    jobRequirement:
      "Bachelor's degree preferred. Good communication skills in Thai and basic English. No experience required. Customer service mindset. Computer literacy. Professional appearance and attitude.",
  },
  {
    company_id: 48,
    title: "Administrative Assistant",
    jobDescription:
      "Support daily administrative operations including document preparation, data entry, and basic office duties. You'll learn office procedures, filing systems, and communication protocols. This role offers excellent exposure to healthcare administration and potential for advancement.",
    address: "Henri Dunant Road, Pathumwan, Bangkok, Thailand",
    salary: 18000,
    jobRequirement:
      "High school diploma or vocational certificate. Basic computer skills (Word, Excel). Good organizational skills. No experience required. Attention to detail. Professional communication skills.",
  },
  {
    company_id: 49,
    title: "Data Entry Clerk",
    jobDescription:
      "Input and maintain accurate records in government databases and filing systems. You'll learn government procedures, document processing, and data management. This position offers stable employment and opportunities to learn about public service.",
    address: "Phahonyothin Road, Chatuchak, Bangkok, Thailand",
    salary: 19000,
    jobRequirement:
      "High school diploma. Good typing skills and attention to detail. Basic computer knowledge. No experience required, training provided. Reliability and punctuality. Ability to handle confidential information.",
  },
  {
    company_id: 50,
    title: "Junior Administrative Officer",
    jobDescription:
      "Assist with municipal administrative tasks including document processing, citizen services, and basic clerical duties. You'll learn about local government operations and public service delivery. This role offers stable career prospects in public administration.",
    address: "Din So Road, Dusit, Bangkok, Thailand",
    salary: 21000,
    jobRequirement:
      "Bachelor's degree in any field. Thai citizenship required. Good communication skills. No experience required. Interest in public service. Basic computer skills. Professional attitude and appearance.",
  },
  {
    company_id: 51,
    title: "Junior Technical Support",
    jobDescription:
      "Provide basic technical support for telecommunications equipment and assist customers with service inquiries. You'll learn about telecom systems, troubleshooting procedures, and customer service. This role offers entry into the telecommunications industry.",
    address: "Chaeng Watthana Road, Laksi, Bangkok, Thailand",
    salary: 23000,
    jobRequirement:
      "Vocational certificate in Electronics or related field. Basic understanding of telecommunications. No experience required, training provided. Problem-solving skills. Good communication abilities. Willingness to learn new technologies.",
  },
  {
    company_id: 52,
    title: "Shopping Mall Information Counter Staff",
    jobDescription:
      "Provide information and assistance to mall visitors at the information counter. You'll help customers locate stores, provide directions, handle lost and found items, and assist with general inquiries. This role requires excellent interpersonal skills and knowledge of mall layout and services.",
    address: "Central World, Rajdamri Road, Bangkok, Thailand",
    salary: 18000,
    jobRequirement:
      "High school diploma. Good communication skills in Thai and basic English. Friendly and helpful personality. No experience required, training provided. Ability to stand for extended periods. Knowledge of Bangkok area preferred.",
  },
  {
    company_id: 53,
    title: "Bakery Assistant",
    jobDescription:
      "Assist in bakery operations including bread preparation, pastry display, customer service, and maintaining bakery cleanliness. You'll learn basic baking techniques, food safety procedures, and product knowledge. This position offers hands-on experience in food production.",
    address: "Huai Khwang District, Bangkok, Thailand",
    salary: 15000,
    jobRequirement:
      "High school diploma. Interest in baking and food preparation. No experience required. Early morning availability (4:00 AM start). Physical ability to lift flour bags and work in warm environment. Food safety training provided.",
  },
  {
    company_id: 54,
    title: "Production Line Worker",
    jobDescription:
      "Work on paper manufacturing production line, operating machinery, quality checking products, and packaging finished goods. You'll learn industrial production processes, safety procedures, and quality control standards. This role offers stable employment in manufacturing sector.",
    address: "Bang Na District, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma. Physical fitness for factory work. Attention to detail for quality control. No experience required, comprehensive safety training provided. Willingness to work rotating shifts. Ability to work in industrial environment.",
  },
  {
    company_id: 55,
    title: "Cinema Usher",
    jobDescription:
      "Guide customers to seats, check tickets, maintain theater cleanliness, and assist with customer inquiries. You'll learn about movie scheduling, customer service, and theater operations. This part-time position offers flexible hours and free movie viewing benefits.",
    address: "Ratchayothin Avenue, Bangkok, Thailand",
    salary: 13000,
    jobRequirement:
      "High school diploma. Good customer service skills. Ability to work evenings, weekends, and holidays. No experience required. Physical ability to walk and stand for long periods. Friendly and professional demeanor.",
  },
  {
    company_id: 56,
    title: "Garment Factory Seamstress",
    jobDescription:
      "Operate sewing machines to produce clothing items according to specifications. You'll learn different sewing techniques, quality standards, and production targets. This role offers skill development in textile manufacturing and potential for advancement to supervisor roles.",
    address: "Phetchaburi Road, Bangkok, Thailand",
    salary: 14000,
    jobRequirement:
      "Vocational certificate in garment or related field preferred. Basic sewing skills. No industrial experience required, training provided. Good hand-eye coordination. Ability to meet daily production quotas. Attention to detail.",
  },
  {
    company_id: 57,
    title: "BTS Station Customer Service Agent",
    jobDescription:
      "Assist passengers with ticketing, provide directions, handle customer complaints, and ensure station safety. You'll learn about transit operations, emergency procedures, and customer service excellence. This role offers stable employment with government benefits.",
    address: "Phaya Thai Road, Bangkok, Thailand",
    salary: 22000,
    jobRequirement:
      "High school diploma. Good communication skills in Thai and basic English. Customer service orientation. No experience required, comprehensive training provided. Ability to work rotating shifts. Physical fitness for emergency situations.",
  },
  {
    company_id: 58,
    title: "University Laboratory Assistant",
    jobDescription:
      "Support laboratory operations by preparing equipment, maintaining lab cleanliness, and assisting researchers with basic tasks. You'll learn laboratory procedures, safety protocols, and equipment handling. This position offers exposure to academic research environment.",
    address: "Rangsit Campus, Pathum Thani, Thailand",
    salary: 17000,
    jobRequirement:
      "High school diploma with science background. Interest in laboratory work. No experience required, safety training provided. Attention to detail. Ability to follow precise instructions. Willingness to learn scientific procedures.",
  },
  {
    company_id: 59,
    title: "Student Affairs Assistant",
    jobDescription:
      "Support student services including registration assistance, document processing, and event coordination. You'll learn about university administration, student support services, and office procedures. This role offers experience in educational administration.",
    address: "Phaya Thai Road, Bangkok, Thailand",
    salary: 19000,
    jobRequirement:
      "Bachelor's degree in any field. Good organizational skills. No experience required. Strong communication abilities. Computer literacy (Word, Excel). Professional attitude. Interest in working with students.",
  },
  {
    company_id: 60,
    title: "Ground Crew Trainee",
    jobDescription:
      "Assist with aircraft ground operations including baggage handling, aircraft cleaning, and passenger boarding assistance. You'll learn aviation safety procedures, ground equipment operation, and airline protocols. This entry-level position can lead to various aviation careers.",
    address: "Vibhavadi Rangsit Road, Bangkok, Thailand",
    salary: 20000,
    jobRequirement:
      "High school diploma. Physical fitness for outdoor work and heavy lifting. No aviation experience required, comprehensive training provided. English communication skills. Clean criminal background check. Willingness to work irregular hours.",
  },
  {
    company_id: 61,
    title: "Luxury Retail Sales Associate",
    jobDescription:
      "Assist high-end customers with luxury product selection and provide premium customer service. You'll learn about luxury brands, product knowledge, and sophisticated sales techniques. This role offers exposure to international retail standards and affluent clientele.",
    address: "Charoen Nakhon Road, Bangkok, Thailand",
    salary: 20000,
    jobRequirement:
      "High school diploma minimum, some college preferred. Excellent grooming and professional appearance. Good English communication skills. No luxury retail experience required. Customer service mindset. Ability to work weekends and holidays.",
  },
  {
    company_id: 62,
    title: "Department Store Visual Merchandiser Assistant",
    jobDescription:
      "Assist with product displays, window arrangements, and store layout according to brand guidelines. You'll learn visual merchandising principles, seasonal display concepts, and retail presentation techniques. This creative role offers artistic expression in retail environment.",
    address: "Sukhumvit Road, Bangkok, Thailand",
    salary: 18000,
    jobRequirement:
      "High school diploma, art or design background preferred. Creative eye for color and design. No merchandising experience required, training provided. Physical ability to lift and arrange displays. Flexibility for evening and weekend display changes.",
  },
  {
    company_id: 63,
    title: "Grocery Store Stock Clerk",
    jobDescription:
      "Receive deliveries, stock shelves, rotate products, and maintain inventory accuracy. You'll learn inventory management, product handling, and store operations. This role offers steady work schedule and opportunities for advancement to supervisory positions.",
    address: "Ploenchit Road, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma. Physical ability to lift boxes and work on feet. Attention to detail for inventory accuracy. No experience required. Early morning availability for receiving deliveries. Reliable and punctual.",
  },
  {
    company_id: 64,
    title: "Gourmet Market Deli Counter Assistant",
    jobDescription:
      "Prepare and serve gourmet food items, assist customers with product selection, and maintain food safety standards. You'll learn about international foods, food preparation, and upscale customer service. This role offers culinary exposure and skill development.",
    address: "Thonglor District, Bangkok, Thailand",
    salary: 19000,
    jobRequirement:
      "High school diploma. Interest in food and customer service. No experience required, food safety training provided. Good hygiene practices. Ability to work with sharp knives and food preparation equipment. English communication helpful.",
  },
  {
    company_id: 65,
    title: "Gym Receptionist",
    jobDescription:
      "Greet members, handle membership registration, schedule personal training appointments, and maintain front desk operations. You'll learn about fitness programs, membership management, and customer retention. This role offers free gym membership and health-focused work environment.",
    address: "Asok Junction, Bangkok, Thailand",
    salary: 17000,
    jobRequirement:
      "High school diploma. Interest in fitness and health. Good communication and computer skills. No gym experience required. Professional appearance. Ability to work early morning and evening shifts. Customer service orientation.",
  },
  {
    company_id: 66,
    title: "Fitness Center Cleaner",
    jobDescription:
      "Maintain cleanliness and hygiene standards throughout fitness facilities including equipment sanitization, locker room maintenance, and facility upkeep. You'll learn proper cleaning procedures for fitness equipment and health facility standards.",
    address: "Ekkamai District, Bangkok, Thailand",
    salary: 14000,
    jobRequirement:
      "Elementary education minimum. Physical ability for cleaning tasks. Attention to detail for hygiene standards. No experience required, training provided. Reliability for early morning or late evening shifts. Understanding of health and safety protocols.",
  },
  {
    company_id: 67,
    title: "Movie Theater Concession Stand Worker",
    jobDescription:
      "Prepare and serve movie theater snacks and beverages, operate point-of-sale systems, and maintain concession area cleanliness. You'll learn food service, cash handling, and customer service in entertainment environment. Part-time position with flexible scheduling.",
    address: "MBK Center, Bangkok, Thailand",
    salary: 15000,
    jobRequirement:
      "High school diploma. No experience required. Ability to work evenings, weekends, and holidays. Food handling training provided. Friendly personality. Ability to work in fast-paced environment during busy movie times.",
  },
  {
    company_id: 68,
    title: "Coffee Cart Operator",
    jobDescription:
      "Operate mobile coffee cart in high-traffic locations, prepare coffee drinks, handle cash transactions, and maintain equipment. You'll learn coffee preparation, mobile food service, and customer interaction. This role offers entrepreneurial experience and direct customer contact.",
    address: "Siam Square, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma. Interest in coffee and customer service. No experience required, coffee training provided. Ability to work outdoors. Physical ability to push/pull cart and stand for long periods. Basic math skills for cash handling.",
  },
  {
    company_id: 69,
    title: "Dessert Cafe Server",
    jobDescription:
      "Take orders, serve desserts and beverages, maintain table cleanliness, and provide excellent customer experience. You'll learn about specialty desserts, customer service, and cafe operations. This role offers tips and experience in trendy food service environment.",
    address: "Thonglor District, Bangkok, Thailand",
    salary: 18000,
    jobRequirement:
      "High school diploma. Friendly personality and good communication skills. No restaurant experience required. Ability to memorize menu items. Physical ability to carry multiple plates. Availability for evening and weekend shifts.",
  },
  {
    company_id: 70,
    title: "Beverage Production Line Worker",
    jobDescription:
      "Operate bottling equipment, monitor product quality, and package finished beverages. You'll learn manufacturing processes, quality control procedures, and food safety standards. This role offers stable employment in food and beverage manufacturing sector.",
    address: "Lat Phrao District, Bangkok, Thailand",
    salary: 15000,
    jobRequirement:
      "High school diploma. Physical ability for factory work. Attention to detail for quality control. No manufacturing experience required, comprehensive training provided. Willingness to work in cold/refrigerated environment. Ability to work standing for 8-hour shifts.",
  },
  {
    company_id: 71,
    title: "Fresh Market Produce Assistant",
    jobDescription:
      "Arrange fresh fruits and vegetables, assist customers with produce selection, monitor product freshness, and maintain produce section cleanliness. You'll learn about fresh produce handling, customer service, and inventory rotation principles.",
    address: "Saphan Phut District, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma. Interest in fresh foods and customer service. No retail experience required. Early morning availability (5:00 AM start). Physical ability to lift produce boxes. Knowledge of fruits and vegetables helpful but not required.",
  },
  {
    company_id: 72,
    title: "Poultry Farm Worker",
    jobDescription:
      "Care for chickens in commercial poultry farms including feeding, cleaning coops, collecting eggs, and monitoring bird health. You'll learn animal husbandry, farm safety procedures, and basic veterinary care. This outdoor role offers stable employment in agricultural sector with growth opportunities.",
    address: "Silom Road, Bang Rak, Bangkok, Thailand",
    salary: 14000,
    jobRequirement:
      "Elementary education minimum. Physical fitness for farm work. No agricultural experience required, training provided. Willingness to work with animals. Early morning availability (5:00 AM start). Ability to work outdoors in various weather conditions.",
  },
  {
    company_id: 73,
    title: "Feed Mill Operator Assistant",
    jobDescription:
      "Assist in animal feed production including ingredient mixing, machinery operation, and quality checking. You'll learn about animal nutrition, production processes, and industrial equipment operation. This role provides experience in agricultural manufacturing sector.",
    address: "Lat Phrao Road, Wang Thonglang, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma. Physical ability for factory work. Attention to detail for quality control. No manufacturing experience required. Willingness to work with dust and strong odors. Basic understanding of machinery operation helpful.",
  },
  {
    company_id: 74,
    title: "Automotive Parts Sorter",
    jobDescription:
      "Sort and organize automotive parts in warehouse, prepare orders for assembly line, and maintain inventory accuracy. You'll learn about automotive components, warehouse management, and logistics operations. This entry-level position offers exposure to automotive industry.",
    address: "Gateway Ekamai, Bangkok, Thailand",
    salary: 17000,
    jobRequirement:
      "High school diploma. Good organizational skills. Physical ability to lift automotive parts. No automotive experience required, training provided. Attention to detail for part identification. Willingness to work in warehouse environment.",
  },
  {
    company_id: 75,
    title: "Motorcycle Assembly Line Worker",
    jobDescription:
      "Work on motorcycle assembly line installing components, following assembly procedures, and ensuring quality standards. You'll learn manufacturing processes, hand tool operation, and quality control. This role offers skill development in automotive manufacturing.",
    address: "Lat Phrao Road, Bangkok, Thailand",
    salary: 18000,
    jobRequirement:
      "Vocational certificate in mechanics or related field preferred. Manual dexterity for assembly work. No assembly experience required, comprehensive training provided. Ability to work standing for 8-hour shifts. Understanding of basic tools.",
  },
  {
    company_id: 76,
    title: "Electronics Quality Inspector",
    jobDescription:
      "Inspect electronic products for defects, test functionality, and ensure quality standards. You'll learn quality control procedures, testing equipment operation, and defect identification. This role develops technical skills and attention to detail in electronics manufacturing.",
    address: "Rama III Road, Bang Phongphang, Bangkok, Thailand",
    salary: 19000,
    jobRequirement:
      "High school diploma with science background. Good eyesight for detailed inspection work. No electronics experience required, training provided. Ability to work with small components. Understanding of basic electronic concepts helpful.",
  },
  {
    company_id: 77,
    title: "Home Appliance Repair Trainee",
    jobDescription:
      "Learn to diagnose and repair household appliances under supervision of experienced technicians. You'll develop technical skills, customer service abilities, and problem-solving techniques. This apprenticeship role offers career path in appliance service industry.",
    address: "Lat Phrao Road, Bangkok, Thailand",
    salary: 20000,
    jobRequirement:
      "Vocational certificate in electrical or electronics. Interest in appliance repair. No repair experience required, comprehensive training provided. Physical ability to lift appliances. Problem-solving mindset and willingness to learn.",
  },
  {
    company_id: 78,
    title: "Consumer Goods Packaging Worker",
    jobDescription:
      "Package personal care and household products on automated production lines, ensure packaging quality, and maintain production targets. You'll learn packaging processes, quality standards, and production efficiency in consumer goods manufacturing.",
    address: "Lumpini Tower, Rama IV Road, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma. Physical ability for repetitive packaging work. Attention to detail for quality control. No packaging experience required. Ability to work in fast-paced production environment. Willingness to work rotating shifts.",
  },
  {
    company_id: 79,
    title: "Food Processing Worker",
    jobDescription:
      "Work in food production facility processing dairy products, snacks, and beverages. You'll learn food safety procedures, production line operation, and quality control standards. This role offers stable employment in food manufacturing sector.",
    address: "Lat Phrao Road, Bangkok, Thailand",
    salary: 15000,
    jobRequirement:
      "High school diploma. Good health for food handling. No food processing experience required, food safety training provided. Ability to work in cold/refrigerated environment. Physical stamina for standing work. Willingness to follow strict hygiene protocols.",
  },
  {
    company_id: 80,
    title: "Seafood Processing Assistant",
    jobDescription:
      "Assist in seafood processing including cleaning, cutting, and packaging fish products. You'll learn seafood handling procedures, food safety standards, and cold storage operations. This role offers experience in seafood export industry.",
    address: "Vibhavadi Rangsit Road, Bangkok, Thailand",
    salary: 17000,
    jobRequirement:
      "Elementary education minimum. Physical ability to work in cold environment. No seafood experience required, training provided. Ability to work with sharp knives safely. Good hygiene practices. Willingness to work early morning shifts.",
  },
  {
    company_id: 81,
    title: "Wholesale Store Stock Clerk",
    jobDescription:
      "Receive bulk merchandise, organize warehouse inventory, and assist business customers with product location. You'll learn wholesale operations, inventory management, and B2B customer service. This role offers exposure to business-to-business retail environment.",
    address: "Lat Phrao Road, Bangkok, Thailand",
    salary: 18000,
    jobRequirement:
      "High school diploma. Physical ability to handle bulk items. Basic computer skills for inventory tracking. No wholesale experience required. Customer service orientation for business clients. Ability to operate warehouse equipment with training.",
  },
  {
    company_id: 82,
    title: "Hypermarket Shelf Stocker",
    jobDescription:
      "Stock shelves in large hypermarket, rotate products by expiration date, and maintain product displays. You'll learn retail operations, inventory management, and customer assistance in large-scale retail environment. Night shift position with shift differential pay.",
    address: "Ratchadapisek Road, Bangkok, Thailand",
    salary: 17000,
    jobRequirement:
      "High school diploma. Physical ability for heavy lifting and climbing. Willingness to work night shift (10 PM - 6 AM). No retail experience required. Attention to detail for product rotation. Reliable transportation for night shift commute.",
  },
  {
    company_id: 83,
    title: "Discount Store Cashier",
    jobDescription:
      "Operate cash registers, process customer transactions, and handle customer inquiries in fast-paced discount retail environment. You'll learn point-of-sale systems, cash handling procedures, and customer service excellence. Part-time position with flexible scheduling.",
    address: "Saphan Phut, Bangkok, Thailand",
    salary: 14000,
    jobRequirement:
      "High school diploma. Basic math skills for cash handling. Customer service mindset. No cashier experience required, POS training provided. Ability to work quickly during busy periods. Honest and reliable character for cash handling.",
  },
  {
    company_id: 84,
    title: "Shopping Center Security Guard",
    jobDescription:
      "Monitor shopping center premises, assist customers with directions, handle minor incidents, and ensure facility security. You'll learn security procedures, emergency response, and customer service in retail environment. Uniform and training provided.",
    address: "Ram Inthra Road, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma. Physical fitness for patrol duties. No security experience required, comprehensive training provided. Good observation skills. Ability to remain calm under pressure. Willingness to work weekends and holidays.",
  },
  {
    company_id: 85,
    title: "Department Store Gift Wrapper",
    jobDescription:
      "Provide professional gift wrapping services for customers, maintain wrapping station, and assist with seasonal decorations. You'll learn various wrapping techniques, customer service, and seasonal retail operations. Holiday seasonal position with potential for permanent employment.",
    address: "Phahonyothin Road, Pathum Thani, Thailand",
    salary: 15000,
    jobRequirement:
      "High school diploma. Creative ability and attention to detail. No gift wrapping experience required, training provided. Good hand coordination for precise wrapping. Friendly customer service skills. Availability during holiday seasons.",
  },
  {
    company_id: 86,
    title: "Bookstore Inventory Assistant",
    jobDescription:
      "Organize book inventory, process new arrivals, assist customers with book location, and maintain store displays. You'll learn retail operations, inventory management, and customer service in educational retail environment. Part-time position ideal for students.",
    address: "Huai Khwang, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma, some college preferred. Interest in books and reading. Basic computer skills. No bookstore experience required. Good organizational skills. Ability to lift and shelve books. Customer service orientation.",
  },
  {
    company_id: 87,
    title: "Educational Toy Store Associate",
    jobDescription:
      "Demonstrate educational toys and games to customers, maintain product displays, and assist parents with age-appropriate toy selection. You'll learn about child development, educational products, and family-focused customer service. Fun work environment with product discounts.",
    address: "Siam Paragon, Bangkok, Thailand",
    salary: 18000,
    jobRequirement:
      "High school diploma. Interest in children and education. Good communication skills with parents and children. No toy retail experience required. Patience and enthusiasm for working with families. Knowledge of child development helpful but not required.",
  },
  {
    company_id: 88,
    title: "Office Supply Store Clerk",
    jobDescription:
      "Assist business customers with office supply needs, operate copying and printing equipment, and maintain store organization. You'll learn about business products, customer service, and basic office equipment operation. B2B customer interaction experience.",
    address: "Lat Phrao Road, Bangkok, Thailand",
    salary: 17000,
    jobRequirement:
      "High school diploma. Basic computer knowledge. Customer service skills for business clients. No office supply experience required, product training provided. Ability to operate copy machines and printers with training. Professional communication skills.",
  },
  {
    company_id: 89,
    title: "Postal Service Counter Clerk",
    jobDescription:
      "Serve customers at postal counter, process mail and package shipments, handle money orders, and provide postal information. You'll learn postal regulations, shipping procedures, and government service standards. Stable government employment with benefits.",
    address: "Charoenkrung Road, Bangkok, Thailand",
    salary: 19000,
    jobRequirement:
      "High school diploma. Good math and communication skills. No postal experience required, comprehensive training provided. Attention to detail for address verification. Customer service orientation. Thai citizenship required for government position.",
  },
  {
    company_id: 90,
    title: "Package Delivery Driver Assistant",
    jobDescription:
      "Assist delivery drivers with package sorting, customer interaction, and delivery completion. You'll learn logistics operations, customer service, and delivery procedures. This role offers outdoor work and potential advancement to driver position.",
    address: "Bang Sue District, Bangkok, Thailand",
    salary: 18000,
    jobRequirement:
      "High school diploma. Physical fitness for package lifting. Valid motorcycle license preferred. No delivery experience required. Good navigation skills. Customer service mindset. Ability to work outdoors in various weather conditions.",
  },
  {
    company_id: 91,
    title: "Express Delivery Sorter",
    jobDescription:
      "Sort packages by destination, scan tracking information, and prepare delivery routes. You'll learn logistics systems, barcode scanning technology, and express delivery operations. Fast-paced work environment with growth opportunities in logistics sector.",
    address: "Huai Khwang District, Bangkok, Thailand",
    salary: 16000,
    jobRequirement:
      "High school diploma. Physical ability to lift packages up to 20kg. Good attention to detail for accurate sorting. No logistics experience required, system training provided. Ability to work in fast-paced environment. Basic computer skills for scanning systems.",
  },
];

const districts = [
  {
    districtCode: 101,
    districtNameEn: "Phra Nakhon",
    districtNameTh: "พระนคร",
  },
  { districtCode: 102, districtNameEn: "Dusit", districtNameTh: "ดุสิต" },
  { districtCode: 103, districtNameEn: "Nong Chok", districtNameTh: "หนองจอก" },
  { districtCode: 104, districtNameEn: "Bang Rak", districtNameTh: "บางรัก" },
  { districtCode: 105, districtNameEn: "Bang Khen", districtNameTh: "บางเขน" },
  { districtCode: 106, districtNameEn: "Bang Kapi", districtNameTh: "บางกะปิ" },
  {
    districtCode: 107,
    districtNameEn: "Pathum Wan",
    districtNameTh: "ปทุมวัน",
  },
  {
    districtCode: 108,
    districtNameEn: "Pom Prap Sattru Phai",
    districtNameTh: "ป้อมปราบศัตรูพ่าย",
  },
  {
    districtCode: 109,
    districtNameEn: "Phra Khanong",
    districtNameTh: "พระโขนง",
  },
  { districtCode: 110, districtNameEn: "Min Buri", districtNameTh: "มีนบุรี" },
  {
    districtCode: 111,
    districtNameEn: "Lat Krabang",
    districtNameTh: "ลาดกระบัง",
  },
  { districtCode: 112, districtNameEn: "Yan Nawa", districtNameTh: "ยานนาวา" },
  {
    districtCode: 113,
    districtNameEn: "Samphanthawong",
    districtNameTh: "สัมพันธวงศ์",
  },
  { districtCode: 114, districtNameEn: "Phaya Thai", districtNameTh: "พญาไท" },
  { districtCode: 115, districtNameEn: "Thon Buri", districtNameTh: "ธนบุรี" },
  {
    districtCode: 116,
    districtNameEn: "Bangkok Yai",
    districtNameTh: "บางกอกใหญ่",
  },
  {
    districtCode: 117,
    districtNameEn: "Huai Khwang",
    districtNameTh: "ห้วยขวาง",
  },
  {
    districtCode: 118,
    districtNameEn: "Khlong San",
    districtNameTh: "คลองสาน",
  },
  {
    districtCode: 119,
    districtNameEn: "Taling Chan",
    districtNameTh: "ตลิ่งชัน",
  },
  {
    districtCode: 120,
    districtNameEn: "Bangkok Noi",
    districtNameTh: "บางกอกน้อย",
  },
  {
    districtCode: 121,
    districtNameEn: "Bang Khun Thian",
    districtNameTh: "บางขุนเทียน",
  },
  {
    districtCode: 122,
    districtNameEn: "Phasi Charoen",
    districtNameTh: "ภาษีเจริญ",
  },
  {
    districtCode: 123,
    districtNameEn: "Nong Khaem",
    districtNameTh: "หนองแขม",
  },
  {
    districtCode: 124,
    districtNameEn: "Rat Burana",
    districtNameTh: "ราษฎร์บูรณะ",
  },
  {
    districtCode: 125,
    districtNameEn: "Bang Phlat",
    districtNameTh: "บางพลัด",
  },
  { districtCode: 126, districtNameEn: "Din Daeng", districtNameTh: "ดินแดง" },
  { districtCode: 127, districtNameEn: "Bueng Kum", districtNameTh: "บึงกุ่ม" },
  { districtCode: 128, districtNameEn: "Sathon", districtNameTh: "สาทร" },
  { districtCode: 129, districtNameEn: "Bang Sue", districtNameTh: "บางซื่อ" },
  { districtCode: 130, districtNameEn: "Chatuchak", districtNameTh: "จตุจักร" },
  {
    districtCode: 131,
    districtNameEn: "Bang Kho Laem",
    districtNameTh: "บางคอแหลม",
  },
  { districtCode: 132, districtNameEn: "Prawet", districtNameTh: "ประเวศ" },
  {
    districtCode: 133,
    districtNameEn: "Khlong Toei",
    districtNameTh: "คลองเตย",
  },
  {
    districtCode: 134,
    districtNameEn: "Suan Luang",
    districtNameTh: "สวนหลวง",
  },
  { districtCode: 135, districtNameEn: "Chom Thong", districtNameTh: "จอมทอง" },
  {
    districtCode: 136,
    districtNameEn: "Don Mueang",
    districtNameTh: "ดอนเมือง",
  },
  {
    districtCode: 137,
    districtNameEn: "Ratchathewi",
    districtNameTh: "ราชเทวี",
  },
  {
    districtCode: 138,
    districtNameEn: "Lat Phrao",
    districtNameTh: "ลาดพร้าว",
  },
  { districtCode: 139, districtNameEn: "Watthana", districtNameTh: "วัฒนา" },
  { districtCode: 140, districtNameEn: "Bang Khae", districtNameTh: "บางแค" },
  { districtCode: 141, districtNameEn: "Lak Si", districtNameTh: "หลักสี่" },
  { districtCode: 142, districtNameEn: "Sai Mai", districtNameTh: "สายไหม" },
  {
    districtCode: 143,
    districtNameEn: "Khan Na Yao",
    districtNameTh: "คันนายาว",
  },
  {
    districtCode: 144,
    districtNameEn: "Saphan Sung",
    districtNameTh: "สะพานสูง",
  },
  {
    districtCode: 145,
    districtNameEn: "Wang Thonglang",
    districtNameTh: "วังทองหลาง",
  },
  {
    districtCode: 146,
    districtNameEn: "Khlong Sam Wa",
    districtNameTh: "คลองสามวา",
  },
  { districtCode: 147, districtNameEn: "Bang Na", districtNameTh: "บางนา" },
  {
    districtCode: 148,
    districtNameEn: "Thawi Watthana",
    districtNameTh: "ทวีวัฒนา",
  },
  { districtCode: 149, districtNameEn: "Bang Bon", districtNameTh: "บางบอน" },
  {
    districtCode: 150,
    districtNameEn: "Bang Bamru",
    districtNameTh: "บางบำหรุ",
  },
];

// const provinces = [
//   {
//     id: 1,
//     provinceCode: 10,
//     provinceNameEn: "Bangkok",
//     provinceNameTh: "กรุงเทพมหานคร",
//   },
//   {
//     id: 2,
//     provinceCode: 11,
//     provinceNameEn: "Samut Prakan",
//     provinceNameTh: "สมุทรปราการ",
//   },
//   {
//     id: 3,
//     provinceCode: 12,
//     provinceNameEn: "Nonthaburi",
//     provinceNameTh: "นนทบุรี",
//   },
//   {
//     id: 4,
//     provinceCode: 13,
//     provinceNameEn: "Pathum Thani",
//     provinceNameTh: "ปทุมธานี",
//   },
//   {
//     id: 5,
//     provinceCode: 14,
//     provinceNameEn: "Phra Nakhon Si Ayutthaya",
//     provinceNameTh: "พระนครศรีอยุธยา",
//   },
//   {
//     id: 6,
//     provinceCode: 15,
//     provinceNameEn: "Ang Thong",
//     provinceNameTh: "อ่างทอง",
//   },
//   {
//     id: 7,
//     provinceCode: 16,
//     provinceNameEn: "Loburi",
//     provinceNameTh: "ลพบุรี",
//   },
//   {
//     id: 8,
//     provinceCode: 17,
//     provinceNameEn: "Sing Buri",
//     provinceNameTh: "สิงห์บุรี",
//   },
//   {
//     id: 9,
//     provinceCode: 18,
//     provinceNameEn: "Chai Nat",
//     provinceNameTh: "ชัยนาท",
//   },
//   {
//     id: 10,
//     provinceCode: 19,
//     provinceNameEn: "Saraburi",
//     provinceNameTh: "สระบุรี",
//   },
//   {
//     id: 11,
//     provinceCode: 20,
//     provinceNameEn: "Chon Buri",
//     provinceNameTh: "ชลบุรี",
//   },
//   {
//     id: 12,
//     provinceCode: 21,
//     provinceNameEn: "Rayong",
//     provinceNameTh: "ระยอง",
//   },
//   {
//     id: 13,
//     provinceCode: 22,
//     provinceNameEn: "Chanthaburi",
//     provinceNameTh: "จันทบุรี",
//   },
//   {
//     id: 14,
//     provinceCode: 23,
//     provinceNameEn: "Trat",
//     provinceNameTh: "ตราด",
//   },
//   {
//     id: 15,
//     provinceCode: 24,
//     provinceNameEn: "Chachoengsao",
//     provinceNameTh: "ฉะเชิงเทรา",
//   },
//   {
//     id: 16,
//     provinceCode: 25,
//     provinceNameEn: "Prachin Buri",
//     provinceNameTh: "ปราจีนบุรี",
//   },
//   {
//     id: 17,
//     provinceCode: 26,
//     provinceNameEn: "Nakhon Nayok",
//     provinceNameTh: "นครนายก",
//   },
//   {
//     id: 18,
//     provinceCode: 27,
//     provinceNameEn: "Sa Kaeo",
//     provinceNameTh: "สระแก้ว",
//   },
//   {
//     id: 19,
//     provinceCode: 30,
//     provinceNameEn: "Nakhon Ratchasima",
//     provinceNameTh: "นครราชสีมา",
//   },
//   {
//     id: 20,
//     provinceCode: 31,
//     provinceNameEn: "Buri Ram",
//     provinceNameTh: "บุรีรัมย์",
//   },
//   {
//     id: 21,
//     provinceCode: 32,
//     provinceNameEn: "Surin",
//     provinceNameTh: "สุรินทร์",
//   },
//   {
//     id: 22,
//     provinceCode: 33,
//     provinceNameEn: "Si Sa Ket",
//     provinceNameTh: "ศรีสะเกษ",
//   },
//   {
//     id: 23,
//     provinceCode: 34,
//     provinceNameEn: "Ubon Ratchathani",
//     provinceNameTh: "อุบลราชธานี",
//   },
//   {
//     id: 24,
//     provinceCode: 35,
//     provinceNameEn: "Yasothon",
//     provinceNameTh: "ยโสธร",
//   },
//   {
//     id: 25,
//     provinceCode: 36,
//     provinceNameEn: "Chaiyaphum",
//     provinceNameTh: "ชัยภูมิ",
//   },
//   {
//     id: 26,
//     provinceCode: 37,
//     provinceNameEn: "Amnat Charoen",
//     provinceNameTh: "อำนาจเจริญ",
//   },
//   {
//     id: 27,
//     provinceCode: 38,
//     provinceNameEn: "Bueng Kan",
//     provinceNameTh: "บึงกาฬ",
//   },
//   {
//     id: 28,
//     provinceCode: 39,
//     provinceNameEn: "Nong Bua Lam Phu",
//     provinceNameTh: "หนองบัวลำภู",
//   },
//   {
//     id: 29,
//     provinceCode: 40,
//     provinceNameEn: "Khon Kaen",
//     provinceNameTh: "ขอนแก่น",
//   },
//   {
//     id: 30,
//     provinceCode: 41,
//     provinceNameEn: "Udon Thani",
//     provinceNameTh: "อุดรธานี",
//   },
//   {
//     id: 31,
//     provinceCode: 42,
//     provinceNameEn: "Loei",
//     provinceNameTh: "เลย",
//   },
//   {
//     id: 32,
//     provinceCode: 43,
//     provinceNameEn: "Nong Khai",
//     provinceNameTh: "หนองคาย",
//   },
//   {
//     id: 33,
//     provinceCode: 44,
//     provinceNameEn: "Maha Sarakham",
//     provinceNameTh: "มหาสารคาม",
//   },
//   {
//     id: 34,
//     provinceCode: 45,
//     provinceNameEn: "Roi Et",
//     provinceNameTh: "ร้อยเอ็ด",
//   },
//   {
//     id: 35,
//     provinceCode: 46,
//     provinceNameEn: "Kalasin",
//     provinceNameTh: "กาฬสินธุ์",
//   },
//   {
//     id: 36,
//     provinceCode: 47,
//     provinceNameEn: "Sakon Nakhon",
//     provinceNameTh: "สกลนคร",
//   },
//   {
//     id: 37,
//     provinceCode: 48,
//     provinceNameEn: "Nakhon Phanom",
//     provinceNameTh: "นครพนม",
//   },
//   {
//     id: 38,
//     provinceCode: 49,
//     provinceNameEn: "Mukdahan",
//     provinceNameTh: "มุกดาหาร",
//   },
//   {
//     id: 39,
//     provinceCode: 50,
//     provinceNameEn: "Chiang Mai",
//     provinceNameTh: "เชียงใหม่",
//   },
//   {
//     id: 40,
//     provinceCode: 51,
//     provinceNameEn: "Lamphun",
//     provinceNameTh: "ลำพูน",
//   },
//   {
//     id: 41,
//     provinceCode: 52,
//     provinceNameEn: "Lampang",
//     provinceNameTh: "ลำปาง",
//   },
//   {
//     id: 42,
//     provinceCode: 53,
//     provinceNameEn: "Uttaradit",
//     provinceNameTh: "อุตรดิตถ์",
//   },
//   {
//     id: 43,
//     provinceCode: 54,
//     provinceNameEn: "Phrae",
//     provinceNameTh: "แพร่",
//   },
//   {
//     id: 44,
//     provinceCode: 55,
//     provinceNameEn: "Nan",
//     provinceNameTh: "น่าน",
//   },
//   {
//     id: 45,
//     provinceCode: 56,
//     provinceNameEn: "Phayao",
//     provinceNameTh: "พะเยา",
//   },
//   {
//     id: 46,
//     provinceCode: 57,
//     provinceNameEn: "Chiang Rai",
//     provinceNameTh: "เชียงราย",
//   },
//   {
//     id: 47,
//     provinceCode: 58,
//     provinceNameEn: "Mae Hong Son",
//     provinceNameTh: "แม่ฮ่องสอน",
//   },
//   {
//     id: 48,
//     provinceCode: 60,
//     provinceNameEn: "Nakhon Sawan",
//     provinceNameTh: "นครสวรรค์",
//   },
//   {
//     id: 49,
//     provinceCode: 61,
//     provinceNameEn: "Uthai Thani",
//     provinceNameTh: "อุทัยธานี",
//   },
//   {
//     id: 50,
//     provinceCode: 62,
//     provinceNameEn: "Kamphaeng Phet",
//     provinceNameTh: "กำแพงเพชร",
//   },
//   {
//     id: 51,
//     provinceCode: 63,
//     provinceNameEn: "Tak",
//     provinceNameTh: "ตาก",
//   },
//   {
//     id: 52,
//     provinceCode: 64,
//     provinceNameEn: "Sukhothai",
//     provinceNameTh: "สุโขทัย",
//   },
//   {
//     id: 53,
//     provinceCode: 65,
//     provinceNameEn: "Phitsanulok",
//     provinceNameTh: "พิษณุโลก",
//   },
//   {
//     id: 54,
//     provinceCode: 66,
//     provinceNameEn: "Phichit",
//     provinceNameTh: "พิจิตร",
//   },
//   {
//     id: 55,
//     provinceCode: 67,
//     provinceNameEn: "Phetchabun",
//     provinceNameTh: "เพชรบูรณ์",
//   },
//   {
//     id: 56,
//     provinceCode: 70,
//     provinceNameEn: "Ratchaburi",
//     provinceNameTh: "ราชบุรี",
//   },
//   {
//     id: 57,
//     provinceCode: 71,
//     provinceNameEn: "Kanchanaburi",
//     provinceNameTh: "กาญจนบุรี",
//   },
//   {
//     id: 58,
//     provinceCode: 72,
//     provinceNameEn: "Suphan Buri",
//     provinceNameTh: "สุพรรณบุรี",
//   },
//   {
//     id: 59,
//     provinceCode: 73,
//     provinceNameEn: "Nakhon Pathom",
//     provinceNameTh: "นครปฐม",
//   },
//   {
//     id: 60,
//     provinceCode: 74,
//     provinceNameEn: "Samut Sakhon",
//     provinceNameTh: "สมุทรสาคร",
//   },
//   {
//     id: 61,
//     provinceCode: 75,
//     provinceNameEn: "Samut Songkhram",
//     provinceNameTh: "สมุทรสงคราม",
//   },
//   {
//     id: 62,
//     provinceCode: 76,
//     provinceNameEn: "Phetchaburi",
//     provinceNameTh: "เพชรบุรี",
//   },
//   {
//     id: 63,
//     provinceCode: 77,
//     provinceNameEn: "Prachuap Khiri Khan",
//     provinceNameTh: "ประจวบคีรีขันธ์",
//   },
//   {
//     id: 64,
//     provinceCode: 80,
//     provinceNameEn: "Nakhon Si Thammarat",
//     provinceNameTh: "นครศรีธรรมราช",
//   },
//   {
//     id: 65,
//     provinceCode: 81,
//     provinceNameEn: "Krabi",
//     provinceNameTh: "กระบี่",
//   },
//   {
//     id: 66,
//     provinceCode: 82,
//     provinceNameEn: "Phangnga",
//     provinceNameTh: "พังงา",
//   },
//   {
//     id: 67,
//     provinceCode: 83,
//     provinceNameEn: "Phuket",
//     provinceNameTh: "ภูเก็ต",
//   },
//   {
//     id: 68,
//     provinceCode: 84,
//     provinceNameEn: "Surat Thani",
//     provinceNameTh: "สุราษฎร์ธานี",
//   },
//   {
//     id: 69,
//     provinceCode: 85,
//     provinceNameEn: "Ranong",
//     provinceNameTh: "ระนอง",
//   },
//   {
//     id: 70,
//     provinceCode: 86,
//     provinceNameEn: "Chumphon",
//     provinceNameTh: "ชุมพร",
//   },
//   {
//     id: 71,
//     provinceCode: 90,
//     provinceNameEn: "Songkhla",
//     provinceNameTh: "สงขลา",
//   },
//   {
//     id: 72,
//     provinceCode: 91,
//     provinceNameEn: "Satun",
//     provinceNameTh: "สตูล",
//   },
//   {
//     id: 73,
//     provinceCode: 92,
//     provinceNameEn: "Trang",
//     provinceNameTh: "ตรัง",
//   },
//   {
//     id: 74,
//     provinceCode: 93,
//     provinceNameEn: "Phatthalung",
//     provinceNameTh: "พัทลุง",
//   },
//   {
//     id: 75,
//     provinceCode: 94,
//     provinceNameEn: "Pattani",
//     provinceNameTh: "ปัตตานี",
//   },
//   {
//     id: 76,
//     provinceCode: 95,
//     provinceNameEn: "Yala",
//     provinceNameTh: "ยะลา",
//   },
//   {
//     id: 77,
//     provinceCode: 96,
//     provinceNameEn: "Narathiwat",
//     provinceNameTh: "นราธิวาส",
//   },
// ];
async function seedDB() {
  await prisma.company.createMany({ data: companyData, skipDuplicates: true });
  await prisma.jobPost.createMany({ data: jobData, skipDuplicates: true });
  // await prisma.province.createMany({ data: provinces, skipDuplicates: true });
  await prisma.district.createMany({
    data: districts,
    skipDuplicates: true,
  });
}

seedDB()
  .then(() => console.log("SEEDED"))
  .catch((err) => console.error(err))
  .finally(() => prisma.$disconnect());
