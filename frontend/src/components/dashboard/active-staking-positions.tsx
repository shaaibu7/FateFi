"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { StakingPosition } from "@/types";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

interface ActiveStakingPositionsProps {
  positions?: StakingPosition[];
}

export function ActiveStakingPositions({
  positions: propPositions,
}: ActiveStakingPositionsProps) {
  // Mock data - replace with real data from API
  const mockPositions: StakingPosition[] = [
    {
      id: "1",
      betId: "bet-001",
      principal: 1500,
      currentYield: 12.38,
      apy: 8.5,
      stakedAt: new Date("2024-11-01"),
      estimatedEndDate: new Date("2024-12-15"),
      protocol: "Aave V3",
      status: "staking",
    },
    {
      id: "2",
      betId: "bet-002",
      principal: 3200,
      currentYield: 31.45,
      apy: 8.5,
      stakedAt: new Date("2024-10-25"),
      estimatedEndDate: new Date("2024-12-10"),
      protocol: "Compound",
      status: "staking",
    },
    {
      id: "3",
      betId: "bet-003",
      principal: 850,
      currentYield: 5.67,
      apy: 8.5,
      stakedAt: new Date("2024-11-08"),
      estimatedEndDate: new Date("2024-12-20"),
      protocol: "Aave V3",
      status: "staking",
    },
    {
      id: "4",
      betId: "bet-004",
      principal: 5000,
      currentYield: 18.24,
      apy: 8.5,
      stakedAt: new Date("2024-11-12"),
      estimatedEndDate: new Date("2024-12-25"),
      protocol: "Yearn Finance",
      status: "staking",
    },
  ];

  const positions = propPositions || mockPositions;
  const [liveYields, setLiveYields] = useState<Record<string, number>>({});

  // Initialize live yields
  useEffect(() => {
    const initial: Record<string, number> = {};
    positions.forEach((pos) => {
      initial[pos.id] = pos.currentYield;
    });
    setLiveYields(initial);
  }, [positions]);

  // Simulate real-time yield accrual
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveYields((prev) => {
        const updated = { ...prev };
        positions.forEach((pos) => {
          const dailyYield = (pos.principal * pos.apy) / 365 / 100;
          const perSecondYield = dailyYield / 86400;
          updated[pos.id] =
            (updated[pos.id] || pos.currentYield) + perSecondYield;
        });
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [positions]);

  const getDaysStaked = (stakedAt: Date) => {
    return Math.floor(
      (Date.now() - stakedAt.getTime()) / (1000 * 60 * 60 * 24)
    );
  };

  const getDaysRemaining = (endDate: Date) => {
    return Math.max(
      0,
      Math.ceil((endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    );
  };

  const getProtocolColor = (protocol: string) => {
    const colors: Record<string, string> = {
      "Aave V3": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      Compound: "bg-green-500/20 text-green-300 border-green-500/30",
      "Yearn Finance": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    };
    return (
      colors[protocol] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
    );
  };

  if (positions.length === 0) {
    return (
      <Card className="bg-primary/60 backdrop-blur-sm border border-secondary/20">
        <CardContent className="p-12 text-center">
          <div className="text-white/40 text-lg mb-2">
            No active staking positions
          </div>
          <p className="text-white/60 text-sm">
            Place a bet to start earning yield automatically
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            Active Staking Positions
          </h2>
          <p className="text-white/60 text-sm">
            {positions.length} position{positions.length > 1 ? "s" : ""} earning
            yield
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {positions.map((position) => {
          const daysStaked = getDaysStaked(position.stakedAt);
          const daysRemaining = getDaysRemaining(position.estimatedEndDate);
          const currentYield = liveYields[position.id] || position.currentYield;
          const totalValue = position.principal + currentYield;
          const yieldPercent = (currentYield / position.principal) * 100;

          return (
            <div key={position.id} className="glass-card-hover p-6 group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getProtocolColor(position.protocol)}>
                      {position.protocol}
                    </Badge>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
                      Staking
                    </Badge>
                  </div>
                  <div className="text-white/50 text-xs">
                    Position #{position.id}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-secondary hover:text-secondary/80"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {/* Principal & Yield */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4">
                    <div className="text-white/50 text-xs mb-1">Principal</div>
                    <div className="text-white text-xl font-semibold">
                      ${position.principal.toLocaleString()}
                    </div>
                  </div>

                  <div className="glass-card p-4 border-green-500/30">
                    <div className="text-white/50 text-xs mb-1">
                      Current Yield
                    </div>
                    <div className="text-green-400 text-xl font-semibold tabular-nums">
                      ${currentYield.toFixed(4)}
                    </div>
                  </div>
                </div>

                {/* Total Value */}
                <div className="glass-card p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-white/50 text-sm">Total Value</div>
                    <div className="flex items-center gap-1 text-green-400 text-sm">
                      <ArrowUpRight className="w-3 h-3" />
                      <span>+{yieldPercent.toFixed(2)}%</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-secondary to-yellow-400 bg-clip-text text-transparent text-3xl font-bold">
                    ${totalValue.toFixed(2)}
                  </div>
                  <div className="mt-2 text-white/40 text-xs">
                    APY: {position.apy}%
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-white/50">
                      <Clock className="w-4 h-4" />
                      <span>Days Staked</span>
                    </div>
                    <span className="text-white font-medium">
                      {daysStaked} days
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-white/50">
                      <Calendar className="w-4 h-4" />
                      <span>Days Until Resolution</span>
                    </div>
                    <span className="text-secondary font-medium">
                      {daysRemaining} days
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-secondary to-green-400 transition-all duration-300"
                        style={{
                          width: `${
                            (daysStaked / (daysStaked + daysRemaining)) * 100
                          }%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-white/40">
                      <span>
                        Started {position.stakedAt.toLocaleDateString()}
                      </span>
                      <span>
                        Ends {position.estimatedEndDate.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Earnings Projection */}
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    <span className="text-white/50 text-xs">
                      Estimated Total at Resolution
                    </span>
                  </div>
                  <div className="text-white text-lg font-semibold">
                    $
                    {(
                      position.principal +
                      (position.principal *
                        position.apy *
                        (daysStaked + daysRemaining)) /
                        365 /
                        100
                    ).toFixed(2)}
                  </div>
                  <div className="text-green-400 text-xs mt-1">
                    +$
                    {(
                      (position.principal *
                        position.apy *
                        (daysStaked + daysRemaining)) /
                      365 /
                      100
                    ).toFixed(2)}{" "}
                    projected yield
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
