import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full text-center space-y-12 animate-fade-in">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight">
            What if you could go back and understand?
          </h1>
          
          <p className="text-lg md:text-xl text-muted max-w-xl mx-auto">
            A quiet space to revisit a moment you wish you could change.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/rewind"
            className="px-8 py-4 bg-accent text-background rounded-sm font-sans text-sm tracking-wide transition-all duration-700 hover:bg-foreground hover:scale-[1.02] w-full sm:w-auto"
          >
            Rewind a Moment
          </Link>
          
          <Link
            href="/home"
            className="px-8 py-4 border border-muted text-muted rounded-sm font-sans text-sm tracking-wide transition-all duration-700 hover:border-foreground hover:text-foreground w-full sm:w-auto"
          >
            How this works
          </Link>
        </div>
      </div>
    </main>
  );
}
