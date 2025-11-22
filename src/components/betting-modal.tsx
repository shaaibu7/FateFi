"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { DollarSign, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Market } from "./market-feed";

interface BettingModalProps {
  market: Market;
  position: "yes" | "no";
  onClose: () => void;
}

export function BettingModal({ market, position, onClose }: BettingModalProps) {
  const [amount, setAmount] = useState<number>(0.1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const price = position === "yes" ? market.yesPrice : market.noPrice;
  const potentialReturn = amount / price;
  const potentialProfit = potentialReturn - amount;

  // Calculate staking rewards
  const daysUntilEnd = Math.ceil(
    (market.endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );
  const apy = 8.5;
  const dailyRate = apy / 365 / 100;
  const estimatedYield = amount * dailyRate * daysUntilEnd;
  const totalReturn = potentialReturn + estimatedYield;

  const handlePlaceBet = async () => {
    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success(`Bet placed successfully!`, {
      description: `${position.toUpperCase()} for ${amount} BNB on ${market.title.slice(
        0,
        50
      )}...`,
    });

    setIsProcessing(false);
    onClose();
  };

  const quickAmounts = [0.05, 0.1, 0.25, 0.5];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 backdrop-blur-xl border border-white/20 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Place Your Bet</DialogTitle>
          <DialogDescription className="text-white/60">
            {market.title}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60">Position</span>
              <span
                className={`font-bold text-lg ${
                  position === "yes" ? "text-green-400" : "text-red-400"
                }`}
              >
                {position.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60">Current Price</span>
              <span className="font-semibold">{(price * 100).toFixed(0)}%</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="amount" className="text-white mb-2 block">
                Bet Amount
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="pl-10 bg-white/5 border-white/20 text-white text-lg"
                  min={0.01}
                  max={100}
                  step={0.01}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {quickAmounts.map((qa) => (
                <Button
                  key={qa}
                  onClick={() => setAmount(qa)}
                  variant="outline"
                  className={`border-white/20 hover:bg-purple-500/20 ${
                    amount === qa ? "bg-purple-500/20 border-purple-500" : ""
                  }`}
                >
                  {qa} BNB
                </Button>
              ))}
            </div>

            <div className="space-y-2">
              <Label htmlFor="slider" className="text-white/60 text-sm">
                Adjust amount
              </Label>
              <Slider
                id="slider"
                value={[amount]}
                onValueChange={(values) => setAmount(values[0] as number)}
                min={0.01}
                max={10}
                step={0.01}
                className="py-4"
              />
            </div>
          </div>

          <div className="space-y-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">You Bet</span>
              <span className="font-semibold">{amount.toFixed(4)} BNB</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Potential Return</span>
              <span className="font-semibold text-green-400">
                {potentialReturn.toFixed(4)} BNB
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Potential Profit
              </span>
              <span className="font-bold text-lg text-green-400">
                +{potentialProfit.toFixed(4)} BNB
              </span>
            </div>
          </div>

          {/* Staking Information */}
          <div className="space-y-3 p-4 bg-secondary/10 border border-secondary/30 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold text-white">
                  Auto-Staking Bonus
                </span>
              </div>
              <span className="text-secondary text-xs font-medium">
                {apy}% APY
              </span>
            </div>
            <div className="text-white/60 text-xs mb-3">
              Your bet will automatically earn yield while waiting for
              resolution ({daysUntilEnd} days)
            </div>
            <div className="flex items-center justify-between text-sm border-t border-white/10 pt-3">
              <span className="text-white/60">Estimated Staking Yield</span>
              <span className="font-semibold text-green-400">
                +{estimatedYield.toFixed(6)} BNB
              </span>
            </div>
            <div className="flex items-center justify-between font-bold">
              <span className="text-white">Total Potential Return</span>
              <span className="text-secondary text-lg">
                {totalReturn.toFixed(4)} BNB
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-white/60 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
            <Zap className="w-4 h-4 text-blue-400" />
            <span>This transaction is gasless - no fees!</span>
          </div>

          <div className="flex space-x-3">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-white/20 hover:bg-white/5"
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button
              onClick={handlePlaceBet}
              className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </>
              ) : (
                `Bet ${amount} BNB on ${position.toUpperCase()}`
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
