import { Metadata } from "next";
import { BicepsFlexed } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Muscle AI",
  description: "Learn more about the Muscle AI mission and technology.",
};

const AboutPage = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto py-24 space-y-12 text-foreground">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full font-mono text-sm uppercase tracking-wide">
          <BicepsFlexed className="w-4 h-4" />
          About Muscle AI
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Empowering Your Fitness Journey with AI
        </h1>
        <p className="text-muted-foreground text-lg">
          At Muscle AI, we combine the power of artificial intelligence with fitness expertise to
          bring you highly personalized workout programs and diet plans — built just for you, in
          minutes.
        </p>
        <Button asChild size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/generate-program">Build Your Program</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Why Muscle AI?</h2>
          <p className="text-muted-foreground">
            Whether you&rsquo;re just starting out or you&rsquo;re a seasoned athlete, Muscle AI adapts to your
            current level, goals, and preferences. No more guesswork — just smart, data-driven
            guidance.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <p className="text-muted-foreground">
            Our AI model analyzes your inputs, lifestyle, goals, and metrics to deliver an
            actionable fitness and nutrition plan within minutes. You can always refine it or
            generate again with new parameters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
