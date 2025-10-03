import { Card } from './ui/card';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Treasury Developer",
    company: "Forex Broker (PipLinePro Treasury System)",
    period: "2025 – Present",
    achievements: [
      "Designed and implemented the PipLinePro Treasury Management System, an AI-powered SaaS platform integrating financial dashboards, CRM, accounting, payment systems, and automated data analysis",
      "Built scalable modules with TypeScript, Python, JavaScript, CSS, improving liquidity monitoring, compliance, and customer risk management",
      "Reduced reporting inefficiencies and enhanced decision-making with automated risk & performance dashboards"
    ]
  },
  {
    title: "Professional Account Manager",
    company: "Roka Group (Lavixo)",
    period: "2025",
    achievements: [
      "Managed an average monthly deposit of $50,000 USD with controlled 7.5% withdrawal ratio",
      "Oversaw a $4.9 million USD customer portfolio, optimizing systematic strategies for profitability and risk minimization",
      "Provided client advisory services, strengthening portfolio performance and client trust"
    ]
  },
  {
    title: "Head of Finance Department",
    company: "ZedPay Company",
    period: "2023",
    achievements: [
      "Led financial planning and operations to maximize monthly and yearly PnL",
      "Streamlined treasury workflows, reducing operational inefficiencies and improving profitability"
    ]
  },
  {
    title: "Professional Institutional Trader",
    company: "ZedPay Company",
    period: "2023",
    achievements: [
      "Executed large-scale trades across global markets with focus on FX, CFDs, and indices",
      "Implemented structured risk management models to optimize returns"
    ]
  },
  {
    title: "Foreign Trade Assistant Specialist",
    company: "Lonca Trade (Ozturk Holding Subsidiary)",
    period: "2024",
    achievements: [
      "Supported import/export operations, financial tracking, and trade policy compliance"
    ]
  },
  {
    title: "Founder",
    company: "WVM Hedge Fund",
    period: "2021 – 2022",
    achievements: [
      "Established a new-generation hedge fund in collaboration with Ravel Real Estate",
      "Applied quantitative research and systematic trading models to generate consistent returns"
    ]
  },
  {
    title: "Self-Employed Algo-Trader",
    company: "Independent",
    period: "2020 – 2022",
    achievements: [
      "Designed and operated automated trading systems using machine learning and technical analysis",
      "Specialized in price action, smart money concepts (SMC), and risk-managed strategies"
    ]
  }
];

export function ProfessionalExperience() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="bg-gray-900 border-gray-700">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl text-white font-mono">{exp.title}</h3>
                <p className="text-gray-300 font-mono">{exp.company}</p>
              </div>
              <div className="bg-gray-800 text-gray-300 px-3 py-1 rounded font-mono text-sm border border-gray-600">
                {exp.period}
              </div>
            </div>
            
            <div className="space-y-3">
              {exp.achievements.map((achievement, i) => (
                <div key={i} className="text-gray-400 leading-relaxed">
                  <span className="text-gray-500 mr-3">•</span>
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}