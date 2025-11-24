"use client";

import { Clock, Lock, Shield, TrendingUp, Users, Zap } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Lock,
      title: "Auto-Stake Everything",
      description:
        "Every prediction is automatically staked. No manual actions needed - just predict and earn.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Zap,
      title: "Gasless Transactions",
      description:
        "Zero gas fees forever. All transactions are sponsored so you keep 100% of your earnings.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: TrendingUp,
      title: "Real-time Yields",
      description:
        "Watch your earnings grow every second with live yield tracking on the dashboard.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Shield,
      title: "Secure & Audited",
      description:
        "Your funds are protected in audited smart contracts with industry-leading security.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Join thousands of predictors earning passive income while making predictions.",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Clock,
      title: "Instant Withdrawals",
      description:
        "Withdraw your principal and earned yields anytime. No lock-ups or waiting periods.",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <section className="py-20 px-4 bg-primary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need to Win
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Powerful features designed to maximize your prediction earnings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card-hover p-6 group">
              <div
                className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
