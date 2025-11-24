import { Web3Provider } from "@/components/providers/web3-provider";
import { Toaster } from "@/components/ui/sonner";
import { ConnectModalProvider } from "@/components/wallet/connect-modal";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FateFi - Celo Chain Predictions Platform",
  description:
    "Gasless social predictions platform on Celo Chain with auto-staking rewards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
      >
        <Web3Provider>
          <ConnectModalProvider>{children}</ConnectModalProvider>
        </Web3Provider>
        <Toaster />
      </body>
    </html>
  );
}
