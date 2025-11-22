"use client";

import { Award, DollarSign, TrendingUp, Users } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Predictors",
      color: "text-blue-400",
    },
    {
      icon: DollarSign,
      value: "42,500 BNB",
      label: "Total Staked",
      color: "text-green-400",
    },
    {
      icon: TrendingUp,
      value: "3,200 BNB",
      label: "Yield Earned",
      color: "text-yellow-400",
    },
    {
      icon: Award,
      value: "8.5%",
      label: "Current APY",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="py-16 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
