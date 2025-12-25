"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const REWIND_LINES = [
  "Let's go back...",
  "What were you carrying?",
  "What did you need to hear?",
];

export default function RewindPage() {
  const [regret, setRegret] = useState("");
  const [isRewinding, setIsRewinding] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const router = useRouter();

  const handleSubmit = () => {
    if (regret.trim()) {
      sessionStorage.setItem("userRegret", regret);
      setIsRewinding(true);
      
      let lineIndex = 0;
      const interval = setInterval(() => {
        lineIndex++;
        if (lineIndex < REWIND_LINES.length) {
          setCurrentLine(lineIndex);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            router.push("/reflection");
          }, 2500);
        }
      }, 2500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit();
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      
      {/* Decorative background elements */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 right-20 w-64 h-64 bg-amber-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-16 w-72 h-72 bg-orange-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        
        {/* Rewind Animation */}
        {isRewinding && (
          <div className="text-center space-y-12 animate-fade-in">
            
            {/* Analog Clock */}
            <div className="flex justify-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                {/* Clock face - outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-amber-300/40 bg-white/30 backdrop-blur-sm shadow-lg"></div>
                
                {/* Hour markers */}
                {[...Array(12)].map((_, i) => {
                  const angle = i * 30;
                  const isMainMarker = i % 3 === 0;
                  const radius = isMainMarker ? 56 : 60;
                  const x = 50 + radius * Math.sin((angle * Math.PI) / 180);
                  const y = 50 - radius * Math.cos((angle * Math.PI) / 180);
                  
                  return (
                    <div
                      key={i}
                      className="absolute bg-amber-600/50"
                      style={{
                        width: isMainMarker ? '3px' : '2px',
                        height: isMainMarker ? '10px' : '6px',
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                      }}
                    />
                  );
                })}
                
                {/* Hour hand */}
                <div 
                  className="absolute w-1.5 h-12 md:h-14 bg-amber-700 rounded-full animate-rewind-hour"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'center top',
                    transform: 'translateX(-50%)',
                  }}
                ></div>
                
                {/* Minute hand */}
                <div 
                  className="absolute w-1 h-16 md:h-20 bg-amber-600 rounded-full animate-rewind-minute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'center top',
                    transform: 'translateX(-50%)',
                  }}
                ></div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-amber-800 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-md"></div>
              </div>
            </div>

            {/* Rewind text */}
            <p className="text-2xl md:text-3xl text-amber-900 animate-rewind-line font-medium">
              {REWIND_LINES[currentLine]}
            </p>
          </div>
        )}

        {/* Form */}
        {!isRewinding && (
          <div className="animate-fade-in">
            
            {/* Small decorative element */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-8 h-px bg-amber-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
              <div className="w-8 h-px bg-amber-300"></div>
            </div>

            <div className="space-y-8">
              
              {/* Heading */}
              <div className="text-center space-y-3">
                <h1 className="text-3xl md:text-4xl font-semibold text-amber-950">
                  Tell me what happened.
                </h1>
                <p className="text-base text-amber-700/60">
                  A safe space to share your moment
                </p>
              </div>

              {/* Textarea Card */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-sm hover:border-amber-300/60 transition-all duration-300">
                <textarea
                  value={regret}
                  onChange={(e) => setRegret(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Describe the moment you wish you could change..."
                  className="w-full min-h-[280px] bg-transparent text-amber-900 placeholder:text-amber-600/40 focus:outline-none resize-none text-[15px] leading-relaxed"
                  autoFocus
                />
              </div>

              {/* Helper text */}
              <p className="text-sm text-amber-700/60 text-center italic">
                No one else will see this. Take your time.
              </p>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={!regret.trim()}
                  className="px-10 py-4 bg-amber-600 text-white rounded-lg text-sm tracking-wide transition-all duration-300 hover:bg-amber-700 hover:shadow-lg shadow-md hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-amber-600 disabled:hover:shadow-md"
                >
                  Begin Rewind
                </button>
              </div>

            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes rewind-hour {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(-1080deg); }
        }
        
        @keyframes rewind-minute {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(-2160deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes rewind-line {
          0% { opacity: 0; transform: translateY(20px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        
        .animate-rewind-hour {
          animation: rewind-hour 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        .animate-rewind-minute {
          animation: rewind-minute 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-rewind-line {
          animation: rewind-line 2.5s ease-in-out;
        }
      `}</style>
    </main>
  );
}