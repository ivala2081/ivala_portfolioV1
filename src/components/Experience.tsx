export function Experience() {
  const experiences = [
    {
      period: "2025 – Present",
      title: "Treasury Developer",
      company: "Forex Broker (PipLinePro Treasury System)",
      description: "Designed and implemented the PipLinePro Treasury Management System, an AI-powered SaaS platform integrating financial dashboards, CRM, accounting, and payment systems.",
      skills: ["TypeScript", "Python", "JavaScript", "AI/ML"]
    },
    {
      period: "2025",
      title: "Professional Account Manager", 
      company: "Roka Group (Lavixo)",
      description: "Managed $4.9M customer portfolio with $50K average monthly deposits. Maintained 7.5% controlled withdrawal ratio through systematic strategies.",
      skills: ["Portfolio Management", "Client Relations", "Risk Management"]
    },
    {
      period: "2024",
      title: "Foreign Trade Assistant Specialist",
      company: "Lonca Trade (Ozturk Holding)",
      description: "Supported import/export operations, financial tracking, and trade policy compliance for international trade operations.",
      skills: ["International Trade", "Compliance", "Financial Analysis"]
    },
    {
      period: "2023",
      title: "Head of Finance Department",
      company: "ZedPay Company",
      description: "Led financial planning and operations to maximize PnL. Streamlined treasury workflows and reduced operational inefficiencies.",
      skills: ["Financial Planning", "Treasury Management", "Operations"]
    },
    {
      period: "2021 – 2022",
      title: "Founder",
      company: "WVM Hedge Fund",
      description: "Established hedge fund in collaboration with Ravel Real Estate. Applied quantitative research and systematic trading models.",
      skills: ["Hedge Fund Management", "Quantitative Research", "Leadership"]
    },
    {
      period: "2020 – 2022",
      title: "Self-Employed Algo-Trader",
      company: "Independent",
      description: "Designed automated trading systems using machine learning and technical analysis. Specialized in price action and smart money concepts.",
      skills: ["Algorithmic Trading", "Machine Learning", "Risk Management"]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-8 relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
            <span className="text-xs font-mono text-green-500">02</span>
          </div>
          <h2 className="text-2xl uppercase tracking-[0.2em] bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">EXPERIENCE</h2>
        </div>
        <div className="absolute bottom-0 left-0 w-20 h-px bg-gradient-to-r from-green-500 to-transparent"></div>
      </div>

      {/* Experience List */}
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            {/* Period */}
            <div className="text-xs font-mono text-green-400 mb-3 uppercase tracking-[0.15em] bg-green-500/10 inline-block px-3 py-1 rounded-full border border-green-500/20">
              {exp.period}
            </div>

            {/* Title & Company */}
            <div className="mb-4">
              <h3 className="text-xl text-white mb-2 group-hover:text-green-400 transition-colors duration-300 font-medium">
                {exp.title}
              </h3>
              <p className="text-zinc-400 uppercase tracking-[0.1em] text-sm font-light">
                {exp.company}
              </p>
            </div>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed mb-6 font-light">
              {exp.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="text-xs text-zinc-400 bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-700/50 uppercase tracking-[0.1em] font-medium hover:bg-zinc-700/50 hover:text-zinc-300 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Divider */}
            {index < experiences.length - 1 && (
              <div className="mt-8 pt-8 border-t border-zinc-800/50"></div>
            )}
          </div>
        ))}
      </div>

      {/* Back to Top */}
      <div className="pt-8 border-t border-zinc-800">
        <button className="text-xs text-zinc-500 uppercase tracking-widest hover:text-zinc-300 transition-colors duration-300">
          Back to Top ↗
        </button>
      </div>
    </div>
  );
}