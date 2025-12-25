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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (regret.trim()) {
      // Store the regret
      sessionStorage.setItem("userRegret", regret);
      
      // Start rewind animation
      setIsRewinding(true);
      
      // Show each line sequentially
      let lineIndex = 0;
      const interval = setInterval(() => {
        lineIndex++;
        if (lineIndex < REWIND_LINES.length) {
          setCurrentLine(lineIndex);
        } else {
          clearInterval(interval);
          // Navigate after all lines shown
          setTimeout(() => {
            router.push("/reflection");
          }, 2500);
        }
      }, 2500);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full">
        {/* Rewind Animation */}
        {isRewinding && (
          <div className="text-center space-y-12 animate-fade-in">
            {/* Analog Clock */}
            <div className="flex justify-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                {/* Clock face */}
                <div className="absolute inset-0 rounded-full border-2 border-muted/30"></div>
                
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
                      className="absolute w-0.5 bg-muted/40"
                      style={{
                        height: isMainMarker ? '8px' : '4px',
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                      }}
                    />
                  );
                })}
                
                {/* Hour hand */}
                <div 
                  className="absolute w-1 h-10 md:h-12 bg-foreground/70 rounded-full animate-rewind-hour"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'center top',
                    transform: 'translateX(-50%)',
                  }}
                ></div>
                
                {/* Minute hand */}
                <div 
                  className="absolute w-0.5 h-14 md:h-16 bg-foreground/50 rounded-full animate-rewind-minute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'center top',
                    transform: 'translateX(-50%)',
                  }}
                ></div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-foreground rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
              </div>
            </div>

            {/* Text */}
            <p className="text-2xl md:text-3xl text-foreground animate-rewind-line">
              {REWIND_LINES[currentLine]}
            </p>
          </div>
        )}

        {/* Form */}
        {!isRewinding && (
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
              Tell me what happened.
            </h1>
          </div>

          {/* Textarea */}
          <div className="space-y-3">
            <textarea
              value={regret}
              onChange={(e) => setRegret(e.target.value)}
              placeholder="Describe the moment you wish you could change..."
              className="w-full min-h-[280px] px-6 py-5 bg-white/40 border border-muted/30 rounded-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/50 transition-all duration-700 resize-none"
              autoFocus
            />
            <p className="text-sm text-muted font-sans">
              No one else will see this. Take your time.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={!regret.trim()}
              className="px-8 py-4 bg-accent text-background rounded-sm font-sans text-sm tracking-wide transition-all duration-700 hover:bg-foreground hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-accent"
            >
              Begin Rewind
            </button>
          </div>
        </form>
        )}
      </div>
    </main>
  );
}
