"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Calendar, DollarSign, TrendingUp } from "lucide-react";
import { useState } from "react";

export function YieldCalculator() {
  const [betAmount, setBetAmount] = useState(100);
  const [days, setDays] = useState(30);
  const baseAPY = 8.5;

  const calculateYield = () => {
    const dailyRate = baseAPY / 365 / 100;
    const yieldAmount = betAmount * dailyRate * days;
    const totalReturn = betAmount + yieldAmount;
    return {
      yieldAmount: yieldAmount.toFixed(2),
      totalReturn: totalReturn.toFixed(2),
      percentGain: ((yieldAmount / betAmount) * 100).toFixed(2),
    };
  };

  const results = calculateYield();

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E13] via-[#0D1117] to-[#0A0E13]" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Calculate Your Earnings
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            See how much you can earn while your predictions are pending
          </p>
        </div>

        <div className="glass-card p-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                Yield Estimator
              </h3>
              <div className="text-secondary text-sm font-medium">
                APY: {baseAPY}%
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Controls */}
              <div className="space-y-6">
                {/* Bet Amount */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-secondary" />
                      Bet Amount
                    </label>
                    <span className="text-secondary font-semibold">
                      ${betAmount}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={betAmount}
                    onChange={(e) =>
                      setBetAmount(Math.max(1, Number(e.target.value)))
                    }
                    className="bg-primary/80 border-secondary/30 text-white"
                    min="1"
                  />
                  <Slider
                    value={[betAmount]}
                    onValueChange={(value) => setBetAmount(value[0])}
                    min={10}
                    max={10000}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-white/40">
                    <span>$10</span>
                    <span>$10,000</span>
                  </div>
                </div>

                {/* Days */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      Waiting Period
                    </label>
                    <span className="text-secondary font-semibold">
                      {days} days
                    </span>
                  </div>
                  <Slider
                    value={[days]}
                    onValueChange={(value) => setDays(value[0])}
                    min={1}
                    max={365}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-white/40">
                    <span>1 day</span>
                    <span>1 year</span>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="space-y-2">
                  <label className="text-white/60 text-xs">Quick Periods</label>
                  <div className="flex gap-2">
                    {[7, 14, 30, 90].map((d) => (
                      <Button
                        key={d}
                        variant="outline"
                        size="sm"
                        onClick={() => setDays(d)}
                        className={`flex-1 ${
                          days === d
                            ? "bg-secondary/20 border-secondary text-secondary"
                            : "border-secondary/30 text-white/60 hover:border-secondary/60 hover:text-white"
                        }`}
                      >
                        {d}d
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary/40 rounded-xl p-6">
                  <div className="text-white/60 text-sm mb-2">
                    Estimated Yield
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-4 flex items-baseline gap-2">
                    ${results.yieldAmount}
                    <span className="text-lg text-green-400">
                      +{results.percentGain}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>Earned over {days} days</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/80 border border-secondary/20 rounded-lg p-4">
                    <div className="text-white/60 text-xs mb-1">Your Bet</div>
                    <div className="text-white text-xl font-semibold">
                      ${betAmount}
                    </div>
                  </div>
                  <div className="bg-primary/80 border border-secondary/20 rounded-lg p-4">
                    <div className="text-white/60 text-xs mb-1">
                      Total Return
                    </div>
                    <div className="text-secondary text-xl font-semibold">
                      ${results.totalReturn}
                    </div>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="bg-primary/40 border border-secondary/10 rounded-lg p-4 space-y-2">
                  <div className="text-white/60 text-xs font-medium mb-3">
                    Return Breakdown
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Principal</span>
                    <span className="text-white font-medium">
                      ${betAmount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Staking Yield</span>
                    <span className="text-green-400 font-medium">
                      +${results.yieldAmount}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-2 mt-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-white">Total</span>
                      <span className="text-secondary">
                        ${results.totalReturn}
                      </span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                  Start Earning
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>

          {/* Disclaimer */}
          <div className="text-center text-white/40 text-xs">
            * Estimates based on current APY of {baseAPY}%. Actual yields may
            vary based on market conditions.
          </div>
        </div>
      </div>
    </section>
  );
}
