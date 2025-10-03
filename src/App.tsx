import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ScrollIndicator } from './components/ScrollIndicator';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Keyboard navigation
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) return;
      
      switch (e.key) {
        case '1':
          handleSectionChange('about');
          break;
        case '2':
          handleSectionChange('experience');
          break;
        case '3':
          handleSectionChange('skills');
          break;
        case '4':
          handleSectionChange('contact');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleSectionChange = (section: string) => {
    if (section === activeSection) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 150);
  };

  const handleContactClick = () => {
    handleSectionChange('contact');
  };

  const renderSection = () => {
    const sectionProps = {
      isVisible: !isTransitioning,
      animationDelay: isTransitioning ? 0 : 200
    };

    switch (activeSection) {
      case 'about':
        return <About {...sectionProps} />;
      case 'experience':
        return <Experience {...sectionProps} />;
      case 'skills':
        return <Skills {...sectionProps} />;
      case 'contact':
        return <Contact {...sectionProps} />;
      default:
        return <About {...sectionProps} />;
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white relative overflow-hidden ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900"></div>
      
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/3 rounded-full filter blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* Left Side - Hero */}
        <div className="w-full lg:w-[45%] min-h-screen flex flex-col relative">
          {/* Subtle parallax background */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 via-transparent to-black/20"></div>
          
          <div className="relative z-10">
            <Hero isLoaded={isLoaded} onContactClick={handleContactClick} />
            <Navigation 
              activeSection={activeSection} 
              onSectionChange={handleSectionChange}
              isTransitioning={isTransitioning}
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[55%] min-h-screen bg-zinc-900/95 backdrop-blur-sm relative">
          {/* Enhanced Content Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-900/95 to-zinc-800/90"></div>
            
            {/* Dynamic accent corners based on active section */}
            <div className={`absolute top-0 right-0 w-40 h-40 transition-all duration-1000 ${
              activeSection === 'about' ? 'bg-gradient-to-bl from-green-500/8 to-transparent' :
              activeSection === 'experience' ? 'bg-gradient-to-bl from-blue-500/8 to-transparent' :
              activeSection === 'skills' ? 'bg-gradient-to-bl from-purple-500/8 to-transparent' :
              'bg-gradient-to-bl from-orange-500/8 to-transparent'
            } pointer-events-none`}></div>
            
            <div className={`absolute bottom-0 left-0 w-32 h-32 transition-all duration-1000 ${
              activeSection === 'about' ? 'bg-gradient-to-tr from-green-500/6 to-transparent' :
              activeSection === 'experience' ? 'bg-gradient-to-tr from-blue-500/6 to-transparent' :
              activeSection === 'skills' ? 'bg-gradient-to-tr from-purple-500/6 to-transparent' :
              'bg-gradient-to-tr from-orange-500/6 to-transparent'
            } pointer-events-none`}></div>
            
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px'
            }}></div>
          </div>
          
          {/* Content Container with Better Spacing */}
          <div className="relative z-10 h-full">
            <div className={`p-8 lg:p-16 h-full overflow-y-auto transition-all duration-300 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              <div className="max-w-4xl">
                {renderSection()}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <ScrollIndicator activeSection={activeSection} isTransitioning={isTransitioning} />
      
      {/* Enhanced Divider Line */}
      <div className="hidden lg:block absolute left-[45%] top-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-700/50 to-transparent">
        <div className={`absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ${
          activeSection === 'about' ? 'bg-green-500/80' :
          activeSection === 'experience' ? 'bg-blue-500/80' :
          activeSection === 'skills' ? 'bg-purple-500/80' :
          'bg-orange-500/80'
        } shadow-lg animate-pulse`}></div>
      </div>

      {/* Keyboard Shortcuts Indicator */}
      <div className="fixed bottom-4 left-4 z-50 opacity-20 hover:opacity-60 transition-opacity duration-300">
        <div className="bg-zinc-800/90 backdrop-blur-sm rounded-lg p-3 border border-zinc-700/50">
          <div className="text-xs text-zinc-400 space-y-1">
            <div>Press 1-4 for quick navigation</div>
          </div>
        </div>
      </div>
    </div>
  );
}