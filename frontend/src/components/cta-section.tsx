"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-12 text-center relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-purple-500/10 opacity-50" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Start Earning Today
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Earn While You Predict?
            </h2>

            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users already earning passive income on their
              predictions. Zero fees. Automatic staking. Real rewards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app">
                <Button className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-6 text-base font-semibold rounded-lg">
                  Launch App
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/app/dashboard">
                <Button
                  variant="outline"
                  className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-base font-semibold rounded-lg"
                >
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
