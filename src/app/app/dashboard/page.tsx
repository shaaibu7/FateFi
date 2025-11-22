"use client";

import { ActiveBetsSection } from "@/components/dashboard/active-bets-section";
import { BettingHistory } from "@/components/dashboard/betting-history";
import { PortfolioOverview } from "@/components/dashboard/portfolio-overview";
import { Header } from "@/components/header";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-white/50">Your predictions overview</p>
        </div>

        <PortfolioOverview />
        <ActiveBetsSection />
        <BettingHistory />
      </main>
    </div>
  );
}
