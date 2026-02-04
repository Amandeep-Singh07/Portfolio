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
      company: "Tech Company Name",
      role: "Software Development Intern",
      duration: "Jun 2023 - Aug 2023",
      description:
        "Worked on full-stack development for internal tools and customer-facing features.",
      responsibilities: [
        "Developed responsive web interfaces using React and Tailwind CSS",
        "Created and maintained REST APIs using Node.js and Express",
        "Optimized database queries reducing query time by 40%",
        "Participated in code reviews and contributed to documentation",
        "Deployed features to production using Docker and AWS",
      ],
      skills: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
      impact:
        "Successfully delivered 5 features, improved system performance by 35%",
    },
    {
      company: "Startup Name",
      role: "Web Development Intern",
      duration: "Jan 2023 - Apr 2023",
      description:
        "Contributed to the development of customer portal and internal dashboard.",
      responsibilities: [
        "Built full-stack features for customer portal using Next.js",
        "Implemented unit tests with 85% code coverage",
        "Fixed 20+ bugs and performance issues",
        "Mentored junior developers on best practices",
        "Contributed to migration from JavaScript to TypeScript",
      ],
      skills: ["Next.js", "TypeScript", "PostgreSQL", "Jest", "Tailwind CSS"],
      impact: "Reduced page load time by 45%, improved code reliability",
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
