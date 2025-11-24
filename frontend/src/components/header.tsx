"use client";

import { WalletButton } from "@/components/wallet/wallet-button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-primary/90 border-b border-secondary/20 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <Image src="/logo.png" alt="FateFi Logo" width={32} height={32} />
            </div>
            <span className="text-xl font-bold text-secondary">FateFi</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/app"
              className="text-white/60 hover:text-secondary transition-colors"
            >
              Markets
            </Link>
            <Link
              href="/app/dashboard"
              className="text-white/60 hover:text-secondary transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/app/settings"
              className="text-white/60 hover:text-secondary transition-colors"
            >
              Settings
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <WalletButton />
          </div>
        </div>
      </div>
    </header>
  );
}
