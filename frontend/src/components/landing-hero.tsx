"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function LandingHero() {
  return (
    <section className="flex items-center justify-center py-20 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Earn APY While Predicting
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
          <span className="text-white">Predict Markets.</span>
          <br />
          <span className="bg-gradient-to-r from-secondary via-yellow-400 to-secondary bg-clip-text text-transparent">
            Earn While You Wait.
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/60 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          The only prediction platform with{" "}
          <span className="text-secondary font-semibold">
            automatic staking
          </span>
          .
          <br className="hidden sm:block" />
          Zero gas fees. Zero complexity. Just predictions and passive rewards.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <Link href="/app">
            <Button className="bg-gradient-to-r from-secondary to-yellow-500 hover:from-secondary/90 hover:to-yellow-500/90 text-primary px-12 py-8 text-lg font-bold rounded-xl shadow-2xl shadow-secondary/25 hover:shadow-secondary/40 hover:scale-105 transition-all duration-300">
              Start Earning Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link
            href="https://FateFi.gitbook.io/FateFi-docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="px-12 py-8 text-lg rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-white font-semibold backdrop-blur-sm group"
            >
              <span className="flex items-center gap-2">
                Read Docs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <div className="text-3xl mb-3">💰</div>
            <p className="text-white font-semibold mb-1">Auto-Staking</p>
            <p className="text-white/50 text-sm">High APY on all positions</p>
          </div>
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <div className="text-3xl mb-3">⚡</div>
            <p className="text-white font-semibold mb-1">Zero Fees</p>
            <p className="text-white/50 text-sm">Gasless transactions</p>
          </div>
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <div className="text-3xl mb-3">🎯</div>
            <p className="text-white font-semibold mb-1">Double Wins</p>
            <p className="text-white/50 text-sm">Winnings + rewards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
