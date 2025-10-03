interface ScrollIndicatorProps {
  activeSection: string;
  isTransitioning?: boolean;
}

export function ScrollIndicator({ activeSection, isTransitioning = false }: ScrollIndicatorProps) {
  const sections = [
    { id: 'about', label: 'About', color: 'green' },
    { id: 'experience', label: 'Experience', color: 'blue' },
    { id: 'skills', label: 'Skills', color: 'purple' },
    { id: 'contact', label: 'Contact', color: 'orange' }
  ];
  const activeIndex = sections.findIndex(section => section.id === activeSection);

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-500 shadow-green-500/50',
      blue: 'bg-blue-500 shadow-blue-500/50',
      purple: 'bg-purple-500 shadow-purple-500/50',
      orange: 'bg-orange-500 shadow-orange-500/50'
    };
    return colors[color as keyof typeof colors];
  };
  
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {sections.map((section, index) => {
          const isActive = index === activeIndex;
          const isCompleted = index < activeIndex;
          const colorClasses = getColorClasses(section.color);
          
          return (
            <div key={section.id} className="relative group">
              {/* Main indicator bar */}
              <div className="relative">
                <div 
                  className={`w-1.5 h-8 rounded-full transition-all duration-700 ease-out relative overflow-hidden ${
                    isActive 
                      ? `${colorClasses} shadow-lg animate-pulse w-2` 
                      : isCompleted 
                        ? 'bg-zinc-600 w-1.5' 
                        : 'bg-zinc-800 w-1'
                  } ${isTransitioning ? 'animate-pulse' : ''}`}
                >
                  {/* Progress fill animation for active */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-shimmer" />
                  )}
                  
                  {/* Completion checkmark */}
                  {isCompleted && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-0.5 h-0.5 bg-green-400 rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
                
                {/* Connecting line to next section */}
                {index < sections.length - 1 && (
                  <div className={`
                    absolute left-1/2 top-full w-px h-3 -translate-x-1/2
                    transition-all duration-500
                    ${isCompleted ? 'bg-zinc-600' : 'bg-zinc-800'}
                  `} />
                )}
              </div>
              
              {/* Enhanced label with animation */}
              <div className={`
                absolute right-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap
                transition-all duration-500 ease-out
                ${isActive 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'
                }
              `}>
                <div className="relative">
                  {/* Background */}
                  <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-zinc-700/50 -translate-x-1 -translate-y-1" />
                  
                  {/* Text content */}
                  <div className="relative z-10 px-3 py-1">
                    <span className={`
                      text-xs uppercase tracking-[0.15em] font-medium
                      ${isActive ? 'text-zinc-200' : 'text-zinc-400'}
                    `}>
                      {section.label}
                    </span>
                    
                    {/* Progress percentage */}
                    <div className="text-xs text-zinc-500 mt-0.5">
                      {Math.round(((index + 1) / sections.length) * 100)}%
                    </div>
                  </div>
                  
                  {/* Active indicator line */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 w-1 h-4 -translate-x-2 -translate-y-1/2 bg-green-500 rounded-full" />
                  )}
                </div>
              </div>
              
              {/* Floating particles for active section */}
              {isActive && (
                <>
                  <div className="absolute -left-2 -top-1 w-0.5 h-0.5 bg-green-500/60 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s', animationDuration: '2s' }} />
                  <div className="absolute -right-1 top-2 w-0.5 h-0.5 bg-green-500/40 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.7s', animationDuration: '2.5s' }} />
                  <div className="absolute left-1 -bottom-1 w-1 h-1 bg-green-500/30 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.2s', animationDuration: '3s' }} />
                </>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Overall progress line */}
      <div className="absolute left-1/2 top-0 w-px h-full -translate-x-1/2 bg-zinc-800/50 -z-10">
        <div 
          className="w-full bg-gradient-to-b from-green-500/60 to-transparent transition-all duration-1000 ease-out"
          style={{ height: `${((activeIndex + 1) / sections.length) * 100}%` }}
        />
      </div>
    </div>
  );
}