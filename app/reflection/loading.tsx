

const REWIND_LINES = [
  "Let's go back...",
  "What were you carrying?",
  "What did you need to hear?",
];

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <div className="text-center space-y-12 animate-fade-in">

        {/* Analog Clock */}
        <div className="flex justify-center">
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <div className="absolute inset-0 rounded-full border-2 border-amber-300/40 bg-white/30 backdrop-blur-sm shadow-lg"></div>

            {[...Array(12)].map((_, i) => {
              const angle = i * 30;
              const radius = i % 3 === 0 ? 56 : 60;
              const x = 50 + radius * Math.sin((angle * Math.PI) / 180);
              const y = 50 - radius * Math.cos((angle * Math.PI) / 180);

              return (
                <div
                  key={i}
                  className="absolute bg-amber-600/50"
                  style={{
                    width: i % 3 === 0 ? '3px' : '2px',
                    height: i % 3 === 0 ? '10px' : '6px',
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  }}
                />
              );
            })}

            <div className="absolute w-1.5 h-14 bg-amber-700 rounded-full animate-rewind-hour left-1/2 top-1/2 -translate-x-1/2 origin-top"></div>
            <div className="absolute w-1 h-20 bg-amber-600 rounded-full animate-rewind-minute left-1/2 top-1/2 -translate-x-1/2 origin-top"></div>
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-amber-800 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        {/* Static text (no timers) */}
        <p className="text-2xl md:text-3xl text-amber-900 font-medium">
          Reflecting...
        </p>
      </div>

      
    </main>
  );
}
