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
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full space-y-16 animate-fade-in">
        {/* User's Regret */}
        <div className="space-y-4">
          <h2 className="text-sm font-sans text-muted tracking-wide uppercase">
            What you shared
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {regret}
          </p>
        </div>

        {/* Analysis */}
        {analysis && (
          <div className="space-y-12">
            {/* What Went Wrong */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                What went wrong
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                {analysis.whatWentWrong}
              </p>
            </div>

            {/* Lesson Learned */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                What you learned
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                {analysis.lessonLearned}
              </p>
            </div>

            {/* Better Future */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Moving forward
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                {analysis.betterFuture}
              </p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Link
            href="/rewind"
            className="px-8 py-4 bg-accent text-background rounded-sm font-sans text-sm tracking-wide transition-all duration-700 hover:bg-foreground hover:scale-[1.02] text-center"
          >
            Rewind Another Moment
          </Link>
          
          <Link
            href="/"
            className="px-8 py-4 border border-muted text-muted rounded-sm font-sans text-sm tracking-wide transition-all duration-700 hover:border-foreground hover:text-foreground text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
