export function Skills() {
  const skillCategories = [
    {
      title: "Financial & Trading",
      skills: [
        { name: "Foreign Exchange (FX)", level: 95 },
        { name: "Algorithmic Trading", level: 90 },
        { name: "Portfolio Management", level: 92 },
        { name: "Risk Modeling", level: 88 },
        { name: "Quantitative Research", level: 87 },
        { name: "Derivatives Trading", level: 85 }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "R", level: 75 },
        { name: "MQL4/5", level: 80 },
        { name: "SQL", level: 82 }
      ]
    },
    {
      title: "Business Systems",
      skills: [
        { name: "Treasury Management", level: 95 },
        { name: "Financial Planning", level: 90 },
        { name: "CRM Systems", level: 85 },
        { name: "Import/Export", level: 82 },
        { name: "Compliance", level: 88 },
        { name: "Digital Marketing", level: 78 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "MetaTrader 4/5", level: 95 },
        { name: "Bloomberg Terminal", level: 88 },
        { name: "TradingView", level: 92 },
        { name: "AWS", level: 75 },
        { name: "Linux", level: 80 },
        { name: "Git", level: 85 }
      ]
    }
  ];

  const certificates = [
    "Python for Data Science and AI (IBM)",
    "Technical Support Fundamentals (Google)",
    "FundedNext Elite Trader Certificate"
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-8 relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
            <span className="text-xs font-mono text-green-500">03</span>
          </div>
          <h2 className="text-2xl uppercase tracking-[0.2em] bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">SKILLS</h2>
        </div>
        <div className="absolute bottom-0 left-0 w-20 h-px bg-gradient-to-r from-green-500 to-transparent"></div>
      </div>

      {/* Skills Grid */}
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-lg text-zinc-300 mb-6 uppercase tracking-[0.15em] font-medium">
              {category.title}
            </h3>
            <div className="space-y-5">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300 font-light">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-zinc-800/50 h-1.5 rounded-full relative overflow-hidden border border-zinc-700/30">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-1000 ease-out rounded-full shadow-sm shadow-green-500/20"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {categoryIndex < skillCategories.length - 1 && (
              <div className="mt-8 pt-8 border-t border-zinc-800/50"></div>
            )}
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="pt-8 border-t border-zinc-800">
        <h3 className="text-lg text-zinc-300 mb-6 uppercase tracking-[0.15em] font-medium">
          Certifications
        </h3>
        <div className="space-y-4">
          {certificates.map((cert, index) => (
            <div key={index} className="flex items-center gap-4 group p-3 bg-zinc-800/20 rounded-lg border border-zinc-700/30 hover:bg-zinc-800/40 hover:border-zinc-600/50 transition-all duration-300">
              <div className="w-2 h-2 bg-green-500 rounded-full group-hover:bg-green-400 transition-colors duration-300 flex-shrink-0"></div>
              <span className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300 font-light">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="pt-8 border-t border-zinc-800">
        <h3 className="text-lg text-zinc-300 mb-6 uppercase tracking-[0.15em] font-medium">
          Interests
        </h3>
        <div className="flex flex-wrap gap-3">
          {['Electro Guitar', 'Snooker', 'Basketball', 'Horses', 'Sculpturing', 'Exhibitions'].map((interest, index) => (
            <span 
              key={index}
              className="text-xs text-zinc-500 bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700/50 uppercase tracking-[0.1em] font-medium hover:text-zinc-400 hover:border-zinc-600 hover:bg-zinc-700/50 transition-all duration-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}