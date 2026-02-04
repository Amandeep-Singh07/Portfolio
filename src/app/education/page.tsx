import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "Education | Amandeep Singh",
  description: "Educational background, coursework, and academic achievements.",
};

export default function Education() {
  return (
    <div>
      <PageTitle
        title="Education"
        subtitle="My academic journey and learning experiences"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Current Degree */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Current Degree
          </h2>
          <Card>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-slate-300 text-lg mb-4">
                Computer Science & Engineering
              </p>
              <p className="text-slate-400">
                University Name | Location
                <br />
                Expected Graduation: May 2025
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-700 pt-6">
              <div>
                <p className="text-slate-400 text-sm">CGPA</p>
                <p className="text-3xl font-bold text-cyan-400">8.5/10</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Percentage</p>
                <p className="text-3xl font-bold text-cyan-400">85%</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Status</p>
                <p className="text-lg font-bold text-cyan-400">Active</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Specialization */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Specialization
          </h2>
          <Card>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Software Engineering & Web Development
            </h3>
            <p className="text-slate-400 mb-4">
              Specializing in full-stack web development, software design
              patterns, and scalable system architecture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Focus Areas
                </h4>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">→</span>
                    <span>Web Application Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">→</span>
                    <span>Database Design & Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">→</span>
                    <span>Cloud Computing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-3">
                  Technical Electives
                </h4>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">→</span>
                    <span>Advanced Algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">→</span>
                    <span>Machine Learning Basics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">→</span>
                    <span>DevOps Fundamentals</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Relevant Coursework */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Relevant Coursework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Data Structures & Algorithms",
              "Operating Systems",
              "Database Management Systems",
              "Web Development",
              "Software Engineering",
              "Computer Networks",
              "Discrete Mathematics",
              "Object-Oriented Programming",
              "Advanced Web Technologies",
            ].map((course, index) => (
              <Card key={index} className="text-center">
                <p className="text-slate-300 font-semibold">{course}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Previous Education */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Previous Education
          </h2>
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">
                Senior Secondary (Class 12)
              </h3>
              <p className="text-slate-400 mb-2">
                School Name | Science Stream
              </p>
              <p className="text-slate-400">Percentage: 92%</p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">
                Secondary (Class 10)
              </h3>
              <p className="text-slate-400 mb-2">School Name</p>
              <p className="text-slate-400">Percentage: 95% | Distinction</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
