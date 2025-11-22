"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { BettingModal } from "./betting-modal";
import type { Market } from "./market-feed";

interface MarketCardProps {
  market: Market;
}

const CATEGORY_COLORS: Record<string, string> = {
  meme: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  creator: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  gaming: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  culture: "bg-orange-500/20 text-orange-300 border-orange-500/30",
};

export function MarketCard({ market }: MarketCardProps) {
  const [showBettingModal, setShowBettingModal] = useState<boolean>(false);
  const [selectedPosition, setSelectedPosition] = useState<"yes" | "no" | null>(
    null
  );

  const handleBet = (position: "yes" | "no") => {
    setSelectedPosition(position);
    setShowBettingModal(true);
  };

  const daysUntilEnd = Math.ceil(
    (market.endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  // Calculate estimated yield based on days until end
  const estimatedYield = (amount: number) => {
    const apy = 8.5;
    const dailyRate = apy / 365 / 100;
    return amount * dailyRate * daysUntilEnd;
  };

  return (
    <>
      <div className="glass-card-hover h-full">
        <div className="space-y-3 pb-3 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Badge className={CATEGORY_COLORS[market.category]}>
                {market.category}
              </Badge>
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-[10px] px-1.5 py-0.5">
                <TrendingUp className="w-2.5 h-2.5 mr-0.5" />
                8.5% APY
              </Badge>
            </div>
            <div className="flex items-center space-x-1 text-white/40 text-xs">
              <Calendar className="w-3 h-3" />
              <span>{daysUntilEnd}d left</span>
            </div>
          </div>
          <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">
            {market.title}
          </h3>
          <p className="text-white/60 text-xs line-clamp-2">
            {market.description}
          </p>
        </div>

        <div className="space-y-3 pb-3 px-6 flex-1">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleBet("yes")}
              className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-all group"
            >
              <div className="text-green-400 font-bold text-xl mb-1">
                {(market.yesPrice * 100).toFixed(0)}%
              </div>
              <div className="text-white/60 text-xs group-hover:text-white transition-colors">
                YES
              </div>
            </button>
            <button
              onClick={() => handleBet("no")}
              className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-all group"
            >
              <div className="text-red-400 font-bold text-xl mb-1">
                {(market.noPrice * 100).toFixed(0)}%
              </div>
              <div className="text-white/60 text-xs group-hover:text-white transition-colors">
                NO
              </div>
            </button>
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1 text-white/60">
              <TrendingUp className="w-3 h-3" />
              <span>{(market.volume / 1000).toFixed(1)}k BNB</span>
            </div>
            <div className="flex items-center space-x-1 text-white/60">
              <Users className="w-3 h-3" />
              <span>{market.participants}</span>
            </div>
          </div>

          {/* Staking Info Banner */}
          <div className="glass-card p-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/80 text-[10px] font-medium">
                  Auto-earning yield
                </span>
              </div>
              <span className="text-secondary text-[10px] font-semibold">
                +{estimatedYield(1).toFixed(4)} BNB per 1 BNB
              </span>
            </div>
          </div>
        </div>
      </div>

      {showBettingModal && selectedPosition && (
        <BettingModal
          market={market}
          position={selectedPosition}
          onClose={() => {
            setShowBettingModal(false);
            setSelectedPosition(null);
          }}
        />
      )}
    </>
  );
}
