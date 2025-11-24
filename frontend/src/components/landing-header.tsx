"use client";

import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-primary/80 border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Image src="/logo.png" alt="FateFi Logo" width={32} height={32} />
              
            </div>
            <span className="text-xl font-bold text-secondary">FateFi</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#features"
              className="text-white/60 hover:text-secondary transition-colors"
            >
              Features
            </a>
            <a
              href="/#how"
              className="text-white/60 hover:text-secondary transition-colors"
            >
              How It Works
            </a>
            <a
              href="/about"
              className="text-white/60 hover:text-secondary transition-colors"
            >
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/app">
              <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                Launch App
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
