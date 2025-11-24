"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

interface BetHistory {
  id: string;
  title: string;
  position: "YES" | "NO";
  amount: number;
  result: "won" | "lost" | "pending";
  pnl: number;
  date: string;
  category: string;
}

export function BettingHistory() {
  const allBets: BetHistory[] = [
    {
      id: "1",
      title: "Will MrBeast reach 300M subs?",
      position: "YES",
      amount: 100,
      result: "pending",
      pnl: 10.77,
      date: "2024-11-15",
      category: "Creator",
    },
    {
      id: "2",
      title: "Will Hawk Tuah hit 10M followers?",
      position: "YES",
      amount: 80,
      result: "won",
      pnl: 45.2,
      date: "2024-11-05",
      category: "Creator",
    },
    {
      id: "3",
      title: "Will Skibidi Toilet get Netflix deal?",
      position: "YES",
      amount: 60,
      result: "lost",
      pnl: -60,
      date: "2024-11-01",
      category: "Culture",
    },
    {
      id: "4",
      title: "Will new meme coin reach $50M?",
      position: "YES",
      amount: 40,
      result: "won",
      pnl: 22.5,
      date: "2024-10-28",
      category: "Crypto",
    },
  ];

  const getStatusIcon = (result: string) => {
    switch (result) {
      case "won":
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case "lost":
        return <XCircle className="w-4 h-4 text-red-400" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-400" />;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-primary/60 backdrop-blur-xl border border-secondary/20 p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-secondary mb-1">
          Recent Activity
        </h2>
        <p className="text-white/60 text-sm">Your betting history</p>
      </div>

      <div className="space-y-3">
        {allBets.map((bet) => (
          <div
            key={bet.id}
            className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    className={
                      bet.position === "YES"
                        ? "bg-green-500/20 text-green-300 text-xs"
                        : "bg-red-500/20 text-red-300 text-xs"
                    }
                  >
                    {bet.position}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(bet.result)}
                    <span className="text-white/60 text-xs capitalize">
                      {bet.result}
                    </span>
                  </div>
                </div>
                <h3 className="text-white text-sm font-medium">{bet.title}</h3>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs">
                <div>
                  <span className="text-white/50">Amount: </span>
                  <span className="text-white font-medium">
                    {(bet.amount / 600).toFixed(3)} BNB
                  </span>
                </div>
                <div>
                  <span className="text-white/50">P&L: </span>
                  <span
                    className={`font-semibold ${
                      bet.pnl > 0
                        ? "text-green-400"
                        : bet.pnl < 0
                        ? "text-red-400"
                        : "text-white/60"
                    }`}
                  >
                    {bet.pnl > 0 ? "+" : ""}
                    {(bet.pnl / 600).toFixed(4)} BNB
                  </span>
                </div>
              </div>
              <span className="text-white/40 text-xs">{bet.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
