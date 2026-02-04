import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "About Me | Amandeep Singh",
  description:
    "Learn about Amandeep Singh, a Computer Science student passionate about software development.",
};

export default function About() {
  return (
    <div>
      <PageTitle
        title="About Me"
        subtitle="Get to know me, my journey, and my passion for technology"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Personal Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Who Am I?</h2>
            <p className="text-slate-400 text-lg mb-4 leading-relaxed">
              I'm a Computer Science student at Lovely Professional University
              (2023-Present) with a passion for building scalable systems and
              AI-driven solutions. With strong expertise in full-stack
              development, RAG pipelines, and LLM evaluation, I've built
              production-ready applications that solve real-world problems.
            </p>
            <p className="text-slate-400 text-lg mb-4 leading-relaxed">
              My journey combines competitive programming excellence (Codeforces
              1419 Rated - Specialist) with practical software engineering. From
              architecting real-time leaderboards to implementing LLM evaluation
              frameworks, I focus on writing clean, maintainable code that
              scales. I'm deeply interested in generative AI, data systems, and
              competitive programming.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              I love contributing to open-source projects and exploring new
              technologies. Currently seeking opportunities to apply my
              full-stack, AI/ML, and system design skills in impactful projects.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                Academic Background
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-200">
                    B.Tech in Computer Science & Engineering
                  </p>
                  <p className="text-slate-400 text-sm">
                    Lovely Professional University (Phagwara, Punjab) | 2023-Present
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-200">
                    Intermediate (12th Grade)
                  </p>
                  <p className="text-slate-400 text-sm">
                    Aklank Public School (Kota, Rajasthan) | 2020-2021
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-200">
                    Matriculation (10th Grade)
                  </p>
                  <p className="text-slate-400 text-sm">
                    D.A.V Public School (Kota, Rajasthan) | 2018-2019
                Career Goals
              </h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>
                    Secure a challenging software development internship
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Build scalable and user-centric web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Contribute to open-source projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Master cloud technologies and DevOps practices</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Learning Philosophy */}
        <Card className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Learning Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Practice-Driven Learning
              </h3>
              <p className="text-slate-400">
                I believe in learning by doing. Building projects and solving
                real-world problems is the best way to master new concepts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Continuous Growth
              </h3>
              <p className="text-slate-400">
                The tech industry evolves rapidly. I'm committed to staying
                updated with the latest technologies and best practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Collaboration
              </h3>
              <p className="text-slate-400">
                I value teamwork and knowledge sharing. Working with others
                accelerates learning and produces better solutions.
              </p>
            </div>
          </div>
        </Card>

        {/* Hobbies & Interests */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <p className="text-3xl mb-3">🎮</p>
              <p className="font-semibold text-slate-200">Gaming</p>
              <p className="text-sm text-slate-400 mt-2">
                Enjoying strategy and indie games
              </p>
            </Card>
            <Card className="text-center">
              <p className="text-3xl mb-3">🎵</p>
              <p className="font-semibold text-slate-200">Music</p>
              <p className="text-sm text-slate-400 mt-2">
                Listening to electronic and indie music
              </p>
            </Card>
            <Card className="text-center">
              <p className="text-3xl mb-3">📚</p>
              <p className="font-semibold text-slate-200">Reading</p>
              <p className="text-sm text-slate-400 mt-2">
                Tech blogs and self-improvement books
              </p>
            </Card>
            <Card className="text-center">
              <p className="text-3xl mb-3">🏋️</p>
              <p className="font-semibold text-slate-200">Fitness</p>
              <p className="text-sm text-slate-400 mt-2">
                Regular exercise and outdoor activities
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
