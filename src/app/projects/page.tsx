import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "Projects | Amandeep Singh",
  description:
    "Explore my portfolio projects showcasing web development, full-stack development, and software engineering skills.",
};

export default function Projects() {
  const projects = [
    {
      title: "Project-Aarth",
      description:
        "A dual-engine AI system that intelligently routes queries to a RAG agent (ChromaDB) or SQL agent (DuckDB) using an intent classifier. Built for efficient structured and unstructured data retrieval.",
      technologies: [
        "Python",
        "LangChain",
        "OpenAI GPT-4o",
        "FastAPI",
        "DuckDB",
        "Streamlit",
      ],
      role: "Full Stack Developer",
      challenges:
        "Implementing efficient intent classification, integrating RAG pipeline with RBAC, and optimizing LLM evaluation metrics.",
      outcomes:
        "40% reduction in query latency for structured requests. 18% improvement in answer relevance using Cohere reranker. 3x faster LLM evaluations with automated framework.",
      github: "https://github.com/Amandeep-Singh07",
      demo: "https://demo.example.com",
    },
    {
      title: "Rank Rush",
      description:
        "A real-time leaderboard system featuring a MinHeap-based ranking engine for efficient, interactive player rankings and score tracking.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
      ],
      role: "Full Stack Developer",
      challenges:
        "Building efficient ranking algorithms, ensuring real-time updates, and optimizing database queries for high concurrent users.",
      outcomes:
        "28% improvement in user workflow efficiency. 20% faster end-to-end development cycles. 30% engagement improvement, 15% server load reduction through API optimization.",
      github: "https://github.com/Amandeep-Singh07",
      demo: "https://demo.example.com",
    },
    {
      title: "Virtual Memory Optimizer",
      description:
        "An interactive dashboard for visualizing page replacement algorithms (LRU, Optimal) and simulating OS-level virtual memory management behavior.",
      technologies: [
        "Python",
        "Streamlit",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Plotly",
      ],
      role: "Full Stack Developer",
      challenges:
        "Processing large page access sequences, implementing accurate page replacement algorithms, and creating intuitive visualizations.",
      outcomes:
        "30% improvement in throughput with NumPy/Pandas optimization. Interactive real-time statistics and visualization dashboard built with Streamlit and Plotly.",
      github: "https://github.com/Amandeep-Singh07",
      demo: "https://demo.example.com",
    },
  ];

  return (
    <div>
      <PageTitle
        title="My Projects"
        subtitle="Showcasing my technical skills through real-world applications"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400">{project.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">My Role</h4>
                  <p className="text-slate-400">{project.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">
                    Key Challenges
                  </h4>
                  <p className="text-slate-400">{project.challenges}</p>
                </div>
              </div>

              <div className="my-6">
                <h4 className="font-semibold text-cyan-400 mb-2">
                  Outcomes & Impact
                </h4>
                <p className="text-slate-400">{project.outcomes}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 border-t border-slate-700 pt-6">
                <a
                  href={project.github}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  View on GitHub →
                </a>
                <a
                  href={project.demo}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Live Demo →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
