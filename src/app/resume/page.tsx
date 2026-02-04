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
            <Button href="/resume.pdf">📄 Download PDF</Button>
            <Button href="/resume.docx" variant="secondary">
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
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Objective</h3>
            <p className="text-slate-400 leading-relaxed">
              To secure a challenging position as a Software Developer/Intern
              where I can leverage my full-stack development skills,
              problem-solving abilities, and passion for technology to
              contribute to innovative projects and organizational growth.
              Seeking opportunities to apply academic knowledge in real-world
              scenarios and become a valuable asset to the team.
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
                <p className="text-slate-400">
                  Python, JavaScript, TypeScript, Java, C++, SQL
                </p>
              </div>
              <div>
                <p className="font-semibold text-cyan-400 mb-2">
                  Web Technologies
                </p>
                <p className="text-slate-400">
                  HTML5, CSS3, React, Next.js, Node.js, Express.js
                </p>
              </div>
              <div>
                <p className="font-semibold text-cyan-400 mb-2">Databases</p>
                <p className="text-slate-400">
                  MongoDB, PostgreSQL, MySQL, Firebase
                </p>
              </div>
              <div>
                <p className="font-semibold text-cyan-400 mb-2">
                  Tools & Platforms
                </p>
                <p className="text-slate-400">
                  Git, GitHub, Docker, AWS, Vercel, Linux
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
                  University Name, Location | Expected: May 2025
                </p>
                <p className="text-cyan-400 text-sm mt-2">
                  CGPA: 8.5/10 | Percentage: 85%
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">
                  Senior Secondary (Class 12)
                </p>
                <p className="text-slate-400">School Name, Location | 2021</p>
                <p className="text-cyan-400 text-sm mt-2">Percentage: 92%</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8 border-b border-slate-700 pb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Experience
            </h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-slate-200">
                  Software Development Intern
                </p>
                <p className="text-slate-400">
                  Company Name | Jun 2023 - Aug 2023
                </p>
                <ul className="text-slate-400 mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      Developed responsive web interfaces using React and
                      Tailwind CSS
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      Created REST APIs using Node.js and Express for backend
                      services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      Reduced database query time by 40% through optimization
                      techniques
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-200">
                  Web Development Intern
                </p>
                <p className="text-slate-400">
                  Startup Name | Jan 2023 - Apr 2023
                </p>
                <ul className="text-slate-400 mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      Built full-stack features for customer portal using
                      Next.js
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Implemented unit tests covering 85% of codebase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Contributed to documentation and code reviews</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Achievements & Certifications
            </h3>
            <ul className="text-slate-400 space-y-2">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>
                  Google Cloud Associate Cloud Engineer Certification (In
                  Progress)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>
                  Completed Full Stack Development Bootcamp with distinction
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>
                  Top 50 in CodeChef ranked programming competition with 1000+
                  participants
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>
                  Winner of Campus Hackathon 2023 - Best Innovation Award
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>
                  Published 2 technical blog posts on Medium with 5000+ views
                  combined
                </span>
              </li>
            </ul>
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
