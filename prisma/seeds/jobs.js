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
    typejob: "Software Developer",
    districtId: 39,
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
    typejob: "IT Operations",
    districtId: 39,
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
    typejob: "Software Developer",
    districtId: 4,
  },
  {
    company_id: 2,
    title: "UX/UI Designer",
    jobDescription:
      "We are looking for a creative UX/UI Designer to design digital products that are intuitive and visually appealing. You will be responsible for understanding user needs, creating wireframes, prototypes, and visual designs for websites and applications. You will work closely with marketing and development teams to ensure designs are effectively implemented.\n\nResponsibilities:\n- Conduct user research and testing\n- Create user flows, wireframes, and interactive prototypes\n- Design intuitive, user-friendly interfaces for websites and apps\n- Collaborate with developers to ensure proper implementation\n- Create and maintain design systems and style guides",
    address: "45/6 Silom Complex, Bang Rak, Bangkok 10500",
    salary: 50000,
    jobRequirement:
      "- 2+ years of experience in UX/UI design\n- Proficiency in design tools such as Figma, Sketch, or Adobe XD\n- Portfolio demonstrating strong design skills and problem-solving abilities\n- Understanding of UI design principles and best practices\n- Experience with creating interactive prototypes\n- Knowledge of HTML/CSS is a plus\n- Strong communication and presentation skills\n- Ability to incorporate user feedback into designs",
    typejob: "Design & Creative",
    districtId: 4,
  },

  // CP All Public Company Limited (company_id: 4)
  {
    company_id: 4,
    title: "IT Project Manager",
    jobDescription:
      "CP All is looking for an experienced IT Project Manager to lead our digital transformation initiatives. You will be responsible for planning, executing, and delivering IT projects on time and within budget. The ideal candidate will have a strong technical background and excellent leadership skills.\n\nResponsibilities:\n- Plan and manage IT projects throughout the entire project lifecycle\n- Define project scope, goals, and deliverables\n- Develop project plans and schedules\n- Manage project resources, budget, and risks\n- Coordinate with cross-functional teams and stakeholders\n- Monitor project progress and make adjustments as needed\n- Report on project status to management",
    address: "313 CP Tower, Silom Road, Bang Rak, Bangkok 10500",
    salary: 85000,
    jobRequirement:
      "- 5+ years of experience in IT project management\n- PMP certification or equivalent\n- Experience with project management methodologies (Agile, Scrum, Waterfall)\n- Understanding of software development lifecycle\n- Strong leadership and team management skills\n- Excellent communication and stakeholder management abilities\n- Experience with project management tools (Jira, MS Project)\n- Bachelor's degree in Computer Science, IT, or related field\n- Experience in retail technology projects is a plus",
    typejob: "Project Management",
    districtId: 4,
  },

  // Agoda Company Pte Ltd. (company_id: 5)
  {
    company_id: 5,
    title: "Data Scientist",
    jobDescription:
      "Agoda is seeking a Data Scientist to join our Analytics team. In this role, you will extract valuable insights from our vast data resources, develop machine learning models, and help drive data-informed decision making across the organization. You will work on challenging problems in recommendation systems, pricing optimization, and customer behavior prediction.\n\nResponsibilities:\n- Design and implement machine learning models to solve business problems\n- Analyze large datasets to extract actionable insights\n- Collaborate with product and business teams to identify opportunities for data-driven solutions\n- Develop A/B testing frameworks to evaluate model performance\n- Create dashboards and visualizations to communicate findings\n- Stay current with the latest developments in machine learning and data science",
    address: "1550 Thanon Phaya Thai, Ratchathewi, Bangkok 10400",
    salary: 90000,
    jobRequirement:
      "- Master's or PhD in Computer Science, Statistics, Mathematics or related field\n- 3+ years of experience in data science or machine learning roles\n- Strong programming skills in Python or R\n- Experience with machine learning libraries (scikit-learn, TensorFlow, PyTorch)\n- Proficiency in SQL and experience with big data technologies\n- Knowledge of statistical analysis and experimental design\n- Strong problem-solving skills and analytical thinking\n- Experience in the travel or e-commerce industry is a plus\n- Excellent written and verbal communication skills in English",
    typejob: "Data Science",
    districtId: 37,
  },
  {
    company_id: 5,
    title: "Backend Developer",
    jobDescription:
      "Join Agoda's engineering team as a Backend Developer to build scalable services that power our global travel platform. You will design and implement APIs, microservices, and database solutions that handle millions of transactions daily. This role offers the opportunity to work with cutting-edge technologies in a high-performance environment.\n\nResponsibilities:\n- Design and develop high-performance, scalable backend services\n- Write clean, maintainable, and well-tested code\n- Collaborate with frontend developers to integrate user-facing elements\n- Optimize applications for maximum speed and scalability\n- Implement security and data protection measures\n- Participate in code reviews and contribute to technical documentation",
    address: "1550 Thanon Phaya Thai, Ratchathewi, Bangkok 10400",
    salary: 75000,
    jobRequirement:
      "- 3+ years of professional backend development experience\n- Strong proficiency in Java, C#, or similar languages\n- Experience with RESTful API design and implementation\n- Familiarity with microservices architecture\n- Knowledge of database systems (SQL and NoSQL)\n- Understanding of server-side templating languages\n- Experience with version control systems (Git)\n- Strong problem-solving skills and attention to detail\n- Experience with cloud platforms (AWS, Azure, GCP) is a plus",
    typejob: "Software Developer",
    districtId: 37,
  },
  {
    company_id: 5,
    title: "QA Automation Engineer",
    jobDescription:
      "Agoda is looking for a QA Automation Engineer to help us maintain the highest quality standards for our applications. You will be responsible for designing and implementing automated tests, identifying bugs and performance issues, and ensuring our products meet user expectations. This role requires a blend of technical skills and a keen eye for detail.\n\nResponsibilities:\n- Develop and maintain automated test scripts\n- Design and implement test frameworks\n- Perform functional, regression, and performance testing\n- Identify, document, and track bugs\n- Collaborate with developers to resolve issues\n- Participate in product requirement reviews and contribute to quality standards",
    address: "1550 Thanon Phaya Thai, Ratchathewi, Bangkok 10400",
    salary: 65000,
    jobRequirement:
      "- 2+ years of experience in QA automation\n- Strong programming skills in a language such as Java, Python, or JavaScript\n- Experience with test automation frameworks (Selenium, Cypress, TestNG)\n- Knowledge of API testing tools (Postman, RestAssured)\n- Understanding of CI/CD pipelines\n- Familiarity with test management tools\n- Strong analytical and problem-solving skills\n- Attention to detail and good communication abilities\n- ISTQB certification is a plus",
    typejob: "Quality Assurance",
    districtId: 37,
  },

  // True Corporation Public Company Limited (company_id: 6)
  {
    company_id: 6,
    title: "Network Security Engineer",
    jobDescription:
      "True Corporation is seeking a Network Security Engineer to protect our telecommunications infrastructure from cyber threats. In this role, you will design, implement, and maintain security solutions to safeguard our network systems and data. You will be responsible for identifying vulnerabilities, responding to security incidents, and ensuring compliance with security policies.\n\nResponsibilities:\n- Design and implement network security measures\n- Monitor networks for security breaches and investigate violations\n- Conduct regular security assessments and penetration testing\n- Develop and update security policies and procedures\n- Implement and manage security tools (firewalls, IDS/IPS, SIEM)\n- Respond to security incidents and provide recommendations for prevention",
    address: "18 True Tower, Ratchadaphisek Road, Huai Khwang, Bangkok 10310",
    salary: 70000,
    jobRequirement:
      "- 3+ years of experience in network security or related field\n- Strong understanding of network protocols and security concepts\n- Experience with security tools and technologies (firewalls, VPN, IDS/IPS)\n- Knowledge of security frameworks and compliance standards\n- Certifications such as CISSP, CEH, or Security+\n- Experience with cloud security is a plus\n- Strong analytical and problem-solving skills\n- Ability to respond to incidents outside of normal business hours when necessary\n- Bachelor's degree in Computer Science, IT, or related field",
    typejob: "Cybersecurity",
    districtId: 17,
  },

  // Grab Taxi (Thailand) Co., Ltd. (company_id: 17)
  {
    company_id: 17,
    title: "Mobile Application Developer (iOS)",
    jobDescription:
      "Grab is looking for a talented iOS Developer to join our mobile development team. You will be responsible for designing and building advanced applications for the iOS platform, collaborating with cross-functional teams to define, design, and ship new features. You'll have the opportunity to work on an app used by millions of users across Southeast Asia.\n\nResponsibilities:\n- Design and build applications for the iOS platform\n- Ensure the performance, quality, and responsiveness of applications\n- Collaborate with a team to define, design, and ship new features\n- Identify and correct bottlenecks and fix bugs\n- Help maintain code quality, organization, and automatization\n- Stay up-to-date with the latest iOS development practices and patterns",
    address:
      "55 Sathorn Square Tower, North Sathorn Road, Silom, Bang Rak, Bangkok 10500",
    salary: 75000,
    jobRequirement:
      "- 3+ years of experience in iOS development\n- Proficiency in Swift and Objective-C\n- Experience with iOS frameworks such as Core Data, Core Animation\n- Knowledge of Apple's design principles and interface guidelines\n- Experience with RESTful APIs to connect iOS applications to back-end services\n- Understanding of code versioning tools, such as Git\n- Familiarity with continuous integration\n- Strong problem-solving skills and attention to detail\n- Bachelor's degree in Computer Science or related field",
    typejob: "Mobile Developer",
    districtId: 4,
  },
  {
    company_id: 17,
    title: "Data Engineer",
    jobDescription:
      "Join Grab's Data Engineering team to build and maintain our data infrastructure. You will design, develop, and support scalable data pipelines that process billions of events daily. Your work will enable data-driven decision making across the organization and power machine learning models that improve our services.\n\nResponsibilities:\n- Design, build, and maintain efficient data pipelines\n- Develop ETL processes to extract data from various sources\n- Create data models and implement data warehousing solutions\n- Ensure data quality, reliability, and accessibility\n- Collaborate with data scientists and analysts to address their data needs\n- Optimize data systems for performance and scalability\n- Implement data security and privacy measures",
    address:
      "55 Sathorn Square Tower, North Sathorn Road, Silom, Bang Rak, Bangkok 10500",
    salary: 80000,
    jobRequirement:
      "- 3+ years of experience in data engineering or similar role\n- Strong programming skills in Python, Java, or Scala\n- Experience with big data technologies (Hadoop, Spark, Kafka)\n- Proficiency in SQL and NoSQL databases\n- Knowledge of data modeling and data warehouse design\n- Experience with cloud platforms (AWS, GCP)\n- Understanding of data processing at scale\n- Problem-solving mindset and strong analytical skills\n- Bachelor's degree in Computer Science, Engineering, or related field",
    typejob: "Data Engineering",
    districtId: 4,
  },

  // LINE Company (Thailand) Limited (company_id: 18)
  {
    company_id: 18,
    title: "Android Developer",
    jobDescription:
      "LINE Thailand is seeking an experienced Android Developer to join our mobile development team. You will be responsible for designing and developing high-quality applications for the Android platform. You will collaborate with cross-functional teams to create innovative features that enhance user experience for millions of LINE users.\n\nResponsibilities:\n- Design and build advanced applications for the Android platform\n- Collaborate with cross-functional teams to define, design, and ship new features\n- Work with outside data sources and APIs\n- Unit-test code for robustness, including edge cases, usability, and general reliability\n- Continuously discover, evaluate, and implement new technologies to maximize development efficiency\n- Stay up-to-date with the latest Android development practices",
    address: "127 Gaysorn Tower, Ratchadamri Road, Pathum Wan, Bangkok 10330",
    salary: 70000,
    jobRequirement:
      "- 3+ years of Android development experience\n- Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes\n- Proficiency in Java and Kotlin\n- Experience with RESTful APIs to connect Android applications to back-end services\n- Understanding of Google's Android design principles and interface guidelines\n- Experience with offline storage, threading, and performance tuning\n- Knowledge of the open-source Android ecosystem and libraries\n- Familiarity with CI/CD for mobile applications\n- Bachelor's degree in Computer Science or related field",
    typejob: "Mobile Developer",
    districtId: 7,
  },
  {
    company_id: 18,
    title: "Product Manager - Messaging",
    jobDescription:
      "LINE Thailand is looking for a Product Manager to lead our messaging product development. In this role, you will define product strategy, gather and prioritize requirements, and work closely with engineering teams to deliver features that delight our users. You will be responsible for the success of LINE's messaging services in the Thai market.\n\nResponsibilities:\n- Define product vision, strategy, and roadmap for messaging features\n- Gather and prioritize product requirements\n- Work closely with engineering, design, and marketing teams\n- Analyze user feedback and usage metrics to inform product decisions\n- Conduct market research and competitive analysis\n- Define success metrics and monitor product performance\n- Represent the product team in stakeholder meetings",
    address: "127 Gaysorn Tower, Ratchadamri Road, Pathum Wan, Bangkok 10330",
    salary: 90000,
    jobRequirement:
      "- 4+ years of product management experience, preferably in mobile applications or messaging platforms\n- Strong understanding of user experience design principles\n- Experience with agile development methodologies\n- Excellent analytical and problem-solving skills\n- Strong communication and presentation abilities\n- Data-driven approach to decision making\n- Ability to influence stakeholders without direct authority\n- Experience with A/B testing and feature experimentation\n- Bachelor's degree in Business, Computer Science, or related field\n- MBA is a plus",
    typejob: "Product Management",
    districtId: 7,
  },

  // Microsoft (Thailand) Limited (company_id: 27)
  {
    company_id: 27,
    title: "Cloud Solutions Architect",
    jobDescription:
      "Microsoft Thailand is seeking a Cloud Solutions Architect to help our enterprise customers design and implement Azure cloud solutions. You will be responsible for working with clients to understand their business requirements, designing appropriate cloud architectures, and providing technical guidance throughout implementation. This role requires a blend of technical expertise and customer engagement skills.\n\nResponsibilities:\n- Design and implement cloud solutions on Microsoft Azure\n- Provide technical guidance and best practices to customers\n- Develop architectural designs and implementation plans\n- Conduct technical workshops and presentations\n- Work with sales teams to support customer engagements\n- Stay current with cloud technologies and industry trends\n- Document solution designs and implementation details",
    address:
      "37th Floor, CRC Tower, All Seasons Place, Wireless Road, Pathum Wan, Bangkok 10330",
    salary: 110000,
    jobRequirement:
      "- 5+ years of experience in IT solution architecture or related roles\n- Strong knowledge of Microsoft Azure services and architectures\n- Experience designing and implementing cloud solutions\n- Understanding of infrastructure as code and DevOps practices\n- Knowledge of security, compliance, and governance in cloud environments\n- Strong communication and presentation skills\n- Microsoft Azure certifications (Azure Solutions Architect Expert preferred)\n- Experience in consulting or customer-facing technical roles\n- Bachelor's degree in Computer Science, Engineering, or related field",
    typejob: "Cloud Architecture",
    districtId: 7,
  },
  {
    company_id: 27,
    title: "AI/ML Engineer",
    jobDescription:
      "Join Microsoft Thailand as an AI/ML Engineer to help organizations leverage artificial intelligence and machine learning capabilities. You will work on implementing AI solutions using Microsoft's AI and cognitive services, assist customers in developing custom ML models, and provide technical guidance on AI adoption.\n\nResponsibilities:\n- Design and implement AI/ML solutions using Microsoft technologies\n- Help customers integrate AI capabilities into their applications\n- Develop proof of concepts and prototypes for AI use cases\n- Provide technical guidance on AI/ML best practices\n- Conduct workshops and training sessions on AI technologies\n- Collaborate with global Microsoft AI teams to share insights\n- Stay current with advancements in AI/ML field",
    address:
      "37th Floor, CRC Tower, All Seasons Place, Wireless Road, Pathum Wan, Bangkok 10330",
    salary: 95000,
    jobRequirement:
      "- 3+ years of experience in AI/ML development or related field\n- Strong knowledge of machine learning algorithms and frameworks\n- Experience with Python and data science libraries (NumPy, Pandas, scikit-learn)\n- Familiarity with deep learning frameworks (TensorFlow, PyTorch)\n- Understanding of Microsoft Azure AI services\n- Experience with NLP, computer vision, or predictive analytics\n- Strong problem-solving and analytical skills\n- Good communication and presentation abilities\n- Master's degree in Computer Science, AI, or related field preferred",
    typejob: "Artificial Intelligence",
    districtId: 7,
  },

  // Google (Thailand) Company Limited (company_id: 28)
  {
    company_id: 28,
    title: "Site Reliability Engineer",
    jobDescription:
      "Google Thailand is looking for a Site Reliability Engineer to ensure that our services and systems are reliable, scalable, and efficient. In this role, you will bridge software engineering and systems administration to design and implement solutions for large-scale distributed systems. You'll focus on automating operations tasks, improving system performance, and ensuring high availability.\n\nResponsibilities:\n- Design, build, and maintain reliable infrastructure systems\n- Implement automation to reduce manual operations\n- Monitor system health and performance\n- Participate in on-call rotation to respond to system emergencies\n- Debug production issues across multiple levels of the stack\n- Implement infrastructure improvements\n- Collaborate with software engineers to improve serviceability\n- Conduct capacity planning and performance analysis",
    address: "48 Nanglinchee Road, Sathorn, Bangkok 10120",
    salary: 100000,
    jobRequirement:
      "- 3+ years of experience in systems administration or software development\n- Strong programming skills in languages such as Python, Go, or Java\n- Experience with Unix/Linux operating systems internals and administration\n- Understanding of network protocols and systems (TCP/IP, HTTP, DNS)\n- Knowledge of distributed systems and large-scale computing\n- Experience with monitoring systems and performance tuning\n- Ability to solve complex technical problems\n- Strong communication and collaboration skills\n- Bachelor's degree in Computer Science or related technical field",
    typejob: "IT Operations",
    districtId: 28,
  },
  {
    company_id: 28,
    title: "Technical Program Manager",
    jobDescription:
      "Google Thailand is seeking a Technical Program Manager to lead cross-functional programs and coordinate technical projects. You will be responsible for managing project plans, facilitating communication between teams, identifying risks, and ensuring successful delivery of initiatives. This role requires a blend of technical knowledge and program management skills.\n\nResponsibilities:\n- Lead technical programs from initiation to completion\n- Create and maintain program schedules and documentation\n- Coordinate work across multiple teams and stakeholders\n- Identify dependencies, risks, and mitigation strategies\n- Facilitate decision-making and resolve blockers\n- Track progress and provide regular updates to leadership\n- Ensure alignment with business objectives and technical standards\n- Drive continuous improvement in program execution",
    address: "48 Nanglinchee Road, Sathorn, Bangkok 10120",
    salary: 95000,
    jobRequirement:
      "- 5+ years of technical program management experience\n- Strong understanding of software development lifecycle\n- Experience with program management methodologies and tools\n- Technical background with understanding of software systems\n- Excellent communication and stakeholder management skills\n- Strong analytical and problem-solving abilities\n- Experience managing complex, cross-functional projects\n- Ability to influence without direct authority\n- Bachelor's degree in Computer Science, Engineering, or related field\n- PMP or similar certification is a plus",
    typejob: "Project Management",
    districtId: 28,
  },

  // Amazon Web Services (Thailand) Limited (company_id: 29)
  {
    company_id: 29,
    title: "Solutions Architect",
    jobDescription:
      "AWS Thailand is looking for a Solutions Architect to help customers architect and deploy applications on AWS. You will serve as a technical liaison between customers, AWS service teams, and partners to ensure solutions are designed according to best practices. This role requires deep technical knowledge of AWS services and strong customer engagement skills.\n\nResponsibilities:\n- Provide technical guidance to customers on AWS architecture\n- Design cloud solutions that address customer business requirements\n- Conduct technical workshops and deep-dive sessions\n- Support sales teams in technical discussions with customers\n- Create reference architectures and implementation guides\n- Stay current with new AWS services and features\n- Contribute to customer success stories and technical content",
    address:
      "93/1 GPF Witthayu Tower A, Wireless Road, Lumpini, Pathum Wan, Bangkok 10330",
    salary: 105000,
    jobRequirement:
      "- 5+ years of experience in IT architecture, systems engineering, or similar role\n- Deep understanding of AWS services and architectures\n- Experience designing distributed systems and applications\n- Knowledge of networking, security, and compliance in the cloud\n- Strong verbal and written communication skills\n- Ability to explain complex technical concepts to diverse audiences\n- AWS certifications (Solutions Architect Professional preferred)\n- Experience in a customer-facing technical role\n- Bachelor's degree in Computer Science, Engineering, or related field",
    typejob: "Cloud Architecture",
    districtId: 7,
  },
  {
    company_id: 29,
    title: "Cloud Support Engineer",
    jobDescription:
      "AWS Thailand is seeking a Cloud Support Engineer to provide technical assistance to customers using AWS services. You will help customers troubleshoot issues, optimize their cloud environments, and implement best practices. This role requires strong problem-solving skills, technical knowledge, and customer service orientation.\n\nResponsibilities:\n- Provide technical support for AWS services and features\n- Troubleshoot and resolve customer issues via phone and email\n- Guide customers in implementing AWS best practices\n- Document technical solutions and knowledge base articles\n- Collaborate with AWS service teams on complex issues\n- Escalate bugs and feature requests to appropriate teams\n- Stay up-to-date with new AWS services and features\n- Identify opportunities to improve customer experience",
    address:
      "93/1 GPF Witthayu Tower A, Wireless Road, Lumpini, Pathum Wan, Bangkok 10330",
    salary: 70000,
    jobRequirement:
      "- 2+ years of experience in technical support, systems administration, or similar role\n- Knowledge of AWS services (EC2, S3, RDS, VPC, IAM)\n- Understanding of Linux/Windows operating systems\n- Experience with networking concepts and troubleshooting\n- Scripting skills in Python, Bash, or PowerShell\n- Strong problem-solving and analytical abilities\n- Excellent written and verbal communication skills in English\n- Customer service orientation and patience\n- AWS certifications are a plus\n- Bachelor's degree in Computer Science, IT, or related field",
    typejob: "Technical Support",
    districtId: 7,
  },

  // IBM Thailand Company Limited (company_id: 25)
  {
    company_id: 25,
    title: "Blockchain Developer",
    jobDescription:
      "IBM Thailand is looking for a Blockchain Developer to join our growing team working on distributed ledger technologies. In this role, you will design and implement blockchain solutions for enterprise clients across various industries. You will work with the latest blockchain platforms and contribute to the development of innovative applications.\n\nResponsibilities:\n- Design and develop blockchain applications and smart contracts\n- Implement solutions using Hyperledger Fabric, Ethereum, or other blockchain platforms\n- Collaborate with architects and business analysts to understand requirements\n- Create technical documentation and implementation guides\n- Perform code reviews and ensure best practices\n- Troubleshoot and debug blockchain applications\n- Stay current with blockchain technologies and standards\n- Participate in client meetings and provide technical expertise",
    address: "63 Wireless Road, Lumpini, Pathum Wan, Bangkok 10330",
    salary: 85000,
    jobRequirement:
      "- 2+ years of experience in software development\n- Experience with blockchain technologies (Hyperledger, Ethereum)\n- Proficiency in programming languages such as JavaScript, Go, or Java\n- Knowledge of smart contract development\n- Understanding of cryptography and consensus mechanisms\n- Experience with web development and API integration\n- Familiarity with DevOps practices and tools\n- Strong problem-solving and analytical skills\n- Good communication abilities\n- Bachelor's degree in Computer Science, Engineering, or related field",
    typejob: "Software Developer",
    districtId: 7,
  },
  {
    company_id: 25,
    title: "AI Solutions Consultant",
    jobDescription:
      "Join IBM Thailand as an AI Solutions Consultant to help organizations leverage artificial intelligence to solve business challenges. You will work with clients to identify AI opportunities, design solutions using IBM Watson and other AI technologies, and guide implementation. This role combines technical expertise with business consulting skills.\n\nResponsibilities:\n- Identify AI use cases and opportunities for clients\n- Design AI solutions using IBM's AI portfolio\n- Conduct workshops and demonstrations of AI capabilities\n- Develop proof of concepts and prototypes\n- Guide clients through AI adoption and implementation\n- Collaborate with technical teams to ensure successful delivery\n- Stay current with AI technologies and market trends\n- Create technical documentation and solution designs",
    address: "63 Wireless Road, Lumpini, Pathum Wan, Bangkok 10330",
    salary: 90000,
    jobRequirement:
      "- 3+ years of experience in AI/ML or related technical consulting\n- Knowledge of machine learning algorithms and applications\n- Experience with IBM Watson services or similar AI platforms\n- Understanding of natural language processing, computer vision, or predictive analytics\n- Strong presentation and client communication skills\n- Ability to translate business problems into technical solutions\n- Experience in a client-facing technical role\n- Problem-solving mindset and attention to detail\n- Bachelor's degree in Computer Science, Data Science, or related field\n- Master's degree is a plus",
    typejob: "Business Consulting",
    districtId: 7,
  },

  // Oracle Corporation (Thailand) Co., Ltd. (company_id: 26)
  {
    company_id: 26,
    title: "Cloud Database Administrator",
    jobDescription:
      "Oracle Thailand is seeking an experienced Cloud Database Administrator to manage and optimize our customers' database environments in Oracle Cloud. You will be responsible for database installation, configuration, monitoring, and troubleshooting. This role requires strong technical skills and the ability to provide guidance on database best practices.\n\nResponsibilities:\n- Install, configure, and maintain Oracle databases in cloud environments\n- Implement database security measures and access controls\n- Monitor database performance and optimize as needed\n- Implement backup and recovery strategies\n- Perform database upgrades and patches\n- Troubleshoot and resolve database issues\n- Automate routine database administration tasks\n- Document database procedures and configurations",
    address:
      "999/9 The Offices at CentralWorld, Rama I Road, Pathum Wan, Bangkok 10330",
    salary: 75000,
    jobRequirement:
      "- 3+ years of experience as an Oracle Database Administrator\n- Strong knowledge of Oracle Database (12c/19c/21c)\n- Experience with Oracle Cloud Infrastructure (OCI)\n- Understanding of database security best practices\n- Knowledge of performance tuning and optimization techniques\n- Experience with backup and recovery procedures\n- Familiarity with automation tools and scripting\n- Problem-solving skills and attention to detail\n- Oracle certifications (OCA, OCP) are preferred\n- Bachelor's degree in Computer Science, IT, or related field",
    typejob: "Database Administration",
    districtId: 7,
  },
  {
    company_id: 26,
    title: "Enterprise Application Consultant",
    jobDescription:
      "Oracle Thailand is looking for an Enterprise Application Consultant to help our customers implement and optimize Oracle enterprise applications. You will work with clients to understand their business requirements, configure applications, and ensure successful deployment. This role requires a blend of technical knowledge and business process understanding.\n\nResponsibilities:\n- Gather and analyze client business requirements\n- Configure Oracle applications to meet client needs\n- Design and implement application integrations\n- Conduct functional and technical workshops\n- Provide guidance on application best practices\n- Support system testing and user acceptance\n- Create documentation and training materials\n- Assist with post-implementation support",
    address:
      "999/9 The Offices at CentralWorld, Rama I Road, Pathum Wan, Bangkok 10330",
    salary: 80000,
    jobRequirement:
      "- 4+ years of experience implementing Oracle enterprise applications\n- Expertise in one or more Oracle application modules (ERP, HCM, SCM)\n- Understanding of business processes and industry practices\n- Experience with application configuration and customization\n- Knowledge of application integration approaches\n- Strong analytical and problem-solving skills\n- Excellent communication and client management abilities\n- Experience in a consulting or professional services role\n- Oracle application certifications are a plus\n- Bachelor's degree in Business, IT, or related field",
    typejob: "Business Consulting",
    districtId: 7,
  },

  // Accenture (Thailand) Co., Ltd. (company_id: 24)
  {
    company_id: 24,
    title: "Cloud Migration Specialist",
    jobDescription:
      "Accenture Thailand is seeking a Cloud Migration Specialist to help our clients transform their IT infrastructure by moving applications and workloads to the cloud. In this role, you will assess existing environments, design migration strategies, and implement cloud solutions. You will work with a variety of cloud platforms and technologies to deliver successful migrations.\n\nResponsibilities:\n- Assess client's current IT infrastructure and applications\n- Develop cloud migration strategies and roadmaps\n- Design cloud architecture for migrated workloads\n- Implement migration plans and coordinate technical activities\n- Address security, compliance, and governance requirements\n- Optimize cloud resources for performance and cost\n- Document migration processes and configurations\n- Provide post-migration support and knowledge transfer",
    address:
      "30th Floor, Abdulrahim Place, Rama IV Road, Silom, Bang Rak, Bangkok 10500",
    salary: 85000,
    jobRequirement:
      "- 4+ years of experience in IT infrastructure or cloud engineering\n- Strong knowledge of cloud platforms (AWS, Azure, GCP)\n- Experience with cloud migration tools and methodologies\n- Understanding of enterprise IT architecture\n- Knowledge of networking, security, and compliance\n- Experience with infrastructure as code (Terraform, CloudFormation)\n- Strong problem-solving and analytical skills\n- Excellent communication and stakeholder management abilities\n- Cloud platform certifications are preferred\n- Bachelor's degree in Computer Science, IT, or related field",
    typejob: "Cloud Migration",
    districtId: 4,
  },

  {
    company_id: 24,
    title: "Cybersecurity Consultant",
    jobDescription:
      "Join Accenture Thailand as a Cybersecurity Consultant to help organizations protect their digital assets and information. You will assess security risks, design security architectures, and implement solutions to defend against cyber threats. This role requires deep technical knowledge and the ability to advise clients on security best practices.\n\nResponsibilities:\n- Conduct security assessments and penetration testing\n- Design security architectures and controls\n- Implement security solutions and technologies\n- Develop security policies and procedures\n- Respond to security incidents and provide recommendations\n- Advise clients on regulatory compliance requirements\n- Stay current with emerging security threats and technologies\n- Deliver security awareness training to client personnel",
    address:
      "30th Floor, Abdulrahim Place, Rama IV Road, Silom, Bang Rak, Bangkok 10500",
    salary: 90000,
    jobRequirement:
      "- 3+ years of experience in cybersecurity or related field\n- Strong knowledge of security frameworks and standards (ISO 27001, NIST)\n- Experience with security technologies (firewalls, IDS/IPS, SIEM)\n- Understanding of secure network architecture\n- Knowledge of encryption and identity management\n- Experience with cloud security and DevSecOps\n- Strong analytical and problem-solving skills\n- Excellent communication and presentation abilities\n- Security certifications (CISSP, CEH, CISM) are preferred\n- Bachelor's degree in Computer Science, IT, or related field",
    typejob: "Cybersecurity",
    districtId: 4,
  },
  {
    company_id: 24,
    title: "Digital Transformation Consultant",
    jobDescription:
      "Accenture Thailand is looking for a Digital Transformation Consultant to help organizations reimagine their businesses in the digital age. You will work with clients to identify opportunities for digital innovation, design transformation roadmaps, and guide implementation of digital initiatives. This role requires a blend of business strategy and technology expertise.\n\nResponsibilities:\n- Assess client's digital maturity and identify transformation opportunities\n- Develop digital transformation strategies and roadmaps\n- Design new business models and digital experiences\n- Guide implementation of digital technologies and solutions\n- Help clients build digital capabilities and culture\n- Measure and communicate transformation outcomes\n- Stay current with digital trends and emerging technologies\n- Lead workshops and stakeholder engagement activities",
    address:
      "30th Floor, Abdulrahim Place, Rama IV Road, Silom, Bang Rak, Bangkok 10500",
    salary: 95000,
    jobRequirement:
      "- 5+ years of experience in digital transformation or related consulting\n- Strong understanding of digital technologies and their business applications\n- Experience with agile methodology and design thinking\n- Knowledge of change management principles\n- Strong analytical and strategic thinking abilities\n- Excellent communication and presentation skills\n- Ability to influence senior stakeholders\n- Experience in project management and delivery\n- MBA or Master's degree in a relevant field preferred\n- Bachelor's degree in Business, IT, or related field",
    typejob: "Digital Transformation",
    districtId: 4,
  },

  // KPMG Phoomchai Holdings Co., Ltd. (company_id: 22)
  {
    company_id: 22,
    title: "IT Advisory Consultant",
    jobDescription:
      "KPMG Thailand is seeking an IT Advisory Consultant to help our clients navigate complex technology challenges. You will provide guidance on IT strategy, governance, and implementation of technology solutions. This role involves working with organizations across various industries to improve their IT capabilities and address technology risks.\n\nResponsibilities:\n- Assess clients' IT environments and identify improvement opportunities\n- Provide advisory services on IT strategy and governance\n- Assist with technology selection and implementation\n- Evaluate IT controls and compliance requirements\n- Develop IT risk management frameworks\n- Support IT due diligence for mergers and acquisitions\n- Create reports and presentations for client engagements\n- Stay current with technology trends and market developments",
    address: "50 Empire Tower, Sathorn Road, Yan Nawa, Bangkok 10120",
    salary: 70000,
    jobRequirement:
      "- 3+ years of experience in IT consulting or related field\n- Strong understanding of IT governance frameworks (COBIT, ITIL)\n- Knowledge of enterprise architecture and IT service management\n- Experience with IT risk assessment and control evaluation\n- Familiarity with regulatory requirements affecting IT\n- Strong analytical and problem-solving skills\n- Excellent communication and client management abilities\n- Experience in a Big 4 or consulting firm is a plus\n- CISA, CGEIT, or similar certifications are preferred\n- Bachelor's degree in Computer Science, IT, or related field",
    typejob: "IT Consulting",
    districtId: 12,
  },
  {
    company_id: 22,
    title: "Data Analytics Specialist",
    jobDescription:
      "Join KPMG Thailand as a Data Analytics Specialist to help our clients derive insights from their data. You will design and implement data analytics solutions, develop visualization dashboards, and provide recommendations based on data analysis. This role requires a blend of technical skills and business acumen.\n\nResponsibilities:\n- Design and implement data analytics solutions\n- Extract, transform, and analyze large datasets\n- Develop interactive dashboards and visualizations\n- Identify patterns and insights from data analysis\n- Support data-driven decision making for clients\n- Create analytical models and algorithms\n- Communicate findings and recommendations to stakeholders\n- Stay current with data analytics tools and techniques",
    address: "50 Empire Tower, Sathorn Road, Yan Nawa, Bangkok 10120",
    salary: 75000,
    jobRequirement:
      "- 3+ years of experience in data analytics or related field\n- Strong proficiency in data analysis tools (Power BI, Tableau, Qlik)\n- Experience with data manipulation languages (SQL, R, Python)\n- Knowledge of statistical analysis and modeling techniques\n- Understanding of data governance and quality principles\n- Strong problem-solving and analytical thinking abilities\n- Excellent communication and presentation skills\n- Experience in consulting or professional services is a plus\n- Bachelor's degree in Statistics, Mathematics, Computer Science, or related field\n- Master's degree is a plus",
    typejob: "Data Analytics",
    districtId: 12,
  },

  // Deloitte Touche Tohmatsu Jaiyos Co., Ltd. (company_id: 23)
  {
    company_id: 23,
    title: "Technology Risk Consultant",
    jobDescription:
      "Deloitte Thailand is looking for a Technology Risk Consultant to help our clients identify, assess, and mitigate technology-related risks. You will evaluate IT controls, provide recommendations for improvement, and assist with regulatory compliance. This role requires a blend of technical knowledge and risk management expertise.\n\nResponsibilities:\n- Assess IT control environments and identify risks\n- Evaluate IT security and privacy controls\n- Conduct IT compliance assessments\n- Develop remediation strategies for control weaknesses\n- Assist with IT audit planning and execution\n- Create reports and presentations on risk findings\n- Support clients in implementing risk management frameworks\n- Stay current with regulatory requirements and industry standards",
    address: "11/1 AIA Sathorn Tower, Sathorn Road, Sathon, Bangkok 10120",
    salary: 70000,
    jobRequirement:
      "- 3+ years of experience in IT audit, risk management, or related field\n- Knowledge of IT control frameworks (COBIT, NIST, ISO 27001)\n- Understanding of regulatory requirements (SOX, GDPR, PDPA)\n- Experience with IT security and privacy assessments\n- Familiarity with enterprise systems and infrastructure\n- Strong analytical and problem-solving skills\n- Excellent communication and report writing abilities\n- Experience in a Big 4 or professional services firm is preferred\n- CISA, CRISC, or similar certifications are a plus\n- Bachelor's degree in Computer Science, IT, or related field",
    typejob: "Risk Management",
    districtId: 28,
  },
  {
    company_id: 23,
    title: "ERP Implementation Consultant",
    jobDescription:
      "Deloitte Thailand is seeking an ERP Implementation Consultant to help our clients deploy and optimize enterprise resource planning systems. You will analyze business requirements, configure ERP solutions, and guide clients through the implementation process. This role requires technical expertise and understanding of business processes.\n\nResponsibilities:\n- Gather and document business requirements\n- Configure ERP systems according to client needs\n- Design and implement system integrations\n- Develop test plans and conduct system testing\n- Train client personnel on ERP functionality\n- Provide post-implementation support\n- Document system configurations and processes\n- Collaborate with technical and functional teams",
    address: "11/1 AIA Sathorn Tower, Sathorn Road, Sathon, Bangkok 10120",
    salary: 80000,
    jobRequirement:
      "- 4+ years of experience in ERP implementation\n- Expertise in one or more ERP systems (SAP, Oracle, Microsoft Dynamics)\n- Understanding of business processes across multiple domains\n- Experience with system configuration and customization\n- Knowledge of data migration and integration approaches\n- Strong problem-solving and analytical skills\n- Excellent communication and client management abilities\n- Experience in a consulting or professional services role\n- ERP certifications are a plus\n- Bachelor's degree in Business, IT, or related field",
    typejob: "ERP Implementation",
    districtId: 28,
  },

  // TechFlow Solutions Ltd. (Additional Position) (company_id: 1)
  {
    company_id: 1,
    title: "Machine Learning Engineer",
    jobDescription:
      "TechFlow Solutions is looking for a Machine Learning Engineer to join our AI team. In this role, you will design, develop, and deploy machine learning models for various applications. You will work closely with data scientists and software engineers to integrate ML capabilities into our products and client solutions.\n\nResponsibilities:\n- Design and implement machine learning algorithms and systems\n- Develop ML pipelines for data processing, model training, and evaluation\n- Deploy ML models to production environments\n- Optimize ML algorithms for performance and scalability\n- Collaborate with cross-functional teams to integrate ML capabilities\n- Stay current with advancements in machine learning and AI\n- Document model architectures and methodologies\n- Conduct experiments and A/B tests to evaluate model performance",
    address: "123/45 Sukhumvit Road, Watthana, Bangkok 10110",
    salary: 85000,
    jobRequirement:
      "- 3+ years of experience in machine learning or similar role\n- Strong programming skills in Python and familiarity with ML libraries (TensorFlow, PyTorch, scikit-learn)\n- Experience building and deploying ML models to production\n- Knowledge of data structures, data modeling, and software architecture\n- Understanding of machine learning algorithms and their mathematical foundations\n- Experience with cloud platforms (AWS, GCP, Azure) and their ML services\n- Strong problem-solving and analytical skills\n- Good communication abilities and teamwork\n- Master's degree or PhD in Computer Science, Machine Learning, or related field preferred\n- Bachelor's degree with equivalent experience is acceptable",
    typejob: "Machine Learning",
    districtId: 39,
  },

  // Digital Marketing Pro Co., Ltd. (Part-time Position) (company_id: 2)
  {
    company_id: 2,
    title: "Web Developer (Part-Time)",
    jobDescription:
      "Digital Marketing Pro is seeking a talented Web Developer for a part-time position. You will be responsible for developing and maintaining websites for our clients, implementing responsive designs, and ensuring optimal performance across different browsers and devices. This role offers flexible working hours and the opportunity to work on diverse projects.\n\nResponsibilities:\n- Develop and maintain client websites\n- Implement responsive web designs\n- Optimize websites for performance and SEO\n- Fix bugs and address technical issues\n- Collaborate with designers and content creators\n- Update existing websites with new features\n- Ensure cross-browser and cross-device compatibility\n- Maintain documentation of code and website functionality",
    address: "45/6 Silom Complex, Bang Rak, Bangkok 10500",
    salary: 30000,
    jobRequirement:
      "- 1+ years of experience in web development\n- Proficiency in HTML, CSS, and JavaScript\n- Experience with WordPress and other CMS platforms\n- Knowledge of responsive design principles\n- Understanding of SEO best practices\n- Familiarity with version control systems (Git)\n- Ability to work independently and manage time effectively\n- Strong attention to detail and problem-solving skills\n- Portfolio demonstrating web development projects\n- Currently enrolled in or graduated from a relevant degree program",
    typejob: "Web Development",
    districtId: 4,
  },

  // Starbucks Coffee (Thailand) Co., Ltd. (Casual Position) (company_id: 43)
  {
    company_id: 43,
    title: "IT Support Technician (Casual)",
    jobDescription:
      "Starbucks Thailand is seeking an IT Support Technician on a casual basis to provide technical assistance to our retail stores. You will troubleshoot hardware and software issues, assist with POS system operations, and ensure store technology is functioning properly. This role offers flexible scheduling and is ideal for those seeking variable hours.\n\nResponsibilities:\n- Provide on-site technical support to Starbucks retail locations\n- Troubleshoot hardware, software, and network issues\n- Assist with POS system setup and maintenance\n- Install and configure store technology equipment\n- Train store partners on technology use and basic troubleshooting\n- Document support tickets and resolution steps\n- Coordinate with central IT team for complex issues\n- Maintain inventory of IT equipment and supplies",
    address: "388 Exchange Tower, Sukhumvit Road, Khlong Toei, Bangkok 10110",
    salary: 25000,
    jobRequirement:
      "- 1+ years of experience in IT support or similar role\n- Knowledge of computer hardware and networking fundamentals\n- Experience with Windows operating systems and basic software troubleshooting\n- Familiarity with POS systems is a plus\n- Strong customer service orientation\n- Good communication and interpersonal skills\n- Ability to work flexible hours, including evenings and weekends\n- Basic understanding of IT security practices\n- Problem-solving skills and attention to detail\n- Technical education or certification is preferred",
    typejob: "IT Support",
    districtId: 33,
  },

  // Additional Contract Positions for Various Companies

  // DTAC TriNet Co., Ltd. (company_id: 15)
  {
    company_id: 15,
    title: "Telecommunications Systems Engineer (Contract)",
    jobDescription:
      "DTAC is seeking a Telecommunications Systems Engineer on a contract basis to support our network infrastructure projects. You will work on the design, implementation, and optimization of telecommunications systems, ensuring high performance and reliability. This is a 12-month contract with possibility of extension or conversion to permanent role.\n\nResponsibilities:\n- Design and implement telecommunications systems and infrastructure\n- Configure and optimize network equipment and services\n- Monitor network performance and troubleshoot issues\n- Collaborate with cross-functional teams on network projects\n- Document network configurations and procedures\n- Participate in capacity planning and network upgrades\n- Ensure compliance with industry standards and best practices\n- Support 24/7 operations as needed during critical incidents",
    address: "319 Chamchuri Square, Phaya Thai, Bangkok 10330",
    salary: 60000,
    jobRequirement:
      "- 3+ years of experience in telecommunications engineering\n- Strong knowledge of mobile networks (4G/5G technologies)\n- Experience with network equipment (routers, switches, base stations)\n- Understanding of telecommunications protocols and standards\n- Familiarity with network monitoring and management tools\n- Problem-solving skills and analytical thinking\n- Ability to work under pressure and meet deadlines\n- Good documentation and communication abilities\n- Relevant telecommunications certifications are a plus\n- Bachelor's degree in Telecommunications, Electrical Engineering, or related field",
    typejob: "Telecommunications",
    districtId: 14,
  },

  // Siam Commercial Bank PCL (company_id: 45)
  {
    company_id: 45,
    title: "Fintech Innovation Developer (Contract)",
    jobDescription:
      "Siam Commercial Bank is looking for a Fintech Innovation Developer to join our digital banking team on a 12-month contract. You will work on developing and implementing innovative financial technology solutions that enhance customer experience and drive digital transformation. This role offers the opportunity to work on cutting-edge projects in the financial services sector.\n\nResponsibilities:\n- Develop prototypes and proof of concepts for fintech innovations\n- Implement digital banking features and functionalities\n- Integrate with financial APIs and payment systems\n- Collaborate with UX/UI designers to create intuitive interfaces\n- Ensure security and compliance in financial applications\n- Test and optimize application performance\n- Stay current with fintech trends and technologies\n- Document technical specifications and development processes",
    address: "9 Ratchadapisek Road, Chatuchak, Bangkok 10900",
    salary: 75000,
    jobRequirement:
      "- 3+ years of experience in software development\n- Knowledge of financial services technology and digital banking\n- Experience with payment systems and financial APIs\n- Proficiency in modern programming languages (Java, Python, JavaScript)\n- Understanding of security requirements in financial applications\n- Familiarity with agile development methodologies\n- Strong problem-solving skills and innovation mindset\n- Good communication and collaboration abilities\n- Experience with mobile application development is a plus\n- Bachelor's degree in Computer Science, IT, or related field",
    typejob: "Fintech",
    districtId: 30,
  },
];
