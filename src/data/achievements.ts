import { AchievementItem } from '../types';

export const achievementItems: AchievementItem[] = [
  {
    id: "patent-drone",
    title: "Autonomous Dual-Band System for Selective Drone Detection and Immobilization via Wi-Fi Deauthentication",
    issuer: "Indian Patent Office",
    year: 2025,
    type: "patent",
    status: "Published Patent Application",
    applicationNo: "202511038869 A",
    publicationDate: "16 May 2025",
    description: "Designed and patented an automated system that generates deauthentication packets to immobilize drones or wireless devices operating on 2.4GHz and 5GHz frequencies."
  },
  {
    id: "hackathon-neuro",
    title: "Neuro Robotics Hackathon 2026",
    issuer: "School of Artificial Intelligence and Data Science, IIT Jodhpur",
    year: 2026,
    type: "award",
    highlight: "Secured 3rd Place",
    description: "Participated in a competitive neuro-robotics hackathon focused on intelligent systems, brain-signal-based applications, robotics, AI-driven problem solving, and interdisciplinary innovation. Competed against talented teams and secured a top-three position."
  },
  {
    id: "academic-mtech",
    title: "M.Tech in Data and Computational Science",
    issuer: "Department of Mathematics, IIT Jodhpur",
    type: "academic",
    status: "Current Student"
  },
  {
    id: "research-genai",
    title: "Generative AI & LLM Research Journey",
    issuer: "Research Focus",
    type: "research",
    tags: [
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Models (LLMs)",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "Vector Databases",
      "ChromaDB",
      "FAISS",
      "LlamaIndex"
    ]
  }
];
