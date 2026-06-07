{/* Research Interests */ }

<div className="mb-12">
    <h3 className="mb-6 text-2xl font-bold">
        Research Interests
    </h3>

    <div className="grid gap-6 md:grid-cols-2">
        {[
            {
                title: "Retrieval-Augmented Generation (RAG)",
                description:
                    "Exploring retrieval pipelines, vector databases, semantic search, reranking techniques, and knowledge-grounded AI systems to improve factual accuracy and reliability in LLM-powered applications."
            },
            {
                title: "Large Language Models (LLMs)",
                description:
                    "Studying prompt engineering, model evaluation, fine-tuning methodologies, quantization, and efficient deployment of open-source language models for domain-specific applications."
            },
            {
                title: "Agentic AI Systems",
                description:
                    "Investigating autonomous AI agents capable of reasoning, planning, memory management, tool usage, and multi-step task execution using modern agent frameworks."
            },
            {
                title: "Generative AI",
                description:
                    "Exploring generative models for text generation, multimodal intelligence, AI-powered automation, and practical applications of foundation models."
            },
            {
                title: "Machine Learning & Data Science",
                description:
                    "Applying statistical learning, predictive modeling, feature engineering, and data-driven problem solving across real-world datasets and research challenges."
            },
            {
                title: "Wireless Security & IoT Systems",
                description:
                    "Research inspired by my published patent on autonomous drone detection and immobilization using Wi-Fi deauthentication, embedded systems, and wireless communication analysis."
            }
        ].map((item) => (
            <div
                key={item.title}
                className="rounded-xl border border-primary/20 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
                <h4 className="mb-3 text-lg font-semibold">
                    {item.title}
                </h4>

                <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                </p>
            </div>
        ))}

    </div>
</div>

{/* Current Learning */ }

<div>
    <h3 className="mb-6 text-2xl font-bold">
        Current Learning & Exploration
    </h3>

    <div className="flex flex-wrap gap-3">
        {[
            "RAG",
            "LangChain",
            "LangGraph",
            "Agentic AI",
            "Vector Databases",
            "ChromaDB",
            "FAISS",
            "LlamaIndex",
            "Prompt Engineering",
            "Fine-Tuning",
            "Hugging Face",
            "Open Source LLMs",
            "Multi-Agent Systems",
            "Generative AI",
            "FastAPI",
            "AI Workflows"
        ].map((item) => (
            <span
                key={item}
                className="rounded-full border border-primary/20 px-4 py-2 text-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
                {item}
            </span>
        ))}
    </div>
</div>
