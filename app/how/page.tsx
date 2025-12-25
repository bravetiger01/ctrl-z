import Link from "next/link";

export default function HowPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      
      {/* Decorative background elements */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-amber-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
            <div className="w-8 h-px bg-amber-300"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-amber-950 mb-4">
            How this works
          </h1>
          <p className="text-lg text-amber-700/70 max-w-xl mx-auto">
            A simple process to help you understand and move forward
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          
          {/* Step 1 */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 shadow-sm hover:border-amber-300/60 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-200/50 flex items-center justify-center">
                <span className="text-amber-700 text-lg font-medium">1</span>
              </div>
              <div className="flex-1 space-y-3 pt-1">
                <h2 className="text-xl font-semibold text-amber-900">
                  Write what happened
                </h2>
                <p className="text-[15px] leading-relaxed text-amber-800/80">
                  Share the moment you wish you could change. There's no judgment here—just space to be honest about what you're carrying. Write as much or as little as you need.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 shadow-sm hover:border-orange-300/60 transition-all duration-300 sm:ml-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-200/50 flex items-center justify-center">
                <span className="text-orange-700 text-lg font-medium">2</span>
              </div>
              <div className="flex-1 space-y-3 pt-1">
                <h2 className="text-xl font-semibold text-amber-900">
                  Reflect on the moment
                </h2>
                <p className="text-[15px] leading-relaxed text-amber-800/80">
                  We help you see what went wrong, what you learned, and how this understanding changes things. Not to fix it, but to understand it. Sometimes that's enough.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 shadow-sm hover:border-amber-300/60 transition-all duration-300 sm:ml-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-300/50 flex items-center justify-center">
                <span className="text-amber-800 text-lg font-medium">3</span>
              </div>
              <div className="flex-1 space-y-3 pt-1">
                <h2 className="text-xl font-semibold text-amber-900">
                  Move forward gently
                </h2>
                <p className="text-[15px] leading-relaxed text-amber-800/80">
                  You don't need to resolve everything right now. Understanding is the first step. You can revisit this moment again, or simply carry this clarity with you.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
        </div>

        {/* Privacy & Trust */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/40 mb-12">
          <h3 className="text-lg font-medium text-amber-900 mb-4 text-center">
            Your privacy matters
          </h3>
          <div className="space-y-3 text-sm text-amber-800/70 leading-relaxed">
            <p className="flex items-start gap-3">
              <span className="text-amber-500 mt-0.5">•</span>
              <span>Nothing you write is stored permanently. Your words stay in your browser session only.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-amber-500 mt-0.5">•</span>
              <span>We use AI to help you reflect, but your regret isn't saved or used for training.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-amber-500 mt-0.5">•</span>
              <span>This is a safe, anonymous space. No accounts, no tracking, no judgment.</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <p className="text-amber-700/70 italic">
            Ready when you are.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/rewind"
              className="w-full sm:w-auto px-10 py-4 bg-amber-600 text-white rounded-lg text-sm tracking-wide transition-all duration-300 hover:bg-amber-700 hover:shadow-lg shadow-md hover:scale-[1.02]"
            >
              Rewind a Moment
            </Link>
            
            <Link
              href="/"
              className="w-full sm:w-auto px-10 py-4 bg-white/60 backdrop-blur-sm border border-amber-300/60 text-amber-800 rounded-lg text-sm tracking-wide transition-all duration-300 hover:bg-white/80 hover:border-amber-400 shadow-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
