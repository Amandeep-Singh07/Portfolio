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
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and Stripe payment integration.",
      technologies: ["Next.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
      role: "Full Stack Developer",
      challenges:
        "Implementing secure payment processing and handling complex database queries for product filtering.",
      outcomes:
        "Successfully deployed with 1000+ products and smooth user experience. 4.5★ rating on feedback.",
      github: "https://github.com",
      demo: "https://demo.example.com",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application with AI-powered responses using OpenAI API. Supports multiple conversations and persistent storage.",
      technologies: ["React", "Firebase", "OpenAI", "Socket.io", "Express.js"],
      role: "Full Stack Developer",
      challenges:
        "Implementing real-time messaging, managing API rate limits, and optimizing response times.",
      outcomes:
        "Sub-second response times. Used by 500+ beta testers. Average satisfaction rate: 92%.",
      github: "https://github.com",
      demo: "https://demo.example.com",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management tool with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSockets", "Docker"],
      role: "Full Stack Developer",
      challenges:
        "Synchronizing real-time updates across multiple clients without conflicts.",
      outcomes:
        "Improved team productivity by 30%. Currently used by 5 teams with 50+ active users.",
      github: "https://github.com",
      demo: "https://demo.example.com",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for analyzing and visualizing complex datasets with multiple chart types and filters.",
      technologies: ["D3.js", "React", "Python", "Flask", "PostgreSQL"],
      role: "Full Stack Developer",
      challenges:
        "Rendering thousands of data points efficiently and implementing interactive visualizations.",
      outcomes:
        "Handles 100K+ data points smoothly. Response time: <500ms for complex queries.",
      github: "https://github.com",
      demo: "https://demo.example.com",
    },
    {
      title: "Social Media Analytics Tool",
      description:
        "Tool to scrape, analyze, and visualize social media metrics with trend analysis and predictive insights.",
      technologies: ["Python", "React", "FastAPI", "MongoDB", "Celery"],
      role: "Full Stack Developer & Data Analyst",
      challenges:
        "Handling API rate limits and processing large volumes of social media data efficiently.",
      outcomes:
        "Processes 10K+ posts daily. Provides actionable insights reducing analysis time by 80%.",
      github: "https://github.com",
      demo: "https://demo.example.com",
    },
    {
      title: "Weather Forecasting App",
      description:
        "Mobile-responsive weather application with real-time forecasts, multiple locations, and weather alerts.",
      technologies: [
        "React",
        "Next.js",
        "OpenWeather API",
        "Tailwind CSS",
        "Geolocation",
      ],
      role: "Frontend Developer",
      challenges:
        "Implementing accurate geolocation and handling API responses from multiple weather providers.",
      outcomes: "Clean UI, fast load times (<2s). Supports 200+ countries.",
      github: "https://github.com",
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
