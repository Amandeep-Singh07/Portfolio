import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "Achievements | Amandeep Singh",
  description:
    "Coding competition rankings, scholarships, leadership roles, and hackathon awards.",
};

export default function Achievements() {
  const competitiveProgrammingPlatforms = [
    {
      name: "Codeforces",
      icon: "⚡",
      profile: "amandeepsingh",
      stats: {
        Rating: "1419",
        Tier: "Specialist",
        Contests: "20+",
        "Best Rank": "Top 10%",
      },
      description:
        "Competitive programmer specializing in algorithmic contests",
      profileUrl: "https://codeforces.com",
    },
    {
      name: "LeetCode",
      icon: "💻",
      profile: "amandeepsingh",
      stats: {
        Rating: "1610",
        "Problems Solved": "200+",
        Ranking: "Top 15%",
        Badges: "15+",
      },
      description:
        "Active LeetCode user focusing on algorithm and data structure problems",
      profileUrl: "https://leetcode.com/u/Amandeep0512/",
    },
    {
      name: "CodeChef",
      icon: "🍳",
      profile: "amandeepsingh",
      stats: {
        Rating: "1650",
        Division: "Division 2",
        Contests: "20+",
        "Best Rank": "Top 50",
      },
      description: "Regular CodeChef competitor with consistent performance",
      profileUrl: "https://codechef.com",
    },
    {
      name: "GiveGITA Olympiad",
      icon: "🏅",
      profile: "Rank 2",
      stats: {
        Achievement: "Rank 2",
        Competition: "Inter University",
        Year: "2025",
        Type: "Programming",
      },
      description: "Ranked 2nd in GiveGITA Inter University Olympiad",
      profileUrl: "https://givegita.com",
    },
  ];

  const recentCompetitions = [
    {
      title: "CodeChef Division 2 Contest (Aug 2023)",
      platform: "CodeChef",
      rank: "Top 50",
      rating: "Gained +50 rating",
      description: "Solved 3 problems out of 5 in the contest time",
    },
    {
      title: "LeetCode Biweekly Contest 107",
      platform: "LeetCode",
      rank: "Top 1000",
      rating: "Improved rating",
      description: "Solved 3 problems with optimal solutions",
    },
    {
      title: "HackerRank World Codesprint",
      platform: "HackerRank",
      rank: "Top 15%",
      rating: "5-Star Achievement",
      description: "Maintained perfect score in Problem Solving track",
    },
  ];

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
        {/* Competitive Programming Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Competitive Programming
          </h2>

          {/* Platform Cards */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Platforms & Profiles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {competitiveProgrammingPlatforms.map((platform, index) => (
                <Card key={index}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-4xl mb-2">{platform.icon}</p>
                      <h3 className="text-2xl font-bold text-cyan-400">
                        {platform.name}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        @{platform.profile}
                      </p>
                    </div>
                    <a
                      href={platform.profileUrl}
                      className="text-cyan-400 hover:text-cyan-300 text-2xl"
                    >
                      →
                    </a>
                  </div>

                  <p className="text-slate-400 mb-6">{platform.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(platform.stats).map(([key, value]) => (
                      <div key={key} className="bg-slate-700 rounded-lg p-3">
                        <p className="text-slate-400 text-xs uppercase tracking-wider">
                          {key}
                        </p>
                        <p className="text-cyan-400 font-bold text-lg">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Contests */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Recent Competitions
            </h3>
            <div className="space-y-6">
              {recentCompetitions.map((comp, index) => (
                <Card key={index}>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{comp.description}</p>

                  <div className="flex flex-wrap gap-4 border-t border-slate-700 pt-4">
                    <div>
                      <p className="text-slate-400 text-sm">Platform</p>
                      <p className="text-cyan-400 font-semibold">
                        {comp.platform}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Rank</p>
                      <p className="text-cyan-400 font-semibold">{comp.rank}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Result</p>
                      <p className="text-green-400 font-semibold">
                        {comp.rating}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Competitive Programming Stats */}
          <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500 mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Competitive Programming Stats
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-cyan-400 mb-2">500+</p>
                <p className="text-slate-300">Problems Solved</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-cyan-400 mb-2">50+</p>
                <p className="text-slate-300">Contests Participated</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-cyan-400 mb-2">4</p>
                <p className="text-slate-300">Active Platforms</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-cyan-400 mb-2">Top 15%</p>
                <p className="text-slate-300">Average Ranking</p>
              </div>
            </div>
          </Card>

          {/* Future Goals */}
          <Card className="mb-16">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Goals & Milestones
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-400">
                <span className="text-cyan-400 mr-3">→</span>
                <span>Achieve 5-star rating on all major platforms</span>
              </li>
              <li className="flex items-start text-slate-400">
                <span className="text-cyan-400 mr-3">→</span>
                <span>Rank in top 10 of at least one major contest</span>
              </li>
              <li className="flex items-start text-slate-400">
                <span className="text-cyan-400 mr-3">→</span>
                <span>Solve 1000+ problems across all platforms</span>
              </li>
              <li className="flex items-start text-slate-400">
                <span className="text-cyan-400 mr-3">→</span>
                <span>Maintain consistent 45+ day solving streak</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Other Achievements */}
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
