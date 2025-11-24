import type { Metadata } from "next";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: "FateFi",
  description:
    "Access your personalized prediction dashboard, track your performance, and make new predictions.",
};
