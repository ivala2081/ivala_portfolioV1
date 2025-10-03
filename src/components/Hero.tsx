import profileImage from 'figma:asset/380c2f8ad579ea0776b3ed8728b14c1b3a3d596e.png';

interface HeroProps {
  isLoaded?: boolean;
  onContactClick?: () => void;
}

export function Hero({ isLoaded = false, onContactClick }: HeroProps) {
  
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a comprehensive CV data structure
    const cvData = {
      personalInfo: {
        name: "Hamed Alavi",
        title: "Financial Markets Expert & Treasury Systems Developer",
        email: "H.alavi1394@gmail.com",
        phone: "+90 (535) 225 49 71",
        location: "Beylikduzu, Istanbul, Turkey",
        linkedin: "linkedin.com/in/ivala",
        github: "github.com/ivala2081"
      },
      summary: "Finance professional and quantitative trader with expertise in algorithmic trading, portfolio management, and risk optimization. Experienced in developing AI-powered treasury systems (SaaS) and data-driven trading strategies.",
      experience: [
        {
          title: "Treasury Systems Developer",
          company: "Financial Technology Solutions",
          period: "2022 - Present",
          achievements: [
            "Developed AI-powered treasury management SaaS platform",
            "Implemented algorithmic trading strategies with 15%+ annual returns",
            "Built real-time risk monitoring and portfolio optimization systems"
          ]
        },
        {
          title: "Quantitative Trader",
          company: "Independent Trading",
          period: "2020 - 2022",
          achievements: [
            "Managed multimillion-dollar portfolios",
            "Developed data-driven trading algorithms",
            "Achieved consistent risk-adjusted returns"
          ]
        }
      ],
      skills: {
        "Programming Languages": ["Python", "TypeScript", "JavaScript", "SQL", "R"],
        "Financial Technologies": ["Bloomberg Terminal", "Reuters Eikon", "MetaTrader", "TradingView"],
        "Web Technologies": ["React", "Node.js", "Next.js", "Express"],
        "AI/ML Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
        "Databases": ["PostgreSQL", "MongoDB", "Redis", "InfluxDB"],
        "Cloud Platforms": ["AWS", "Google Cloud", "Azure"]
      },
      education: [
        {
          degree: "Master's in Financial Engineering",
          institution: "Istanbul Technical University",
          year: "2020"
        }
      ]
    };

    // Create and download PDF-style formatted text file
    const cvContent = `
HAMED ALAVI
Financial Markets Expert & Treasury Systems Developer

CONTACT INFORMATION
Email: ${cvData.personalInfo.email}
Phone: ${cvData.personalInfo.phone}
Location: ${cvData.personalInfo.location}
LinkedIn: ${cvData.personalInfo.linkedin}
GitHub: ${cvData.personalInfo.github}

PROFESSIONAL SUMMARY
${cvData.summary}

PROFESSIONAL EXPERIENCE
${cvData.experience.map(exp => `
${exp.title} - ${exp.company}
${exp.period}
${exp.achievements.map(achievement => `• ${achievement}`).join('\n')}
`).join('\n')}

TECHNICAL SKILLS
${Object.entries(cvData.skills).map(([category, skills]) => `
${category}:
${skills.map(skill => `• ${skill}`).join('\n')}
`).join('\n')}

EDUCATION
${cvData.education.map(edu => `${edu.degree} - ${edu.institution} (${edu.year})`).join('\n')}

Generated from Portfolio Website - ${new Date().toLocaleDateString()}
`;

    // Create and trigger download
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Hamed_Alavi_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Function to handle contact button
  const handleContactMe = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      // Fallback to email if no callback provided
      window.open('mailto:H.alavi1394@gmail.com?subject=Business Inquiry - Portfolio Contact&body=Hello Hamed,%0D%0A%0D%0AI am interested in discussing potential opportunities.%0D%0A%0D%0ABest regards');
    }
  };
  return (
    <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-12 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-zinc-900/50 via-black to-zinc-900/30"></div>
        
        {/* Geometric shapes with enhanced animations */}
        <div className="absolute top-10 left-10 w-24 h-24 border border-zinc-800/50 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-16 h-16 border border-zinc-700/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-8 w-2 h-20 bg-gradient-to-b from-green-500/20 to-transparent animate-pulse" style={{ animationDuration: '2s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-500/40 rounded-full" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
        <div className="absolute top-3/4 left-1/3 w-0.5 h-0.5 bg-blue-500/40 rounded-full" style={{ animation: 'float 5s ease-in-out infinite 1s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-green-500/30 rounded-full" style={{ animation: 'float 3s ease-in-out infinite 2s' }}></div>
        
        {/* Animated lines */}
        <div className="absolute top-16 left-1/2 w-px h-12 bg-gradient-to-b from-green-500/30 to-transparent" style={{ animation: 'pulse-slow 3s ease-in-out infinite' }}></div>
        <div className="absolute bottom-24 left-1/3 w-8 h-px bg-gradient-to-r from-green-500/30 to-transparent" style={{ animation: 'pulse-slow 4s ease-in-out infinite 1s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 text-center">
        {/* Professional Photo */}
        <div className="mb-8">
          <div className="relative w-28 h-28 lg:w-36 lg:h-36 mx-auto">
            {/* Animated background grid */}
            <div className="absolute inset-0 -m-8 opacity-30">
              <div className="w-full h-full relative overflow-hidden">
                {/* Grid lines */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    animation: 'grid-move 20s linear infinite'
                  }}
                ></div>
                
                {/* Floating dots */}
                <div className="absolute top-2 left-4 w-1 h-1 bg-green-500/40 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute top-8 right-6 w-0.5 h-0.5 bg-blue-500/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-green-500/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
                <div className="absolute bottom-2 right-2 w-0.5 h-0.5 bg-green-500/50 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                  <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1">
                    <div className="w-full h-full border border-green-500/20 rotate-45"></div>
                  </div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 left-1/2 w-1 h-1 -translate-x-1/2 translate-y-1">
                    <div className="w-full h-full bg-green-500/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pulsing rings */}
            <div className="absolute inset-0 -m-4">
              <div className="w-full h-full rounded-full border border-green-500/10 animate-ping" style={{ animationDuration: '4s' }}></div>
            </div>
            <div className="absolute inset-0 -m-6">
              <div className="w-full h-full rounded-full border border-green-500/5 animate-ping" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-xl"></div>
            
            {/* Main image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-700 shadow-2xl bg-zinc-800 z-10">
              <img
                src={profileImage}
                alt="Hamed Alavi"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Status indicator */}
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black shadow-lg animate-pulse z-20"></div>
          </div>
        </div>

        {/* Name with enhanced typography and animations */}
        <div className="relative">
          <div className="overflow-hidden">
            <h1 className={`
              text-4xl lg:text-7xl font-display font-medium tracking-[0.05em] mb-2 relative
              transform transition-all duration-1000
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
            `} style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                HAMED
              </span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <h1 className={`
              text-4xl lg:text-7xl font-display font-medium tracking-[0.05em] mb-8 relative
              transform transition-all duration-1000
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
            `} style={{ animationDelay: '0.4s' }}>
              <span className="bg-gradient-to-r from-zinc-300 via-zinc-100 to-white bg-clip-text text-transparent">
                ALAVI
              </span>
            </h1>
          </div>
          
          {/* Enhanced accent line with animation */}
          <div className={`
            absolute -bottom-4 left-1/2 transform -translate-x-1/2 
            bg-gradient-to-r from-transparent via-green-500 to-transparent
            transition-all duration-1000 ease-out
            ${isLoaded ? 'w-24 h-px opacity-80' : 'w-0 h-px opacity-0'}
          `} style={{ animationDelay: '0.8s' }}></div>
        </div>

        {/* Title with enhanced styling and animations */}
        <div className="space-y-4 mb-8">
          <div className="relative overflow-hidden">
            <p className={`
              text-lg lg:text-xl text-zinc-300 tracking-[0.2em] font-light
              transform transition-all duration-1000
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `} style={{ animationDelay: '0.6s' }}>
              Financial Markets Expert
            </p>
            <div className={`
              absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full 
              transition-all duration-1000
              ${isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-0'}
            `} style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative overflow-hidden">
            <p className={`
              text-base lg:text-lg text-zinc-400 tracking-[0.2em] font-light
              transform transition-all duration-1000
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `} style={{ animationDelay: '0.8s' }}>
              Treasury Systems Developer
            </p>
            
            {/* Typing cursor effect */}
            <span className={`
              inline-block w-0.5 h-5 bg-green-500 ml-1 
              transition-all duration-1000
              ${isLoaded ? 'opacity-100 animate-pulse' : 'opacity-0'}
            `} style={{ animationDelay: '1.2s' }}></span>
          </div>
        </div>

        {/* Tech Stack Pills with Staggered Animation */}
        <div className={`
          flex flex-wrap justify-center gap-2 max-w-md mx-auto mb-8
          transform transition-all duration-1000
          ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `} style={{ animationDelay: '1s' }}>
          {['TypeScript', 'Python', 'React', 'AI/ML'].map((tech, index) => (
            <span 
              key={tech}
              className={`
                text-xs px-4 py-2 bg-zinc-800/60 border border-zinc-700/50 rounded-full
                text-zinc-300 font-mono uppercase tracking-wider
                hover:bg-zinc-700/60 hover:border-zinc-600/50 transition-all duration-300
                cursor-default transform hover:scale-105 hover:-translate-y-0.5
                ${isLoaded ? 'animate-fade-in' : 'opacity-0'}
              `}
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enhanced Experience Badge */}
        <div className={`
          transform transition-all duration-1000
          ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `} style={{ animationDelay: '1.4s' }}>
          <div className="inline-block relative group">
            <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl px-8 py-4 shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:scale-105">
              <div className="text-sm text-zinc-300 uppercase tracking-[0.2em] mb-1 font-medium">2020 – 2025</div>
              <div className="text-xs text-green-400 uppercase tracking-[0.3em] font-bold">5+ YRS EXP.</div>
              
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Enhanced corner accent */}
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-green-500/60 group-hover:border-green-500 transition-colors duration-300"></div>
            
            {/* Floating particles */}
            <div className="absolute -top-2 -left-2 w-1 h-1 bg-green-500/40 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
            <div className="absolute -bottom-2 -right-2 w-0.5 h-0.5 bg-green-500/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Info - Enhanced */}
      <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-zinc-800/50">
          <div className="text-xs text-zinc-400 uppercase tracking-[0.2em] font-light">Hamed Alavi</div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400 uppercase tracking-[0.15em]">Available for work</span>
          </div>
        </div>
      </div>

      {/* Enhanced Action Buttons */}
      <div className={`
        absolute bottom-4 lg:bottom-8 right-4 lg:right-8
        transform transition-all duration-1000
        ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `} style={{ animationDelay: '1.6s' }}>
        <div className="text-right space-y-3">
          <button 
            onClick={handleDownloadCV}
            className="group flex items-center gap-3 text-xs text-zinc-500 uppercase tracking-[0.2em] hover:text-zinc-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50 group-hover:border-zinc-600 group-hover:bg-zinc-700/50 transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <span className="border-b border-transparent group-hover:border-zinc-500 pb-1 font-medium">Download CV</span>
          </button>
          
          <button 
            onClick={handleContactMe}
            className="group flex items-center gap-3 text-xs text-zinc-500 uppercase tracking-[0.2em] hover:text-green-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50 group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <span className="border-b border-transparent group-hover:border-green-400 pb-1 font-medium">Contact Me</span>
          </button>
        </div>
        
        {/* Floating action hint */}
        <div className="mt-4 text-right">
          <div className="inline-flex items-center gap-2 bg-zinc-900/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-zinc-800/50">
            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-zinc-500 font-mono">Ready to connect</span>
          </div>
        </div>
      </div>
    </div>
  );
}