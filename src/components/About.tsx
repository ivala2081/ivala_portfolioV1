interface AboutProps {
  isVisible?: boolean;
  animationDelay?: number;
}

export function About({ isVisible = true, animationDelay = 0 }: AboutProps) {
  return (
    <div className={`space-y-12 relative z-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${animationDelay}ms` }}>
      {/* Enhanced Header */}
      <div className="border-b border-zinc-800 pb-8 relative">
        <div className="flex items-center gap-4 mb-6 animate-slide-in-left">
          <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
            <span className="text-xs font-mono text-green-500 group-hover:text-green-400">01</span>
          </div>
          <h2 className="text-3xl lg:text-4xl uppercase tracking-[0.15em] bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent font-light">ABOUT</h2>
        </div>
        <p className="text-zinc-400 text-sm lg:text-base max-w-2xl leading-relaxed animate-slide-in-left animate-delay-200">
          Bridging financial expertise with cutting-edge technology to create innovative solutions in treasury management and quantitative trading.
        </p>
        <div className="absolute bottom-0 left-0 w-24 h-px bg-gradient-to-r from-green-500 to-transparent animate-slide-in-right animate-delay-300"></div>
      </div>

      {/* Main Content */}
      <div className="space-y-10">
        {/* Professional Summary */}
        <div className="animate-slide-in-up animate-delay-500">
          <h3 className="text-xl lg:text-2xl text-zinc-300 mb-8 uppercase tracking-[0.15em] font-medium bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Financial Technology Expert
          </h3>
          <div className="space-y-6 text-zinc-400 leading-relaxed font-light">
            <p className="text-lg lg:text-xl text-balance">
              Finance professional and <span className="text-zinc-300 font-medium">quantitative trader</span> with expertise in algorithmic trading, 
              portfolio management, and risk optimization. Experienced in developing <span className="text-green-400 font-medium">AI-powered 
              treasury systems</span> (SaaS) and data-driven trading strategies.
            </p>
            <p className="text-base lg:text-lg">
              Proven track record of managing <span className="text-blue-400 font-medium">multimillion-dollar portfolios</span>, delivering consistent 
              profitability, and leading cross-functional projects across trading, finance, and technology.
            </p>
          </div>
        </div>

        {/* Location & Info */}
        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-800/50">
          <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/50">
            <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">Based in</h4>
            <p className="text-zinc-300">Beylikduzu, Istanbul</p>
            <p className="text-zinc-400 text-sm">Turkey</p>
          </div>
          <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/50">
            <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">Experience</h4>
            <p className="text-zinc-300">5+ Years</p>
            <p className="text-zinc-400 text-sm">Financial Markets</p>
          </div>
        </div>

        {/* Education */}
        <div className="pt-8 border-t border-zinc-800">
          <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Education</h4>
          <div className="space-y-2">
            <p className="text-zinc-300">Civil Engineering</p>
            <p className="text-zinc-400 text-sm">Yildiz Technical University (100% English)</p>
          </div>
        </div>

        {/* Languages */}
        <div className="pt-8 border-t border-zinc-800">
          <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Languages</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm">English</span>
                <span className="text-zinc-500 text-xs">Business</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm">Turkish</span>
                <span className="text-zinc-500 text-xs">Native</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm">Persian</span>
                <span className="text-zinc-500 text-xs">Native</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm">Azerbaijani</span>
                <span className="text-zinc-500 text-xs">Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}