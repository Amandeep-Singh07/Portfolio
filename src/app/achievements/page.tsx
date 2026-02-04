import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "Achievements | Amandeep Singh",
  description:
    "Coding competition rankings, scholarships, leadership roles, and hackathon awards.",
};

export default function Achievements() {
  const achievements = [
    {
      category: "Coding Competitions",
      items: [
        {
          title: "CodeChef Global Ranking",
          description: "Top 50 in CodeChef Division 2 with 1000+ participants",
          date: "Oct 2023",
          icon: "🏆",
        },
        {
          title: "HackerRank 5-Star Badge",
          description:
            "Achieved 5-star rating in Problem Solving on HackerRank",
          date: "Aug 2023",
          icon: "⭐",
        },
        {
          title: "LeetCode Knight Badge",
          description:
            "Solved 200+ problems on LeetCode with Knight level achievement",
          date: "Jul 2023",
          icon: "🗡️",
        },
      ],
    },
    {
      category: "Hackathons & Events",
      items: [
        {
          title: "Campus Hackathon 2023 - Best Innovation",
          description:
            "Won first prize for developing an AI-powered study assistant",
          date: "Mar 2023",
          icon: "🥇",
        },
        {
          title: "Tech Fest 2023 - Runner-up",
          description:
            "Participated in coding competition with 500+ participants",
          date: "Feb 2023",
          icon: "🥈",
        },
        {
          title: "Startup Weekend 2022",
          description:
            "Built and pitched a MVP in 48 hours, received investor interest",
          date: "Nov 2022",
          icon: "🚀",
        },
      ],
    },
    {
      category: "Academic & Scholarships",
      items: [
        {
          title: "Merit-Based Scholarship",
          description:
            "Awarded 50% tuition scholarship for maintaining top GPA",
          date: "Jun 2022",
          icon: "🎓",
        },
        {
          title: "Dean's List",
          description:
            "Recognized for academic excellence in 4 consecutive semesters",
          date: "Ongoing",
          icon: "📚",
        },
        {
          title: "Teaching Assistant Award",
          description:
            "Excellent feedback and performance as TA for Data Structures course",
          date: "Dec 2022",
          icon: "👨‍🏫",
        },
      ],
    },
    {
      category: "Leadership & Contributions",
      items: [
        {
          title: "Tech Club President",
          description:
            "Led 100+ member tech community, organized 12 workshops and events",
          date: "2023 - 2024",
          icon: "👥",
        },
        {
          title: "Open Source Contributions",
          description: "5+ pull requests merged in popular GitHub repositories",
          date: "Ongoing",
          icon: "🔧",
        },
        {
          title: "Technical Blogging",
          description:
            "Published 8 technical articles on Medium with 10K+ total views",
          date: "Ongoing",
          icon: "📝",
        },
      ],
    },
  ];

  return (
    <div>
      <PageTitle
        title="Achievements"
        subtitle="Recognition and milestones in my tech journey"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {achievements.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, itemIndex) => (
                <Card key={itemIndex}>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{item.description}</p>
                  <p className="text-slate-500 text-sm">{item.date}</p>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Summary Stats */}
        <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Achievement Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">15+</p>
              <p className="text-slate-300">Awards & Recognition</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">200+</p>
              <p className="text-slate-300">Problems Solved</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">10K+</p>
              <p className="text-slate-300">Blog Views</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">5+</p>
              <p className="text-slate-300">Open Source Contributions</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
