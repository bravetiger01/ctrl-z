"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Analysis {
  whatWentWrong: string;
  lessonLearned: string;
  betterFuture: string;
}

export default function ReflectionPage() {
  const [regret, setRegret] = useState<string>("");
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const storedRegret = sessionStorage.getItem("userRegret");
    
    if (!storedRegret) {
      router.push("/rewind");
      return;
    }

    setRegret(storedRegret);
    analyzeRegret(storedRegret);
  }, [router]);

  const analyzeRegret = async (regretText: string) => {
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ regret: regretText }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze");
      }

      const data = await response.json();
      setAnalysis(data);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-16">
        <div className="text-center animate-fade-in">
          <p className="text-xl text-muted">Reflecting...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
          <p className="text-xl text-foreground">{error}</p>
          <Link
            href="/rewind"
            className="inline-block px-8 py-4 border border-muted text-muted rounded-sm font-sans text-sm tracking-wide transition-all duration-700 hover:border-foreground hover:text-foreground"
          >
            Try Again
          </Link>
        </div>
      </main>
    );
  }


    return (
  <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-sm tracking-[0.3em] uppercase text-amber-600/70 mb-3">
            Your Reflection
          </h1>
          <div className="w-12 h-px bg-amber-300 mx-auto"></div>
        </div>

        {/* What you shared - Card */}
        <div className="mb-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-amber-200/50">
          <p className="text-xs tracking-[0.25em] uppercase text-amber-600/60 mb-4">
            What you shared
          </p>
          <p className="text-lg italic text-amber-900/70 leading-relaxed">
            "{regret}"
          </p>
        </div>

        {/* Analysis sections */}
        {analysis && (
          <div className="space-y-6 mb-16">
            
            {/* What went wrong */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-amber-200/40 hover:border-amber-300/60 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-200/50 flex items-center justify-center mt-0.5">
                  <span className="text-amber-700 text-sm font-medium">1</span>
                </div>
                <div className="flex-1 space-y-3 pt-1">
                  <h3 className="text-base font-medium text-amber-900 tracking-wide">
                    What went wrong
                  </h3>
                  <p className="text-[15px] leading-relaxed text-amber-800/80">
                    {analysis.whatWentWrong}
                  </p>
                </div>
              </div>
            </div>

            {/* What you learned */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-amber-200/40 hover:border-amber-300/60 transition-all duration-300 sm:ml-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-200/50 flex items-center justify-center mt-0.5">
                  <span className="text-orange-700 text-sm font-medium">2</span>
                </div>
                <div className="flex-1 space-y-3 pt-1">
                  <h3 className="text-base font-medium text-amber-900 tracking-wide">
                    What you learned
                  </h3>
                  <p className="text-[15px] leading-relaxed text-amber-800/80">
                    {analysis.lessonLearned}
                  </p>
                </div>
              </div>
            </div>

            {/* Moving forward */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-amber-200/40 hover:border-amber-300/60 transition-all duration-300 sm:ml-16">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-300/50 flex items-center justify-center mt-0.5">
                  <span className="text-amber-800 text-sm font-medium">3</span>
                </div>
                <div className="flex-1 space-y-3 pt-1">
                  <h3 className="text-base font-medium text-amber-900 tracking-wide">
                    Moving forward
                  </h3>
                  <p className="text-[15px] leading-relaxed text-amber-800/80">
                    {analysis.betterFuture}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Gentle divider */}
        <div className="flex items-center justify-center my-12">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
        </div>

        {/* Gentle closure */}
        <p className="text-sm text-center text-amber-700/60 mb-12 italic">
          You don't need to resolve this right now.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/rewind"
            className="w-full sm:w-auto px-10 py-3.5 bg-amber-600 text-white rounded-lg text-sm tracking-wide transition-all duration-300 hover:bg-amber-700 hover:shadow-md shadow-sm"
          >
            Rewind Another Moment
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-10 py-3.5 bg-white/60 backdrop-blur-sm border border-amber-300/60 text-amber-800 rounded-lg text-sm tracking-wide transition-all duration-300 hover:bg-white/80 hover:border-amber-400 shadow-sm"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
    );
}
