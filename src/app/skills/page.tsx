import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "Skills | Amandeep Singh",
  description:
    "Technical skills including programming languages, web development, tools, and soft skills.",
};

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C++", "Python", "JavaScript"],
    },
    {
      category: "Backend / APIs",
      skills: ["FastAPI", "Node.js", "Express.js", "REST APIs"],
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Streamlit"],
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MongoDB", "DuckDB"],
    },
    {
      category: "ML/LLMs",
      skills: [
        "LangChain",
        "RAG Pipelines",
        "LLM Evaluation",
        "Cohere Reranker",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: ["Docker", "AWS", "Pytest", "Git", "Plotly", "Matplotlib"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Leadership",
        "Team Collaboration",
        "Problem Solving",
        "Communication",
      ],
    },
  ];

  const proficiencies = [
    { skill: "Python", level: 92 },
    { skill: "JavaScript", level: 90 },
    { skill: "FastAPI / Node.js", level: 88 },
    { skill: "React.js & Next.js", level: 88 },
    { skill: "LangChain & RAG", level: 85 },
    { skill: "PostgreSQL / MongoDB", level: 85 },
  ];

  return (
    <div>
      <PageTitle
        title="Technical Skills"
        subtitle="Expertise in modern web technologies and software development"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Skill Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Skill Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="text-cyan-400 mr-2">▸</span>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Proficiency Levels */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Proficiency Levels
          </h2>
          <div className="space-y-6">
            {proficiencies.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 font-semibold">
                    {item.skill}
                  </span>
                  <span className="text-cyan-400 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
