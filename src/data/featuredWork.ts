import { FeaturedWorkItem } from '../types';

export const featuredWorkItems: FeaturedWorkItem[] = [
  {
    id: "ta-assignment-portal",
    title: "Intelligent TA Assignment & Recommendation Platform",
    subtitle: "Full-Stack Web Application for Academic Management",
    description: "React + TypeScript frontend communicates with a FastAPI backend through REST APIs. PostgreSQL stores workflow data while Redis and Celery support scalable asynchronous processing. Phase 2 introduces an ML recommendation engine using SBERT embeddings and optimization algorithms for intelligent TA allocation.",
    architectureOverview: "Client-server architecture using React on the frontend and Node.js with Express on the backend. PostgreSQL serves as the primary relational database for managing complex entity relationships, deployed via Docker containers.",
    challengesSolved: [
      "Designed role-based workflows for Admins, Faculty, and Students",
      "Built a scalable architecture supporting future ML integration",
      "Created recommendation scoring using academic, skill, and preference signals",
      "Planned semantic matching using SBERT embeddings",
      "Addressed workload balancing and allocation optimization"
    ],
    results: [
      "Complete system architecture designed.",
      "Two-phase implementation roadmap created",
      "ML recommendation workflow defined",
      "Scalable infrastructure selected for production deployment"
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    github: "https://github.com/yourusername/ta-portal",
    demo: "https://ta-portal-demo.com",
    status: "ongoing"
  },
  {
    id: "rag-qa-system",
    title: "RAG-Based Question Answering System",
    subtitle: "Generative AI / LLM / Retrieval Pipeline",
    description: "Developed an advanced Retrieval-Augmented Generation (RAG) system capable of answering complex queries over large document corpora with high accuracy and reduced hallucination.",
    architectureOverview: "A robust AI pipeline integrating LangChain for orchestration, FastAPI for serving endpoints, and ChromaDB for vector storage. Leverages open-weight LLMs optimized via quantization for fast local inference.",
    challengesSolved: [
      "Engineered a semantic chunking strategy that improved retrieval relevance on highly technical documents.",
      "Implemented a hybrid search mechanism (Dense + Sparse) to reduce hallucination rates.",
      "Optimized inference latency through model quantization (INT8) and efficient API design."
    ],
    results: [
      "Achieved a 30% improvement in factual accuracy compared to baseline generation.",
      "Sub-second document retrieval over a corpus of 10,000+ research papers."
    ],
    tags: ["Python", "LangChain", "Hugging Face", "ChromaDB", "FastAPI"],
    github: "https://github.com/yourusername/rag-qa",
    status: "ongoing"
  }
];
