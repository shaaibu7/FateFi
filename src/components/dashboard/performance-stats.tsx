"use client";

import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Trophy } from "lucide-react";

export function PerformanceStats() {
  const stats = [
    {
      icon: Trophy,
      label: "Total Wins",
      value: "7",
      subtext: "out of 12 bets",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
    },
    {
      icon: Target,
      label: "Accuracy Rate",
      value: "58.3%",
      subtext: "above average",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
    },
    {
      icon: TrendingUp,
      label: "Best Streak",
      value: "5",
      subtext: "consecutive wins",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
    },
  ];

  return (
    <>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className={`bg-primary/60 backdrop-blur-xl border ${stat.borderColor} p-6`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 ${stat.bgColor} rounded-lg`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-white/60 text-sm">{stat.label}</div>
              <div className={`text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-white/40 text-xs">{stat.subtext}</div>
            </div>
          </Card>
        );
      })}
    </>
  );
}
