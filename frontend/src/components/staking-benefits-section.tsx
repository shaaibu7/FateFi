"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Wallet, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function StakingBenefitsSection() {
  const [currentAPY, setCurrentAPY] = useState(8.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAPY((prev) => {
        const variation = (Math.random() - 0.5) * 0.3;
        return Math.max(7, Math.min(12, prev + variation));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Auto-Staking Rewards",
      description:
        "Your predictions automatically earn yield while waiting for resolution. No extra steps needed.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      icon: Wallet,
      title: "Maximize Returns",
      description:
        "Earn passive income on your prediction capital. Get both prediction winnings AND staking rewards.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Zap,
      title: "Instant & Automatic",
      description:
        "Stake happens automatically when you place a bet. Withdraw anytime with your accrued yield.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description:
        "Your funds are secured in audited smart contracts. Track your yield in real-time on-chain.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Ambient background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E13] via-[#0D1117] to-[#0A0E13]" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-[120px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block mb-8">
            <div className="glass-card px-6 py-3">
              <span className="text-secondary font-semibold text-sm">
                🚀 OUR UNIQUE ADVANTAGE
              </span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Why Choose FateFi?
            </span>
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We're not just another prediction platform. Your capital actively
            earns yield while you wait for market resolution—completely
            automatically.
          </p>
        </div>

        {/* APY Highlight - More prominent */}
        <div className="max-w-2xl mx-auto mb-24">
          <div className="relative glass-card p-12">
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/20">
              Live Rate
            </div>
            <div className="text-center">
              <div className="text-white/50 text-base font-medium mb-4">
                Current Annual Percentage Yield
              </div>
              <div className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-secondary via-yellow-400 to-secondary bg-clip-text text-transparent mb-6 tabular-nums">
                {currentAPY.toFixed(2)}%
              </div>
              <div className="flex items-center justify-center gap-2 text-green-400 text-base">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">
                  Earning automatically on all positions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card-hover p-8 group">
              <div
                className={`w-16 h-16 ${benefit.bgColor} border ${benefit.borderColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-white font-bold text-2xl mb-4">
                {benefit.title}
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison - More visual */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            FateFi vs Traditional Platforms
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-red-500/5 to-red-500/10 border-2 border-red-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-500" />
              <CardContent className="p-8">
                <div className="text-red-400 font-bold mb-6 text-xl flex items-center gap-2">
                  <span className="text-2xl">❌</span>
                  Traditional Platforms
                </div>
                <ul className="space-y-4 text-white/70 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Capital sits idle until market resolves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Zero earnings during waiting period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>High opportunity cost of locked funds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Only prediction outcome determines profit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-2 border-green-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-green-500" />
              <CardContent className="p-8">
                <div className="text-green-400 font-bold mb-6 text-xl flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  FateFi Platform
                </div>
                <ul className="space-y-4 text-white/70 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>
                      Capital earns {currentAPY.toFixed(1)}% APY automatically
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Passive income accrues daily while waiting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Maximum capital efficiency—no idle funds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Double profit: predictions + staking rewards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
