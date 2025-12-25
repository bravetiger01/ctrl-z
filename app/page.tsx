import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden bg-background">

      {/* ─────────────────────────────────────────────
          Option A: Soft radial gradient (very subtle)
         ───────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(0, 0, 0, 0.2),
              transparent 100%
            )
          `,
        }}
      />

      {/* ─────────────────────────────────────────────
          Option B: Faint timeline / rewind line
         ───────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
      >
        <div className="mx-auto w-[80%] h-[2px] bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
      </div>

      {/* ─────────────────────────────────────────────
          Content
         ───────────────────────────────────────────── */}
      <div className="max-w-2xl w-full text-center space-y-12 relative z-10">

        {/* Hero */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight">
            What if you could go back and understand?
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-xl mx-auto">
            A quiet space to revisit a moment you wish you could change.
          </p>
        </div>

        {/* Soft context hint */}
        <p className="text-muted/80 tracking-widest uppercase text-xs">
          Write → Reflect → Let go
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/rewind"
            className="px-8 py-4 bg-foreground text-background rounded-sm font-sans text-sm tracking-wide transition-all duration-500 hover:opacity-90 hover:scale-[1.02] w-full sm:w-auto"
          >
            Rewind a Moment
          </Link>

          <Link
            href="/how"
            className="px-8 py-4 border border-muted text-muted rounded-sm font-sans text-sm tracking-wide transition-all duration-500 hover:border-foreground hover:text-foreground w-full sm:w-auto"
          >
            How this works
          </Link>
        </div>

      </div>
      {/* Footer trust signal */}
      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted/60 tracking-wide">
        Private. Anonymous. Nothing is stored.
      </p>

    </main>
  );
}
