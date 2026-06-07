import type { AboutData, SkillCategory } from '../types';

export const aboutData: AboutData = {
  bioParagraphs: [
    "I am currently pursuing an M.Tech in Data & Computational Science at IIT Jodhpur.",
    "My work focuses on Deep Learning, Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Agentic AI Systems, and Machine Learning. I am particularly interested in building intelligent systems that combine reasoning, retrieval, and real-world data to solve practical problems.",
    "My research experience includes a published patent on autonomous drone detection and immobilization using Wi-Fi deauthentication techniques. I actively build AI applications using LangChain, LangGraph, vector databases, and open-source LLMs while exploring scalable RAG and agentic AI architectures."
  ],
  learningAreas: [
    "Retrieval-Augmented Generation (RAG)",
    "Agentic AI & Multi-Agent Systems",
    "LLM Fine-Tuning & Evaluation",
    "Deep Learning & Neural Networks",
    "Scalable AI System Design"
  ],
  personalInterests: [
    "Exploring Open-Source AI Repositories",
    "Reading Tech Blogs & Research Papers",
    "Building Side Projects",
    "Photography & Traveling",
    "Playing Badminton"
  ]
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C++"]
  },
  {
    category: "AI & ML",
    skills: ["PyTorch", "Deep Learning", "Scikit-Learn", "LangChain", "Hugging Face", "ChromaDB"]
  },
  {
    category: "Web & Tools",
    skills: ["React", "Vite", "Tailwind CSS", "Git", "Docker", "FastAPI"]
  }
];
