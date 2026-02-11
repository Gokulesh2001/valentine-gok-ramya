import React, { useState, useEffect } from 'react';
import { Timeline } from './components/Timeline';
import { FloatingHearts } from './components/FloatingHearts';
import { ArrowDown, Heart, ArrowRight } from 'lucide-react';

enum ViewState {
  HERO,
  TIMELINE,
  PROPOSAL
}

function App() {
  const [view, setView] = useState<ViewState>(ViewState.HERO);
  
  // Proposal State
  const [noBtnPosition, setNoBtnPosition] = useState({ top: 'auto', left: 'auto', position: 'static' });
  const [isAccepted, setIsAccepted] = useState(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const handleStartJourney = () => {
    setView(ViewState.TIMELINE);
  };

  const handleGoToProposal = () => {
    setView(ViewState.PROPOSAL);
  };

  const handleNoHover = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    // Prevent default to avoid weird touch behaviors
    // Calculate random position within viewport
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    setNoBtnPosition({
      position: 'fixed',
      left: `${x}px`,
      top: `${y}px`
    } as any);
  };

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <div className="min-h-screen relative pb-20">
      <FloatingHearts />
      
      {/* --- HERO SECTION --- */}
      {view === ViewState.HERO && (
        <div className="h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
          <div className="animate-pulse-slow mb-6">
            <Heart className="w-20 h-20 text-rose-500 fill-rose-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-script text-rose-800 mb-6 leading-tight">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-serif text-slate-600 mb-12 max-w-md">
            From a missed message on LinkedIn to a divine blessing at the temple.
          </p>
          <button 
            onClick={handleStartJourney}
            className="group relative px-8 py-4 bg-rose-600 text-white rounded-full font-bold shadow-lg hover:bg-rose-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Start the Journey
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}

      {/* --- TIMELINE SECTION --- */}
      {view === ViewState.TIMELINE && (
        <div className="relative z-10 pt-10">
          <div className="text-center mb-10 px-4">
            <h2 className="text-4xl font-script text-rose-800 mb-2">The Timeline of Us</h2>
            <p className="text-slate-500">How we got here</p>
          </div>
          
          <Timeline />

          <div className="flex justify-center py-12">
            <button 
              onClick={handleGoToProposal}
              className="px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              <Heart className="w-5 h-5 fill-white" />
              I have one question...
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* --- PROPOSAL SECTION --- */}
      {view === ViewState.PROPOSAL && (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 z-20 relative overflow-hidden">
          
          {isAccepted ? (
            <div className="text-center animate-bounce">
              <h1 className="text-5xl md:text-7xl font-script text-rose-600 mb-4">
                She Said Yes!
              </h1>
              <p className="text-2xl text-slate-700 font-serif">
                Happy Valentine's Day! ❤️
              </p>
              <div className="mt-8 text-6xl">🥰 💍 🥂</div>
            </div>
          ) : (
            <div className="bg-white/90 p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full border-2 border-rose-100">
              <div className="mb-6 w-full h-56 rounded-xl overflow-hidden shadow-md">
                <img 
                  src="temple.jpg" 
                  alt="Us at the temple" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-8">
                Will you be my Valentine?
              </h2>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center h-24 relative">
                <button 
                  onClick={handleAccept}
                  className="px-10 py-3 bg-rose-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-rose-600 hover:scale-110 transition-transform"
                >
                  Yes! ❤️
                </button>

                <button
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  style={noBtnPosition as any}
                  className="px-10 py-3 bg-slate-300 text-slate-600 text-xl font-bold rounded-full shadow-inner cursor-not-allowed transition-all duration-200"
                >
                  No 🙈
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;