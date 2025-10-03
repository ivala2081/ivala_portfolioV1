import { Progress } from './ui/progress';
import { Card } from './ui/card';

interface SkillCategory {
  title: string;
  skills: { name: string; level: number; }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Financial & Trading Expertise",
    skills: [
      { name: "Foreign Exchange (FX)", level: 95 },
      { name: "CFDs & Futures Trading", level: 90 },
      { name: "Algorithmic Trading", level: 88 },
      { name: "Portfolio Management", level: 92 },
      { name: "Risk Modeling", level: 85 },
      { name: "Quantitative Research", level: 87 }
    ]
  },
  {
    title: "Programming & Data Analytics",
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
    title: "Treasury & Business Systems",
    skills: [
      { name: "Treasury Management", level: 95 },
      { name: "Financial Planning & Analysis", level: 90 },
      { name: "CRM Systems", level: 85 },
      { name: "Digital Marketing & Analytics", level: 78 },
      { name: "Import/Export Operations", level: 82 },
      { name: "Compliance Management", level: 88 }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "MetaTrader 4/5", level: 95 },
      { name: "Bloomberg Terminal", level: 88 },
      { name: "TradingView", level: 92 },
      { name: "AWS", level: 75 },
      { name: "Linux Systems", level: 80 },
      { name: "GitHub", level: 85 }
    ]
  }
];

export function SkillsMatrix() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-gray-900 border-gray-700">
            <div className="p-6">
              <h3 className="text-lg text-white font-mono mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                      <span className="text-gray-400 font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="bg-gray-800 rounded-full h-2 border border-gray-700">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-gray-600 to-gray-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}