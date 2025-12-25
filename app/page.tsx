import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">

      {/* Decorative elements */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle timeline decoration */}
      <div aria-hidden className="absolute top-1/2 left-0 right-0 pointer-events-none flex items-center justify-center">
        <div className="w-[70%] flex items-center gap-3 opacity-20">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl w-full text-center space-y-12 relative z-10">

        {/* Small decorative element at top */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-px bg-amber-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
          <div className="w-8 h-px bg-amber-300"></div>
        </div>

        {/* Hero */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-amber-950 leading-tight tracking-tight">
            What if you could go back<br />and understand?
          </h1>

          <p className="text-lg md:text-xl text-amber-700/70 max-w-xl mx-auto leading-relaxed">
            A quiet space to revisit a moment you wish you could change.
          </p>
        </div>

        {/* Process cards - subtle visual guide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 pb-4">
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-amber-200/40 hover:border-amber-300/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-amber-200/50 flex items-center justify-center mx-auto mb-3">
              <span className="text-amber-700 text-sm font-medium">1</span>
            </div>
            <h3 className="text-sm font-medium text-amber-900 tracking-wide mb-2">Write</h3>
            <p className="text-xs text-amber-700/70 leading-relaxed">Share what happened</p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-orange-200/40 hover:border-orange-300/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-orange-200/50 flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-700 text-sm font-medium">2</span>
            </div>
            <h3 className="text-sm font-medium text-amber-900 tracking-wide mb-2">Reflect</h3>
            <p className="text-xs text-amber-700/70 leading-relaxed">Understand the moment</p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-amber-200/40 hover:border-amber-300/60 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-amber-300/50 flex items-center justify-center mx-auto mb-3">
              <span className="text-amber-800 text-sm font-medium">3</span>
            </div>
            <h3 className="text-sm font-medium text-amber-900 tracking-wide mb-2">Let go</h3>
            <p className="text-xs text-amber-700/70 leading-relaxed">Move forward gently</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/rewind"
            className="w-full sm:w-auto px-10 py-4 bg-amber-600 text-white rounded-lg text-sm tracking-wide transition-all duration-300 hover:bg-amber-700 hover:shadow-lg shadow-md hover:scale-[1.02]"
          >
            Rewind a Moment
          </Link>

          <Link
            href="/how"
            className="w-full sm:w-auto px-10 py-4 bg-white/60 backdrop-blur-sm border border-amber-300/60 text-amber-800 rounded-lg text-sm tracking-wide transition-all duration-300 hover:bg-white/80 hover:border-amber-400 shadow-sm"
          >
            How this works
          </Link>
        </div>

      </div>

      {/* Footer trust signal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-amber-400/60"></div>
          <div className="w-1 h-1 rounded-full bg-amber-400/60"></div>
          <div className="w-1 h-1 rounded-full bg-amber-400/60"></div>
        </div>
        <p className="text-xs text-amber-700/60 tracking-wide">
          Private. Anonymous. Nothing is stored.
        </p>
      </div>

    </main>
  );
}