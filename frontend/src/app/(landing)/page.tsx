"use client";
import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/how-it-works";
import { LandingHeader } from "@/components/landing-header";
import { LandingHero } from "@/components/landing-hero";
import { StatsSection } from "@/components/stats-section";
import { TrendingSection } from "@/components/trending-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <LandingHeader />
      <main>
        <LandingHero />
        <StatsSection />
        <FeaturesSection />
        <HowItWorks />
        <TrendingSection />
        <CTASection />
      </main>
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-sm">© 2025 FateFi</p>
        </div>
      </footer>
    </div>
  );
}
