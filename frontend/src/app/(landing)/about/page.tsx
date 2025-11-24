"use client";
import { LandingHeader } from "@/components/landing-header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary">
      <LandingHeader />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            About <span className="text-secondary">FateFi</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            The future of social predictions - gasless, seamless, and fun.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Our Mission
            </h2>
            <p className="text-white/70 leading-relaxed">
              FateFi democratizes prediction markets by removing barriers like
              gas fees and complex wallet setups. We believe everyone should be
              able to participate in the excitement of predicting future events,
              from pop culture trends to sports outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">
              How It Works
            </h2>
            <p className="text-white/70 leading-relaxed">
              Using cutting-edge Account Abstraction technology, we've
              eliminated the need for traditional wallets and gas fees. Simply
              sign up with your email or social account and start making
              predictions immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Built on Celo Chain
            </h2>
            <p className="text-white/70 leading-relaxed">
              FateFi is built on Celo Chain (Celo Chain), a fast,
              low-cost blockchain with massive adoption and deep liquidity. Connect
              with MetaMask, Trust Wallet, or Binance Wallet to start earning.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
