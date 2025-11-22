"use client";

import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, UserPlus, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign In Socially",
      description:
        "Use Google, Twitter, or Farcaster. No seed phrases or wallet setup needed.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Browse Markets",
      description:
        "Find predictions on memes, creators, games, and culture that interest you.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Place Gasless Bets",
      description:
        "Bet with zero gas fees. Your funds auto-stake earning 8.5% APY instantly.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: TrendingUp,
      title: "Win Double Rewards",
      description:
        "Claim prediction winnings PLUS accumulated staking yield when resolved.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="how"
      className="py-24 px-4 bg-gradient-to-b from-primary/80 via-primary to-primary/90 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Getting Started is Simple
          </h2>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
            Four easy steps to start predicting and earning passive income
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative p-8 bg-primary/60 backdrop-blur-sm border border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-xl hover:shadow-secondary/10 group"
              >
                <div className="absolute -top-5 left-8">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="pt-10">
                  <div className="text-secondary text-sm font-bold mb-3">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
