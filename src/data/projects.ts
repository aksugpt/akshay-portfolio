import { ProjectItem } from '../types';

export const projectItems: ProjectItem[] = [
  {
    id: "ta-assignment-portal",
    title: "Intelligent TA Assignment & Recommendation Platform",
    description: "Designed and developed a comprehensive portal for automating and managing Teaching Assistant assignments, streamlining the academic workflow for faculty and students.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    github: "https://github.com/yourusername/ta-portal",
    demo: "https://ta-portal-demo.com",
    status: "Ongoing",
    highlights: [
      "Automated matching algorithm to balance TA workload.",
      "Secure role-based access control (RBAC).",
      "Optimized complex SQL queries reducing load times by 60%."
    ],
    duration: "May 2026 - Present"
  },
  {
    id: "rag-qa-system",
    title: "RAG-Based Question Answering System",
    description: "Developed an advanced Retrieval-Augmented Generation (RAG) system capable of answering complex queries over large document corpora with high accuracy.",
    tags: ["Python", "LangChain", "Hugging Face", "ChromaDB", "FastAPI"],
    github: "https://github.com/yourusername/rag-qa",
    status: "Ongoing",
    highlights: [
      "Semantic chunking strategy for better retrieval relevance.",
      "Hybrid search mechanism to reduce hallucination rates.",
      "Sub-second document retrieval over 10,000+ papers."
    ],
    duration: "May 2026 - Present"
  },
  {
    id: "drone-detection",
    title: "Patent-Based Autonomous Drone Detection & Immobilization System",
    description: "Published patent focused on detecting and immobilizing unauthorized drones using dual-band Wi-Fi analysis and targeted deauthentication techniques.",
    tags: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "ROS"],
    github: "https://github.com/yourusername/drone-detection",
    status: "Completed",
    highlights: [
      "Application No: 202511038869 A",
      "Publication Date: 16 May 2025"
    ],
    duration: "Published Date:- 16 May 2025"
  },

];
