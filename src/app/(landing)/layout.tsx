import type { Metadata } from "next";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: "FateFi",
  description:
    "FateFi is a prediction market platform that uses Account Abstraction to offer a seamless, gasless experience. No wallets or fees, just a fun way to speculate on GenZ trends and pop culture.",
};
