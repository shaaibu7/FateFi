"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Lock,
  TrendingUp,
  Wallet,
} from "lucide-react";

export function HowStakingWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Place Your Bet",
      description:
        "Choose a market and place your prediction. Your funds are ready to work for you.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Lock,
      title: "Auto-Stake Activated",
      description:
        "Your bet amount is automatically staked in secure DeFi protocols. No manual action needed.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      icon: TrendingUp,
      title: "Earn Yield Daily",
      description:
        "Your capital generates yield every day while waiting for the market to resolve.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      icon: CheckCircle2,
      title: "Claim Total Returns",
      description:
        "When resolved, get your prediction winnings PLUS all accumulated staking rewards.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
    },
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] to-[#0A0E13]" />
      <div className="absolute top-1/4 right-20 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              How Auto-Staking Works
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Simple, automatic, and profitable. Your predictions earn yield from
            day one.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card
                className={`bg-primary/60 backdrop-blur-sm border ${step.borderColor} hover:border-secondary/60 transition-all duration-300 group h-full`}
              >
                <CardContent className="p-6">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-sm border-2 border-primary">
                    {index + 1}
                  </div>

                  <div
                    className={`w-14 h-14 ${step.bgColor} border ${step.borderColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-secondary/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <Card className="bg-gradient-to-br from-primary/80 to-primary/40 border border-secondary/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-white mb-8 text-center">
              Example Timeline
            </h3>

            <div className="space-y-6">
              {/* Day 0 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                  <div className="w-0.5 h-full bg-secondary/30 mt-2" />
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-white font-semibold">Day 0</span>
                  </div>
                  <p className="text-white/60 text-sm">
                    You bet $1,000 on "Will token X reach $10?" - Instantly
                    staked at 8.5% APY
                  </p>
                  <div className="mt-2 text-xs text-white/40">
                    Balance: $1,000.00
                  </div>
                </div>
              </div>

              {/* Day 15 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <div className="w-0.5 h-full bg-secondary/30 mt-2" />
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span className="text-white font-semibold">Day 15</span>
                  </div>
                  <p className="text-white/60 text-sm">
                    Halfway to resolution - Yield continues to accumulate
                  </p>
                  <div className="mt-2 text-xs text-green-400">
                    Balance: $1,003.49 (+$3.49 yield)
                  </div>
                </div>
              </div>

              {/* Day 30 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full ring-4 ring-secondary/20" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span className="text-white font-semibold">
                      Day 30 - Resolved
                    </span>
                  </div>
                  <p className="text-white/60 text-sm mb-3">
                    Market resolves in your favor! You win your prediction AND
                    get all staking rewards.
                  </p>
                  <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">
                        Original Prediction Winning
                      </span>
                      <span className="text-white font-medium">$1,800.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">
                        Staking Rewards (30 days)
                      </span>
                      <span className="text-green-400 font-medium">+$6.99</span>
                    </div>
                    <div className="border-t border-white/10 pt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-white">Total Payout</span>
                        <span className="text-secondary text-lg">
                          $1,806.99
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-primary/40 border border-secondary/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="text-white font-semibold mb-2">Zero Effort</h4>
              <p className="text-white/60 text-sm">
                Everything happens automatically. Just bet and earn.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/40 border border-secondary/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="text-white font-semibold mb-2">Fully Secured</h4>
              <p className="text-white/60 text-sm">
                Your funds are protected in audited smart contracts.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/40 border border-secondary/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="text-white font-semibold mb-2">
                Real-time Tracking
              </h4>
              <p className="text-white/60 text-sm">
                Watch your yield grow live in your dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
