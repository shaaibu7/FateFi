"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Users, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">
              Gasless • Social • On Base
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Bet on Culture
            </span>
            <br />
            <span className="text-white">No Barriers</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Predict meme trends, creator milestones, and pop culture moments.
            Bet gaslessly and join the culture economy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              View Markets
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-12">
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <Zap className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Gasless</h3>
              <p className="text-white/60 text-sm">
                Zero gas fees on all predictions
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <Users className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Easy Access</h3>
              <p className="text-white/60 text-sm">
                Simple and intuitive interface
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <Sparkles className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">GenZ Markets</h3>
              <p className="text-white/60 text-sm">
                Memes, creators, and culture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
