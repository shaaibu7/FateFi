"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Percent, TrendingUp, Wallet } from "lucide-react";
import { useEffect, useState } from "react";

export function StakingOverview() {
  const [liveYield, setLiveYield] = useState(0);

  // Mock data - replace with real data from API
  const stakingData = {
    totalStaked: 21.5,
    totalYieldEarned: 0.425,
    activePositions: 8,
    currentAPY: 8.5,
    estimatedDailyYield: 0.005,
  };

  // Simulate live yield accrual
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveYield((prev) => {
        const increment = stakingData.estimatedDailyYield / 86400; // per second
        return prev + increment;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [stakingData.estimatedDailyYield]);

  const stats = [
    {
      icon: Wallet,
      label: "Total Staked",
      value: `${stakingData.totalStaked.toFixed(4)} BNB`,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      icon: TrendingUp,
      label: "Total Yield Earned",
      value: `${stakingData.totalYieldEarned.toFixed(4)} BNB`,
      subValue: `+${(
        (stakingData.totalYieldEarned / stakingData.totalStaked) *
        100
      ).toFixed(2)}%`,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      icon: Percent,
      label: "Current APY",
      value: `${stakingData.currentAPY}%`,
      subValue: "Compounded daily",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
    },
    {
      icon: DollarSign,
      label: "Est. Daily Yield",
      value: `${stakingData.estimatedDailyYield.toFixed(4)} BNB`,
      subValue: "Based on active stakes",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            Staking Overview
          </h2>
          <p className="text-white/60 text-sm">
            Your auto-staking positions and earnings
          </p>
        </div>
        <div className="text-right">
          <div className="text-white/60 text-xs mb-1">Active Positions</div>
          <div className="text-2xl font-bold text-secondary">
            {stakingData.activePositions}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="stats-card">
            <div className="flex items-start justify-between mb-3">
              <div
                className={`w-10 h-10 ${stat.bgColor} border ${stat.borderColor} rounded-lg flex items-center justify-center`}
              >
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <div className="text-white/50 text-xs mb-1">{stat.label}</div>
            <div className="text-white text-2xl font-bold mb-1">
              {stat.value}
            </div>
            {stat.subValue && (
              <div className={`text-xs ${stat.color}`}>{stat.subValue}</div>
            )}
          </div>
        ))}
      </div>

      {/* Live Yield Tracker */}
      <div className="glass-card p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              Live Yield Accrual
            </h3>
            <p className="text-white/50 text-sm">
              Earning in real-time across all positions
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Live</span>
          </div>
        </div>
        <div className="flex items-baseline gap-3">
          <div className="text-5xl font-bold bg-gradient-to-r from-secondary via-yellow-400 to-secondary bg-clip-text text-transparent tabular-nums">
            {(stakingData.totalYieldEarned + liveYield).toFixed(6)} BNB
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">
              +{liveYield.toFixed(6)} BNB today
            </span>
          </div>
        </div>

        {/* Progress bar showing daily progress */}
        <Card>
          <CardContent>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs text-white/60">
                <span>Today's yield progress</span>
                <span>
                  {(
                    (liveYield / stakingData.estimatedDailyYield) *
                    100
                  ).toFixed(1)}
                  %
                </span>
              </div>
              <div className="w-full h-2 bg-primary/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-secondary to-green-400 transition-all duration-1000"
                  style={{
                    width: `${Math.min(
                      (liveYield / stakingData.estimatedDailyYield) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-white/40">
                <span>0 BNB</span>
                <span>{stakingData.estimatedDailyYield.toFixed(4)} BNB</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-primary/40 border border-secondary/20">
            <CardContent className="p-4">
              <div className="text-white/60 text-xs mb-1">
                Average Position Size
              </div>
              <div className="text-white text-xl font-semibold">
                {(
                  stakingData.totalStaked / stakingData.activePositions
                ).toFixed(4)}{" "}
                BNB
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/40 border border-secondary/20">
            <CardContent className="p-4">
              <div className="text-white/60 text-xs mb-1">
                Projected Monthly Yield
              </div>
              <div className="text-secondary text-xl font-semibold">
                {(stakingData.estimatedDailyYield * 30).toFixed(4)} BNB
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
