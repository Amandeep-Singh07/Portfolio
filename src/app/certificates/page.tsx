import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "Certificates | Amandeep Singh",
  description:
    "Professional certifications in web development, cloud computing, and related technologies.",
};

export default function Certificates() {
  const certificates = [
    {
      category: "Web Development",
      certs: [
        {
          name: "Full Stack Web Development Bootcamp",
          issuer: "Udemy",
          date: "Jun 2023",
          credentialId: "UC-abc123xyz",
          status: "Completed",
          description:
            "Comprehensive course covering HTML5, CSS3, JavaScript, React, Node.js, and MongoDB",
        },
        {
          name: "Advanced React Patterns",
          issuer: "Frontend Masters",
          date: "Apr 2023",
          credentialId: "FM-react-2023",
          status: "Completed",
          description:
            "In-depth React patterns including hooks, context, and performance optimization",
        },
        {
          name: "Next.js Complete Guide",
          issuer: "Udemy",
          date: "Mar 2023",
          credentialId: "UC-nextjs-2023",
          status: "Completed",
          description:
            "Master Next.js with App Router, API routes, and deployment strategies",
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      certs: [
        {
          name: "Google Cloud Associate Cloud Engineer",
          issuer: "Google Cloud",
          date: "Expected: Feb 2024",
          credentialId: "In Progress",
          status: "In Progress",
          description:
            "Preparing for GCP cloud infrastructure and services certification",
        },
        {
          name: "AWS Certified Cloud Practitioner",
          issuer: "Amazon Web Services",
          date: "Expected: Jan 2024",
          credentialId: "In Progress",
          status: "In Progress",
          description: "Comprehensive AWS cloud services and best practices",
        },
        {
          name: "Docker & Kubernetes Essentials",
          issuer: "Linux Academy",
          date: "Dec 2022",
          credentialId: "LA-docker-2022",
          status: "Completed",
          description:
            "Container fundamentals, Docker, and Kubernetes orchestration",
        },
      ],
    },
    {
      category: "Data Science & Analytics",
      certs: [
        {
          name: "Data Science with Python",
          issuer: "Coursera",
          date: "Sep 2022",
          credentialId: "CR-datasci-2022",
          status: "Completed",
          description:
            "Python, data analysis, visualization, and basic machine learning concepts",
        },
        {
          name: "SQL for Data Analysis",
          issuer: "DataCamp",
          date: "Jul 2022",
          credentialId: "DC-sql-2022",
          status: "Completed",
          description:
            "Advanced SQL queries, optimization, and data manipulation techniques",
        },
      ],
    },
    {
      category: "Professional Development",
      certs: [
        {
          name: "Google IT Support Professional Certificate",
          issuer: "Coursera",
          date: "May 2022",
          credentialId: "CR-itsupport-2022",
          status: "Completed",
          description:
            "IT fundamentals, networking, security, and system administration basics",
        },
      ],
    },
  ];

  return (
    <div>
      <PageTitle
        title="Certifications"
        subtitle="Professional credentials and completed courses"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {certificates.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              {section.category}
            </h2>
            <div className="space-y-6">
              {section.certs.map((cert, certIndex) => (
                <Card key={certIndex}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400 mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-slate-300">{cert.issuer}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        cert.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-slate-400 mb-4">{cert.description}</p>

                  <div className="flex justify-between items-center border-t border-slate-700 pt-4">
                    <div>
                      <p className="text-slate-500 text-sm">Credential ID</p>
                      <p className="text-cyan-400 font-semibold">
                        {cert.credentialId}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500 text-sm">Issue Date</p>
                      <p className="text-slate-300 font-semibold">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Summary */}
        <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Certification Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-cyan-400">8</p>
              <p className="text-slate-300">Total Certifications</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-400">6</p>
              <p className="text-slate-300">Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">2</p>
              <p className="text-slate-300">In Progress</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
