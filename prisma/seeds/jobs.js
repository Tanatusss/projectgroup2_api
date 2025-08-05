/**
 * Job posting dataset for seed data
 * Focused on IT, development, and tech-related positions
 * Each company has 1-3 job posts
 */

export const jobData = [
  // TechFlow Solutions Ltd. (company_id: 1)
  {
    company_id: 1,
    title: "Senior Full Stack Developer",
    jobDescription:
      "We are seeking an experienced Full Stack Developer to join our growing team. You will be responsible for developing and maintaining web applications using React, Node.js, and MongoDB. The ideal candidate will have strong experience in both frontend and backend development, with a passion for writing clean, efficient code.\n\nResponsibilities:\n- Develop and maintain web applications using modern JavaScript frameworks\n- Collaborate with product managers and designers to implement user interfaces\n- Write reusable, testable, and efficient code\n- Design and implement database schemas\n- Optimize applications for maximum speed and scalability",
    address: "123/45 Sukhumvit Road, Watthana, Bangkok 10110",
    salary: 80000,
    jobRequirement:
      "- 5+ years experience in full stack development\n- Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model\n- Experience with React.js and Node.js\n- Familiarity with RESTful APIs and modern authorization mechanisms\n- Experience with MongoDB or similar NoSQL databases\n- Understanding of server-side CSS preprocessing platforms\n- Good understanding of asynchronous request handling, partial page updates, and AJAX\n- Proficient understanding of code versioning tools, such as Git\n- Strong problem-solving skills and attention to detail",
    typejob: "Fullstack Developer",
    

  },
  {
    company_id: 1,
    title: "Junior Fullstack Developer",
    jobDescription:
      "An exciting opportunity for junior developers looking to grow! Join our development team and learn from experienced engineers while contributing to real-world projects using modern web technologies.\n\nResponsibilities:\n- Assist in frontend and backend development tasks\n- Fix bugs and write unit tests\n- Participate in daily standups and team meetings\n- Learn and apply coding best practices",
    address: "88 Soi Sukhumvit 11, Watthana, Bangkok 10110",
    salary: 40000,
    jobRequirement:
      "- Bachelor's in Computer Science or related field\n- Some experience with JavaScript/React/Node.js\n- Understanding of HTML, CSS, REST APIs\n- Willingness to learn and adapt\n- Good communication and teamwork skills",
    typejob: "Fullstack Developer"
  },
  {
    company_id: 1,
    title: "DevOps Engineer",
    jobDescription:
      "TechFlow Solutions is looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. In this role, you will work with development and IT operations teams to deploy and support applications in cloud environments. You will be responsible for implementing automation, improving workflows, and ensuring system reliability and performance.\n\nResponsibilities:\n- Design, implement and manage CI/CD pipelines\n- Maintain and improve cloud infrastructure on AWS/Azure\n- Implement automation to improve development workflow\n- Monitor system performance and troubleshoot issues\n- Implement security best practices and ensure compliance",
    address: "123/45 Sukhumvit Road, Watthana, Bangkok 10110",
    salary: 70000,
    jobRequirement:
      "- 3+ years of experience in a DevOps or similar role\n- Strong knowledge of AWS or Azure cloud services\n- Experience with containerization technologies (Docker, Kubernetes)\n- Proficiency with infrastructure as code tools (Terraform, CloudFormation)\n- Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)\n- Knowledge of scripting languages (Python, Bash)\n- Understanding of networking concepts and security practices\n- Problem-solving mindset and ability to work in a fast-paced environment",
    typejob: "Fullstack Developer",
  },
  {
    company_id: 1,
    title: "Software Engineer",
    jobDescription:
      "We’re hiring a Software Engineer to build and maintain high-quality web applications. You’ll contribute across the full stack, from designing frontend components to implementing backend logic.\n\nResponsibilities:\n- Develop and maintain web apps using modern JavaScript frameworks\n- Implement RESTful APIs and backend logic\n- Ensure cross-browser and mobile compatibility\n- Conduct code reviews and write unit tests\n- Work in Agile teams and participate in sprint planning",
    address: "1 Empire Tower, Sathorn, Bangkok 10120",
    salary: 65000,
    jobRequirement:
      "- 3+ years experience in software development\n- Proficiency in JavaScript, Node.js, React.js\n- Solid knowledge of relational databases (MySQL or PostgreSQL)\n- Experience with Git, Docker, and CI/CD\n- Familiarity with Agile development practices\n- Strong analytical and communication skills",
    typejob: "Fullstack Developer"
  },
  {
    company_id: 2,
    title: "Web Application Developer",
    jobDescription:
      "TechnoServe Solutions is looking for a Web Application Developer to create scalable and performant web solutions for our clients. You’ll be working closely with product managers and designers to bring ideas to life.\n\nResponsibilities:\n- Design, develop, and deploy web applications\n- Collaborate with cross-functional teams\n- Maintain existing codebases and resolve bugs\n- Participate in design and code reviews",
    address: "234 Ladprao Rd, Wang Thonglang, Bangkok 10310",
    salary: 58000,
    jobRequirement:
      "- At least 2 years of experience in web development\n- Familiar with React, Vue.js, or Angular\n- Backend experience with Node.js or Laravel\n- Knowledge of RESTful APIs\n- Understanding of MVC design patterns\n- Team player with excellent problem-solving skills",
    typejob: "Fullstack Developer"
  },
  {
    company_id: 2,
    title: "Junior Fullstack Developer",
    jobDescription:
      "An exciting opportunity for junior developers looking to grow! Join our development team and learn from experienced engineers while contributing to real-world projects using modern web technologies.\n\nResponsibilities:\n- Assist in frontend and backend development tasks\n- Fix bugs and write unit tests\n- Participate in daily standups and team meetings\n- Learn and apply coding best practices",
    address: "88 Soi Sukhumvit 11, Watthana, Bangkok 10110",
    salary: 40000,
    jobRequirement:
      "- Bachelor's in Computer Science or related field\n- Some experience with JavaScript/React/Node.js\n- Understanding of HTML, CSS, REST APIs\n- Willingness to learn and adapt\n- Good communication and teamwork skills",
    typejob: "Fullstack Developer"
  },
  {
    company_id: 2,
    title: "Systems Integration Developer",
    jobDescription:
      "We are looking for a Systems Integration Developer to build and maintain interfaces between internal systems and external APIs. The role involves designing middleware services and ensuring smooth data exchange across systems.\n\nResponsibilities:\n- Integrate third-party services via REST/SOAP APIs\n- Design and maintain data pipelines and ETL processes\n- Monitor and troubleshoot integration issues\n- Document workflows and support end-users",
    address: "456 Ratchadaphisek Rd, Din Daeng, Bangkok 10400",
    salary: 62000,
    jobRequirement:
      "- Experience with Node.js, Python, or Java\n- Familiar with API integration and JSON/XML formats\n- Understanding of database syncing and data transformation\n- Strong debugging and logging skills\n- Experience with message queues (RabbitMQ, Kafka) is a plus\n- Good communication in English and Thai",
    typejob: "Fullstack Developer"
  },

  // Digital Marketing Pro Co., Ltd. (company_id: 2)
  {
    company_id: 2,
    title: "Frontend Developer",
    jobDescription:
      "Digital Marketing Pro is seeking a talented Frontend Developer to create exceptional user experiences for our clients' web projects. You will work closely with our design and marketing teams to implement responsive, visually appealing interfaces that drive user engagement and conversion.\n\nResponsibilities:\n- Develop new user-facing features using React.js\n- Build reusable components and frontend libraries for future use\n- Translate designs and wireframes into high-quality code\n- Optimize components for maximum performance across devices and browsers\n- Collaborate with backend developers to integrate frontend with APIs",
    address: "45/6 Silom Complex, Bang Rak, Bangkok 10500",
    salary: 55000,
    jobRequirement:
      "- 2+ years of professional experience in frontend development\n- Strong proficiency in HTML5, CSS3, and JavaScript\n- Experience with React.js or similar modern JavaScript frameworks\n- Familiarity with responsive design and mobile-first approach\n- Knowledge of browser testing and debugging\n- Understanding of CSS pre-processors (SASS, LESS)\n- Experience with version control systems (Git)\n- Eye for design and attention to detail\n- Good communication skills in English",
    typejob: "Fullstack Developer",

  },

  {
    company_id: 2,
    title: "IT Support Technician (Casual)",
    jobDescription:
      "Starbucks Thailand is seeking an IT Support Technician on a casual basis to provide technical assistance to our retail stores. You will troubleshoot hardware and software issues, assist with POS system operations, and ensure store technology is functioning properly. This role offers flexible scheduling and is ideal for those seeking variable hours.\n\nResponsibilities:\n- Provide on-site technical support to Starbucks retail locations\n- Troubleshoot hardware, software, and network issues\n- Assist with POS system setup and maintenance\n- Install and configure store technology equipment\n- Train store partners on technology use and basic troubleshooting\n- Document support tickets and resolution steps\n- Coordinate with central IT team for complex issues\n- Maintain inventory of IT equipment and supplies",
    address: "388 Exchange Tower, Sukhumvit Road, Khlong Toei, Bangkok 10110",
    salary: 25000,
    jobRequirement:
      "- 1+ years of experience in IT support or similar role\n- Knowledge of computer hardware and networking fundamentals\n- Experience with Windows operating systems and basic software troubleshooting\n- Familiarity with POS systems is a plus\n- Strong customer service orientation\n- Good communication and interpersonal skills\n- Ability to work flexible hours, including evenings and weekends\n- Basic understanding of IT security practices\n- Problem-solving skills and attention to detail\n- Technical education or certification is preferred",
    typejob: "Accounting Officer",

  },
  {
    company_id: 2,
    title: "Telecommunications Systems Engineer (Contract)",
    jobDescription:
      "DTAC is seeking a Telecommunications Systems Engineer on a contract basis to support our network infrastructure projects. You will work on the design, implementation, and optimization of telecommunications systems, ensuring high performance and reliability. This is a 12-month contract with possibility of extension or conversion to permanent role.\n\nResponsibilities:\n- Design and implement telecommunications systems and infrastructure\n- Configure and optimize network equipment and services\n- Monitor network performance and troubleshoot issues\n- Collaborate with cross-functional teams on network projects\n- Document network configurations and procedures\n- Participate in capacity planning and network upgrades\n- Ensure compliance with industry standards and best practices\n- Support 24/7 operations as needed during critical incidents",
    address: "319 Chamchuri Square, Phaya Thai, Bangkok 10330",
    salary: 60000,
    jobRequirement:
      "- 3+ years of experience in telecommunications engineering\n- Strong knowledge of mobile networks (4G/5G technologies)\n- Experience with network equipment (routers, switches, base stations)\n- Understanding of telecommunications protocols and standards\n- Familiarity with network monitoring and management tools\n- Problem-solving skills and analytical thinking\n- Ability to work under pressure and meet deadlines\n- Good documentation and communication abilities\n- Relevant telecommunications certifications are a plus\n- Bachelor's degree in Telecommunications, Electrical Engineering, or related field",
    typejob: "Accounting Officer",


  },

  // Siam Commercial Bank PCL (company_id: 45)
  {
    company_id: 2,
    title: "Fintech Innovation Developer (Contract)",
    jobDescription:
      "Siam Commercial Bank is looking for a Fintech Innovation Developer to join our digital banking team on a 12-month contract. You will work on developing and implementing innovative financial technology solutions that enhance customer experience and drive digital transformation. This role offers the opportunity to work on cutting-edge projects in the financial services sector.\n\nResponsibilities:\n- Develop prototypes and proof of concepts for fintech innovations\n- Implement digital banking features and functionalities\n- Integrate with financial APIs and payment systems\n- Collaborate with UX/UI designers to create intuitive interfaces\n- Ensure security and compliance in financial applications\n- Test and optimize application performance\n- Stay current with fintech trends and technologies\n- Document technical specifications and development processes",
    address: "9 Ratchadapisek Road, Chatuchak, Bangkok 10900",
    salary: 75000,
    jobRequirement:
      "- 3+ years of experience in software development\n- Knowledge of financial services technology and digital banking\n- Experience with payment systems and financial APIs\n- Proficiency in modern programming languages (Java, Python, JavaScript)\n- Understanding of security requirements in financial applications\n- Familiarity with agile development methodologies\n- Strong problem-solving skills and innovation mindset\n- Good communication and collaboration abilities\n- Experience with mobile application development is a plus\n- Bachelor's degree in Computer Science, IT, or related field",
    typejob: "Accounting Officer",
  },
  {
    company_id: 2,
    title: "Blockchain Analyst",
    jobDescription:
      "Join SCB's innovation team as a Blockchain Analyst to explore decentralized finance and blockchain-based solutions for banking services. You will analyze blockchain platforms, propose applications, and support POC development.\n\nResponsibilities:\n- Analyze blockchain trends and technologies\n- Evaluate smart contracts and decentralized apps\n- Collaborate with developers on blockchain integrations\n- Prepare reports and documentation for stakeholders\n- Support innovation planning and product strategy",
    address: "9 Ratchadapisek Road, Chatuchak, Bangkok 10900",
    salary: 72000,
    jobRequirement:
      "- Bachelor's in Computer Science, Finance, or related field\n- Understanding of Ethereum, smart contracts, and DeFi concepts\n- Basic experience with Solidity or similar languages\n- Strong research and analytical skills\n- Interest in financial innovation and digital assets\n- Good communication and report-writing skills",
    typejob: "Accounting Officer"
  },
  {
    company_id: 1,
    title: "Digital Payment System Engineer",
    jobDescription:
      "Work with SCB's digital infrastructure team to build and maintain our digital payment systems. Ensure seamless integration of QR payment, e-wallets, and API-driven payment solutions.\n\nResponsibilities:\n- Design and implement payment system architecture\n- Integrate payment gateways and APIs\n- Ensure high availability and secure transactions\n- Monitor transaction flows and troubleshoot issues\n- Collaborate with fintech partners and regulators",
    address: "9 Ratchadapisek Road, Chatuchak, Bangkok 10900",
    salary: 80000,
    jobRequirement:
      "- 4+ years of experience in payment systems or fintech\n- Familiarity with ISO 20022, SWIFT, or domestic clearing systems\n- Experience in Java, Node.js, or Python\n- Strong security mindset\n- Ability to work with cross-functional teams\n- Fluent in Thai and English communication",
    typejob: "Accounting Officer"
  },
  {
    company_id: 1,
    title: "Banking Business Analyst",
    jobDescription:
      "Krungthai Tech Ventures is seeking a detail-oriented Business Analyst to help bridge the gap between business needs and tech implementation for our core banking transformation.\n\nResponsibilities:\n- Gather and analyze business requirements\n- Create functional specifications for banking systems\n- Conduct UAT and validate outcomes\n- Coordinate with tech and finance teams\n- Document workflows and business processes",
    address: "35 Sukhumvit 21 Rd, Wattana, Bangkok 10110",
    salary: 68000,
    jobRequirement:
      "- Experience in banking or financial services\n- Strong analytical and documentation skills\n- Familiar with core banking systems and digital platforms\n- Excellent interpersonal and communication skills\n- Knowledge of SQL or data querying is a plus\n- Bachelor's degree in Business, Finance, or IT",
    typejob: "Accounting Officer"
  },
  {
    company_id: 1,
    title: "Financial Data Engineer",
    jobDescription:
      "Bangkok Bank is looking for a Financial Data Engineer to help process, manage, and analyze large volumes of financial transaction data to support BI dashboards and internal reporting.\n\nResponsibilities:\n- Build data pipelines and ETL processes\n- Manage data lake and data warehouse structures\n- Work with financial systems and APIs\n- Ensure data quality and security\n- Support data analysts and finance teams",
    address: "333 Silom Rd, Bang Rak, Bangkok 10500",
    salary: 77000,
    jobRequirement:
      "- 3+ years experience in data engineering\n- Strong SQL and Python skills\n- Experience with cloud data platforms (e.g., AWS, GCP, Azure)\n- Familiarity with financial or accounting data structures\n- Good problem-solving and documentation skills",
    typejob: "Accounting Officer"
  },
  {
    company_id: 1,
    title: "Treasury System Developer",
    jobDescription:
      "Kasikornbank’s Treasury IT division is seeking a developer to support our internal treasury management systems. You’ll work on systems that manage cash, liquidity, and interbank transfers.\n\nResponsibilities:\n- Maintain and improve internal treasury applications\n- Integrate real-time FX rate APIs and trading platforms\n- Ensure compliance with internal audit and finance requirements\n- Work with treasury operations and risk teams\n- Write technical specs and conduct system testing",
    address: "1 Soi Rat Burana 27, Rat Burana, Bangkok 10140",
    salary: 74000,
    jobRequirement:
      "- Experience with Java, .NET, or Python\n- Familiarity with treasury systems and FX trading\n- Understanding of financial regulations and compliance\n- Good teamwork and communication\n- Knowledge of SWIFT and MT messages is a plus",
    typejob: "Accounting Officer"
  }
];
