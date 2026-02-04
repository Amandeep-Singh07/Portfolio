import PageTitle from "@/components/PageTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "Competitive Programming | Amandeep Singh",
  description:
    "Competitive programming profiles, rankings, and participation across multiple platforms.",
};

export default function CompetitiveProgramming() {
  const platforms = [
    {
      name: "LeetCode",
      icon: "💻",
      profile: "amandeepsingh",
      stats: {
        "Problems Solved": "200+",
        Ranking: "Top 15%",
        Badges: "15+",
        Streak: "45 days",
      },
      description:
        "Active LeetCode user focusing on algorithm and data structure problems",
      profileUrl: "https://leetcode.com/u/Amandeep0512/",
    },
    {
      name: "CodeChef",
      icon: "🍳",
      profile: "amandeepsingh_chef",
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
      name: "HackerRank",
      icon: "🎖️",
      profile: "amandeepsingh_hr",
      stats: {
        "Problems Solved": "150+",
        "Star Level": "5-Star",
        Badges: "12+",
        Focus: "Problem Solving",
      },
      description:
        "HackerRank expert with 5-star achievement in Problem Solving",
      profileUrl: "https://www.hackerrank.com/profile/amandeep16052000",
    },
    {
      name: "Kaggle",
      icon: "📊",
      profile: "amandeepsingh_kaggle",
      stats: {
        Competitions: "8+",
        Notebooks: "5+",
        Followers: "150+",
        "Best Rank": "Top 10%",
      },
      description: "Data science and machine learning competition participant",
      profileUrl: "https://kaggle.com",
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

  return (
    <div>
      <PageTitle
        title="Competitive Programming"
        subtitle="My competitive programming profiles and achievements"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Platform Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Platforms & Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
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
                      <p className="text-cyan-400 font-bold text-lg">{value}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Contests */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Recent Competitions
          </h2>
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

        {/* Quick Stats */}
        <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Competitive Programming Stats
          </h2>
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
        <Card className="mt-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Goals & Milestones
          </h2>
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
    </div>
  );
}
