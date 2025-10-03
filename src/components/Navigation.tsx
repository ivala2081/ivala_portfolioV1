interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isTransitioning?: boolean;
}

export function Navigation({ activeSection, onSectionChange, isTransitioning = false }: NavigationProps) {
  const sections = [
    { id: 'about', label: '01. ABOUT', number: '01', color: 'green', shortcut: '1' },
    { id: 'experience', label: '02. EXPERIENCE', number: '02', color: 'blue', shortcut: '2' },
    { id: 'skills', label: '03. SKILLS', number: '03', color: 'purple', shortcut: '3' },
    { id: 'contact', label: '04. CONTACT', number: '04', color: 'orange', shortcut: '4' }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      green: {
        active: 'bg-green-500/20 border-green-500/40 text-green-400',
        inactive: 'bg-zinc-800/30 border-zinc-700/50 text-zinc-600',
        line: 'from-green-500 to-transparent',
        indicator: 'bg-green-500 shadow-green-500/50'
      },
      blue: {
        active: 'bg-blue-500/20 border-blue-500/40 text-blue-400',
        inactive: 'bg-zinc-800/30 border-zinc-700/50 text-zinc-600',
        line: 'from-blue-500 to-transparent',
        indicator: 'bg-blue-500 shadow-blue-500/50'
      },
      purple: {
        active: 'bg-purple-500/20 border-purple-500/40 text-purple-400',
        inactive: 'bg-zinc-800/30 border-zinc-700/50 text-zinc-600',
        line: 'from-purple-500 to-transparent',
        indicator: 'bg-purple-500 shadow-purple-500/50'
      },
      orange: {
        active: 'bg-orange-500/20 border-orange-500/40 text-orange-400',
        inactive: 'bg-zinc-800/30 border-zinc-700/50 text-zinc-600',
        line: 'from-orange-500 to-transparent',
        indicator: 'bg-orange-500 shadow-orange-500/50'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="p-6 lg:p-12 border-t border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm">
      {/* Breadcrumb */}
      <div className="mb-6 text-xs text-zinc-500 font-mono flex items-center space-x-2">
        <span>CV</span>
        <span>/</span>
        <span className="text-zinc-300 capitalize">{activeSection}</span>
      </div>

      <nav className="space-y-2 lg:space-y-3">
        {sections.map((section, index) => {
          const colorClasses = getColorClasses(section.color, activeSection === section.id);
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              disabled={isTransitioning}
              className={`
                group flex items-center w-full text-left transition-all duration-500 p-4 rounded-xl
                transform hover:scale-[1.02] active:scale-[0.98]
                ${isActive 
                  ? 'text-white bg-zinc-800/60 border border-zinc-700/50 shadow-lg' 
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/30 border border-transparent hover:border-zinc-700/30'
                }
                ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
                animate-slide-in-left animate-delay-${index * 100}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Number Circle */}
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 border relative overflow-hidden
                ${isActive 
                  ? colorClasses.active
                  : `${colorClasses.inactive} group-hover:border-zinc-600 group-hover:scale-110`
                }
              `}>
                {/* Background shimmer effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  transition-transform duration-1000 ${isActive ? 'animate-shimmer' : ''}
                `} style={{
                  backgroundSize: '200% 100%'
                }} />
                
                <span className="text-xs font-mono relative z-10">
                  {section.number}
                </span>
              </div>
              
              <div className="flex-1 min-w-0">
                {/* Section Label */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`
                    text-sm lg:text-base uppercase tracking-[0.1em] transition-all duration-300 font-medium
                    ${isActive 
                      ? 'text-white' 
                      : 'text-zinc-500 group-hover:text-zinc-300'
                    }
                  `}>
                    {section.label.replace(/^\d+\.\s/, '')}
                  </span>
                  
                  {/* Keyboard Shortcut */}
                  <div className={`
                    text-xs font-mono px-2 py-1 rounded border transition-all duration-300
                    ${isActive 
                      ? 'bg-zinc-700/50 border-zinc-600/50 text-zinc-300' 
                      : 'bg-zinc-800/30 border-zinc-700/30 text-zinc-500 group-hover:border-zinc-600/50'
                    }
                  `}>
                    {section.shortcut}
                  </div>
                </div>
                
                {/* Progress Line */}
                <div className="relative h-px bg-zinc-800 rounded-full overflow-hidden">
                  <div className={`
                    absolute left-0 top-0 h-full transition-all duration-700 ease-out rounded-full
                    ${isActive 
                      ? `bg-gradient-to-r ${colorClasses.line} w-full shadow-sm` 
                      : 'bg-zinc-600 w-0 group-hover:w-1/3'
                    }
                  `} />
                </div>
              </div>
              
              {/* Enhanced Status Indicator */}
              <div className="flex flex-col items-center gap-1 ml-3">
                <div className={`
                  w-1.5 h-8 rounded-full transition-all duration-300 relative overflow-hidden
                  ${isActive 
                    ? `${colorClasses.indicator} shadow-lg animate-pulse` 
                    : 'bg-zinc-700 group-hover:bg-zinc-600 group-hover:h-10'
                  }
                `}>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-shimmer" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Progress Indicator */}
      <div className="mt-8 pt-6 border-t border-zinc-800/50">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Progress</span>
          <span className="text-xs text-zinc-400">{Math.round(((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100)}%</span>
        </div>
        <div className="w-full bg-zinc-800/50 h-1 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}