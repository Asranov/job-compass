import { IVacancy } from "../models/IVacancy";

export const vacancies: IVacancy[] = [
  {
    id: 1,
    title: "Software Engineer",
    description:
      "Develop, test, and maintain software solutions using programming languages such as Java, Python, or C++.",
    owner: {
      id: 1,
      name: "John Doe",
      age: 35,
      profession: "Software Engineer",
    },
    location: "Remote",
    salary: 100000,
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Proficiency in programming languages",
      "Experience with software development methodologies",
    ],
    responsibilities: [
      "Develop and implement software solutions",
      "Participate in code reviews",
      "Troubleshoot and debug software issues",
    ],
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "Data Analyst",
    description:
      "Analyze large datasets to extract insights and trends. Utilize statistical techniques and data visualization tools to present findings to stakeholders.",
    owner: {
      id: 2,
      name: "Alice Smith",
      age: 28,
      profession: "Data Analyst",
    },
    location: "New York City, NY",
    salary: 80000,
    requirements: [
      "Bachelor's degree in Statistics, Mathematics, Computer Science, or related field",
      "Proficiency in SQL and data analysis tools",
      "Experience with data visualization tools",
    ],
    responsibilities: [
      "Collect and clean data",
      "Perform exploratory data analysis",
      "Develop and maintain data pipelines",
    ],
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: "Cybersecurity Analyst",
    description:
      "Monitor and analyze security events to detect and respond to potential cyber threats. Conduct vulnerability assessments and implement security measures to protect systems and networks.",
    owner: {
      id: 3,
      name: "Robert Johnson",
      age: 40,
      profession: "Cybersecurity Analyst",
    },
    location: "Washington, DC",
    salary: 95000,
    requirements: [
      "Bachelor's degree in Cybersecurity, Information Technology, or related field",
      "Knowledge of security protocols and tools",
      "Experience with incident response procedures",
    ],
    responsibilities: [
      "Monitor security logs and alerts",
      "Investigate security incidents",
      "Develop and update security policies and procedures",
    ],
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title: "Cloud Solutions Architect",
    description:
      "Design and implement cloud-based solutions using platforms such as AWS, Azure, or Google Cloud. Develop architecture blueprints and migration strategies for transitioning on-premises applications to the cloud.",
    owner: {
      id: 4,
      name: "Emily Brown",
      age: 38,
      profession: "Cloud Solutions Architect",
    },
    location: "San Francisco, CA",
    salary: 135000,
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Extensive experience with cloud platforms and services",
      "Expertise in infrastructure as code",
    ],
    responsibilities: [
      "Architect scalable and resilient cloud solutions",
      "Collaborate with development teams on cloud-native application design",
      "Provide guidance on cloud best practices and cost optimization",
    ],
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    title: "UI/UX Designer",
    description:
      "Create intuitive and visually appealing user interfaces for web and mobile applications. Conduct user research and usability testing to gather feedback and improve user experience.",
    owner: {
      id: 5,
      name: "Michael Johnson",
      age: 32,
      profession: "UI/UX Designer",
    },
    location: "London, UK",
    salary: 50000,
    requirements: [
      "Bachelor's degree in Design, Human-Computer Interaction, or related field",
      "Proficiency in design tools",
      "Understanding of design principles and usability standards",
    ],
    responsibilities: [
      "Develop wireframes and prototypes",
      "Conduct user interviews and surveys",
      "Collaborate with cross-functional teams on product design and implementation",
    ],
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
