interface ContactProps {
  isVisible?: boolean;
  animationDelay?: number;
}

export function Contact({ isVisible = true, animationDelay = 0 }: ContactProps) {
  const contactMethods = [
    {
      label: "Email",
      value: "H.alavi1394@gmail.com",
      type: "email",
      description: "For business inquiries and opportunities"
    },
    {
      label: "Phone",
      value: "+90 (535) 225 49 71",
      type: "tel",
      description: "Available weekdays 9:00 - 18:00 (UTC+3)"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ivala",
      type: "url",
      description: "Professional network and updates"
    },
    {
      label: "GitHub",
      value: "github.com/ivala2081",
      type: "url",
      description: "Code repositories and projects"
    }
  ];

  const handleContact = async (type: string, value: string, event: React.MouseEvent) => {
    // If Ctrl/Cmd is held, copy to clipboard instead
    if (event.ctrlKey || event.metaKey) {
      try {
        await navigator.clipboard.writeText(value);
        showCopySuccess(value);
        return;
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
      }
    }

    switch (type) {
      case 'email':
        window.open(`mailto:${value}?subject=Business Inquiry - Portfolio Contact&body=Hello Hamed,%0D%0A%0D%0AI am interested in discussing potential opportunities.%0D%0A%0D%0ABest regards`);
        break;
      case 'tel':
        window.open(`tel:${value}`);
        break;
      case 'url':
        window.open(`https://${value}`, '_blank');
        break;
    }
  };

  const showCopySuccess = (value: string) => {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 z-50 bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-green-400/20 animate-slide-in-right';
    notification.innerHTML = `
      <div class="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
        <span class="text-sm font-medium">Copied: ${value}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  return (
    <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${animationDelay}ms` }}>
      {/* Enhanced Header */}
      <div className="border-b border-zinc-800 pb-8 relative">
        <div className="flex items-center gap-4 mb-6 animate-slide-in-left">
          <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group">
            <span className="text-xs font-mono text-orange-500 group-hover:text-orange-400">04</span>
          </div>
          <h2 className="text-3xl lg:text-4xl uppercase tracking-[0.15em] bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent font-light">CONTACT</h2>
        </div>
        <p className="text-zinc-400 text-sm lg:text-base max-w-2xl leading-relaxed font-light animate-slide-in-left animate-delay-200">
          I'm always interested in discussing new opportunities, innovative projects, 
          and collaborations in financial technology and quantitative trading.
        </p>
        <div className="absolute bottom-0 left-0 w-24 h-px bg-gradient-to-r from-orange-500 to-transparent animate-slide-in-right animate-delay-300"></div>
      </div>

      {/* Enhanced Contact Methods */}
      <div className="space-y-6 animate-slide-in-up animate-delay-500">
        {contactMethods.map((contact, index) => (
          <div 
            key={index} 
            className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-300" 
            onClick={(e) => handleContact(contact.type, contact.value, e)}
            title={`${contact.type === 'email' ? 'Send email' : contact.type === 'tel' ? 'Call' : 'Visit'} • Ctrl+Click to copy`}
          >
            <div className="flex items-start justify-between p-6 bg-zinc-800/30 rounded-xl border border-zinc-800 group-hover:border-zinc-700 group-hover:bg-zinc-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 relative overflow-hidden">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300
                    ${contact.type === 'email' ? 'bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20' :
                      contact.type === 'tel' ? 'bg-green-500/10 border-green-500/20 group-hover:bg-green-500/20' :
                      'bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20'
                    }
                  `}>
                    {contact.type === 'email' ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ) : contact.type === 'tel' ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-zinc-300 uppercase tracking-[0.1em] text-sm group-hover:text-white transition-colors duration-300 font-medium">
                    {contact.label}
                  </h3>
                </div>
                
                <p className="text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 font-medium text-lg">
                  {contact.value}
                </p>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  {contact.description}
                </p>
                
                {/* Copy hint */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-zinc-600 font-mono uppercase tracking-wider">
                    Ctrl+Click to copy
                  </span>
                </div>
              </div>
              
              <div className="text-zinc-600 group-hover:text-orange-400 transition-colors duration-300 relative z-10">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="pt-8 border-t border-zinc-800 space-y-8">
        <div className="bg-zinc-800/20 p-6 rounded-lg border border-zinc-700/30">
          <h3 className="text-lg text-zinc-300 mb-4 uppercase tracking-[0.15em] font-medium">
            Current Status
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-zinc-400 font-light">Available for new opportunities</span>
          </div>
        </div>

        <div className="bg-zinc-800/20 p-6 rounded-lg border border-zinc-700/30">
          <h3 className="text-lg text-zinc-300 mb-4 uppercase tracking-[0.15em] font-medium">
            Location & Timezone
          </h3>
          <div className="space-y-3 text-zinc-400 font-light">
            <p>📍 Beylikduzu, Istanbul, Turkey</p>
            <p>🕐 UTC+3 (Turkey Time)</p>
            <p>🌍 Open to remote and international opportunities</p>
          </div>
        </div>

        <div className="bg-zinc-800/20 p-6 rounded-lg border border-zinc-700/30">
          <h3 className="text-lg text-zinc-300 mb-4 uppercase tracking-[0.15em] font-medium">
            Response Time
          </h3>
          <div className="space-y-2 text-zinc-400 text-sm font-light">
            <p>Email: Within 24 hours</p>
            <p>Phone: Immediate during business hours</p>
            <p>LinkedIn: Within 48 hours</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="pt-8 border-t border-zinc-800">
        <div className="bg-zinc-800/30 rounded-lg p-6 border border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-500/10 to-transparent"></div>
          <p className="text-zinc-400 text-sm italic leading-relaxed font-light relative z-10">
            "Innovation in financial technology requires the perfect blend of market expertise, 
            technical proficiency, and strategic thinking. I bring all three to every project."
          </p>
          <div className="mt-4 text-xs text-zinc-500 uppercase tracking-[0.2em] font-medium relative z-10">
            — Hamed Alavi, Financial Markets Expert
          </div>
        </div>
      </div>
    </div>
  );
}