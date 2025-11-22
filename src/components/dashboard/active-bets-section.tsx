"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface ActiveBet {
  id: string;
  title: string;
  position: "YES" | "NO";
  amount: number;
  currentOdds: number;
  entryOdds: number;
  endsAt: string;
  category: string;
  currentValue: number;
  pnl: number;
}

export function ActiveBetsSection() {
  const activeBets: ActiveBet[] = [
    {
      id: "1",
      title: "Will MrBeast reach 300M YouTube subscribers by Dec 2024?",
      position: "YES",
      amount: 100,
      currentOdds: 72,
      entryOdds: 65,
      endsAt: "2024-12-31",
      category: "Creator Economy",
      currentValue: 110.77,
      pnl: 10.77,
    },
    {
      id: "2",
      title: "Will GTA 6 be delayed past 2025?",
      position: "NO",
      amount: 50,
      currentOdds: 35,
      entryOdds: 40,
      endsAt: "2025-01-15",
      category: "Gaming",
      currentValue: 56.52,
      pnl: 6.52,
    },
    {
      id: "3",
      title: "Will the next Pepe variant reach $100M market cap?",
      position: "YES",
      amount: 75,
      currentOdds: 48,
      entryOdds: 55,
      endsAt: "2024-11-30",
      category: "Crypto Memes",
      currentValue: 65.22,
      pnl: -9.78,
    },
  ];

  return (
    <Card className="bg-primary/60 backdrop-blur-xl border border-secondary/20 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-secondary mb-1">Active Bets</h2>
        <p className="text-white/60 text-sm">{activeBets.length} predictions</p>
      </div>

      <div className="space-y-3">
        {activeBets.map((bet) => {
          const isPositivePnl = bet.pnl > 0;
          const daysRemaining = Math.ceil(
            (new Date(bet.endsAt).getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24)
          );

          return (
            <div
              key={bet.id}
              className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-secondary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      className={
                        bet.position === "YES"
                          ? "bg-green-500/20 text-green-300 text-xs"
                          : "bg-red-500/20 text-red-300 text-xs"
                      }
                    >
                      {bet.position}
                    </Badge>
                    <span className="text-white/40 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {daysRemaining}d
                    </span>
                  </div>
                  <h3 className="text-white font-medium text-sm">
                    {bet.title}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="text-white/50 text-xs mb-1">Position</div>
                  <div className="text-white font-semibold text-sm">
                    {(bet.amount / 600).toFixed(3)} BNB
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-1">Value</div>
                  <div className="text-white font-semibold text-sm">
                    {(bet.currentValue / 600).toFixed(3)} BNB
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-1">P&L</div>
                  <div
                    className={`font-semibold text-sm ${
                      isPositivePnl ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isPositivePnl ? "+" : ""}
                    {(Math.abs(bet.pnl) / 600).toFixed(4)} BNB
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
