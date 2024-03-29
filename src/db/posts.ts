import { IPost } from "../models/IPost";

export const posts: IPost[] = [
  {
    id: 1,
    title: "Effective Code Review Practices",
    description:
      "Discover the best practices for conducting efficient and constructive code reviews to improve code quality and team collaboration.",
    images: ["code_review_1.jpg", "code_review_2.jpg"],
    owner: {
      id: 1,
      name: "John",
      age: 35,
      profession: "Senior Software Engineer",
    },
  },
  {
    id: 2,
    title: "Agile Software Development Methodologies",
    description:
      "Learn about different agile methodologies such as Scrum, Kanban, and Extreme Programming, and how they can improve software development processes.",
    images: [
      "agile_methodologies_1.jpg",
      "agile_methodologies_2.jpg",
      "agile_methodologies_3.jpg",
    ],
    owner: {
      id: 2,
      name: "Albert",
      age: 40,
      profession: "Mobile Developer",
    },
  },
  {
    id: 3,
    title: "Microservices Architecture: Design and Implementation",
    description:
      "Explore the principles and best practices of designing and implementing microservices architecture to build scalable and resilient software systems.",
    images: [
      "microservices_architecture_1.jpg",
      "microservices_architecture_2.jpg",
    ],
    owner: {
      id: 3,
      name: "Smith",
      age: 28,
      profession: "Software Architect",
    },
  },
];
