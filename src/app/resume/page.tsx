import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata = {
  title: "Resume | Amandeep Singh",
  description:
    "Download my professional resume tailored for tech placements and internship opportunities.",
};

export default function Resume() {
  return (
    <div>
      <PageTitle
        title="Resume"
        subtitle="My professional qualifications and experience"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Download Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Download My Resume
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Get my complete resume optimized for recruitment and placement
            processes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/api/download?file=resume.pdf">
              📄 Download PDF
            </Button>
            <Button href="/api/download?file=resume.docx" variant="secondary">
              📝 Download DOCX
            </Button>
          </div>
        </div>

        {/* Resume Preview */}
        <Card className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Resume Preview
          </h2>

          {/* Objective */}
          <div className="mb-8 border-b border-slate-700 pb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Overview</h3>
            <p className="text-slate-400 leading-relaxed">
              I'm a Computer Science student at Lovely Professional University
              with expertise in full-stack development, AI/LLMs, and competitive
              programming. I have hands-on experience building production-ready
              applications with Python, JavaScript, and modern frameworks.
              Currently focused on RAG pipelines, LLM evaluation, and building
              scalable systems.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-8 border-b border-slate-700 pb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-cyan-400 mb-2">Languages</p>
                <p className="text-slate-400">C++, Python, JavaScript</p>
              </div>
              <div>
                <p className="font-semibold text-cyan-400 mb-2">
                  Backend / APIs
                </p>
                <p className="text-slate-400">
                  FastAPI, Node.js, Express.js, REST APIs
                </p>
              </div>
              <div>
                <p className="font-semibold text-cyan-400 mb-2">Frontend</p>
                <p className="text-slate-400">
                  React.js, Next.js, Tailwind CSS, Streamlit
                </p>
              </div>
              <div>
                <p className="font-semibold text-cyan-400 mb-2">Database</p>
                <p className="text-slate-400">PostgreSQL, MongoDB, DuckDB</p>
              </div>
              <div>
                <p className="font-semibold text-cyan-400 mb-2">ML/LLMs</p>
                <p className="text-slate-400">
                  LangChain, RAG Pipelines, LLM Evaluation, Cohere reranker
                </p>
              </div>
              <div>
                <p className="font-semibold text-cyan-400 mb-2">
                  Tools & Platforms
                </p>
                <p className="text-slate-400">
                  Docker, AWS, Pytest, Git, Plotly, Matplotlib
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8 border-b border-slate-700 pb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-slate-200">
                  B.Tech in Computer Science & Engineering
                </p>
                <p className="text-slate-400">
                  Lovely Professional University, Punjab 
                </p>
                <p className="text-cyan-400 text-sm mt-2">
                  CGPA: 8.1/10 | Percentage: 81%
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">
                  Senior Secondary (Class 12)
                </p>
                <p className="text-slate-400">Aklank Public School, Rajasthan | 2021</p>
                <p className="text-cyan-400 text-sm mt-2">Percentage: 77%</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8 border-b border-slate-700 pb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Training</h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-slate-200">
                  SDE – Virtual Internship Simulation
                </p>
                <p className="text-slate-400">
                  J.P. Morgan | Aug 2025 - Sep 2025
                </p>
                <ul className="text-slate-400 mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      Engineered a Spring Boot microservice using JPA and Apache
                      Kafka to process real-time transactions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      Deployed Kafka consumers to deserialize and process 20+
                      concurrent JSON transaction streams
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      Validated and cleaned 11+ user records using JPA
                      constraints and custom validators
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      Improved API response efficiency by 40% through query
                      optimization
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Certifications & Achievements
            </h3>
            <div className="mb-6">
              <h4 className="font-semibold text-cyan-300 mb-3">Certificates</h4>
              <ul className="text-slate-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>
                    Generative AI and LLMs - Architecture and Data Preparation
                    (IBM, Coursera) | Sep 2025
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Advance React (META, Coursera) | Aug 2025</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>
                    Design and Analysis of Algorithms (IIT Madras, NPTEL) | May
                    2025
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-300 mb-3">Achievements</h4>
              <ul className="text-slate-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Codeforces: 1419 Rated (Specialist)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>LeetCode: 1610 Rating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Rank 2 in GiveGITA Inter University Olympiad</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Additional Notes */}
        <div className="text-center">
          <p className="text-slate-400 mb-6">
            For more details about my experience and projects, explore other
            sections of my portfolio.
          </p>
          <Button href="/contact">Want to work together?</Button>
        </div>
      </div>
    </div>
  );
}
