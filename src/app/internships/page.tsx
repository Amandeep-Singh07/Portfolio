import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "Internships & Experience | Amandeep Singh",
  description:
    "My internship experiences and work history in software development.",
};

export default function Internships() {
  const experiences = [
    {
      company: "J.P. Morgan (Virtual Internship Simulation)",
      role: "SDE – Virtual Internship Simulation",
      duration: "Aug 2025 - Sep 2025",
      description:
        "Engineered a Spring Boot microservice to process real-time financial transactions using Apache Kafka.",
      responsibilities: [
        "Built a Spring Boot microservice using JPA and Apache Kafka for processing real-time transactions",
        "Deployed Kafka consumers to deserialize and process 20+ concurrent JSON transaction streams",
        "Validated and cleaned 11+ user records using JPA constraints and custom validators",
        "Optimized RESTful incentive service for processing and enriching high-volume transactional data",
        "Improved API response efficiency by 40% through query optimization",
      ],
      skills: ["Spring Boot", "JPA", "Apache Kafka", "REST APIs", "Java"],
      impact:
        "Enabled real-time balance updates and transactional data processing at scale",
    },
  ];

  return (
    <div>
      <PageTitle
        title="Internships & Experience"
        subtitle="Professional experiences that shaped my development journey"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                <p className="text-slate-300 text-lg">{exp.company}</p>
                <p className="text-slate-400 text-sm mt-2">{exp.duration}</p>
              </div>

              <p className="text-slate-400 mb-6">{exp.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-slate-400">
                      <span className="text-cyan-400 mr-3">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Impact & Achievements
                </h4>
                <p className="text-slate-400">{exp.impact}</p>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Looking for opportunities */}
        <Card className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Currently Open To
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">→</span>
              <span>Full-time Software Developer roles</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">→</span>
              <span>Internship opportunities in tech companies</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">→</span>
              <span>Freelance web development projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">→</span>
              <span>Startup roles with growth potential</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
