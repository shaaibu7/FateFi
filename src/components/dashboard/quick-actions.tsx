"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Share2, TrendingUp, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";

export function QuickActions() {
  const router = useRouter();

  const actions = [
    {
      icon: Plus,
      label: "New Bet",
      description: "Browse markets",
      onClick: () => router.push("/app"),
      color: "bg-secondary hover:bg-secondary/90",
    },
    {
      icon: Wallet,
      label: "Add Funds",
      description: "Deposit money",
      onClick: () => router.push("/app/settings"),
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: TrendingUp,
      label: "Trending",
      description: "Hot markets",
      onClick: () => router.push("/app"),
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      icon: Share2,
      label: "Invite Friends",
      description: "Get $10 bonus",
      onClick: () => {},
      color: "bg-pink-500 hover:bg-pink-600",
    },
  ];

  return (
    <Card className="bg-primary/60 backdrop-blur-xl border border-secondary/20 p-6">
      <h2 className="text-xl font-bold text-secondary mb-6">Quick Actions</h2>

      <div className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={index}
              onClick={action.onClick}
              className={`w-full justify-start ${action.color} transition-all h-auto py-4 text-primary font-semibold`}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-primary">
                    {action.label}
                  </div>
                  <div className="text-xs text-primary/80">
                    {action.description}
                  </div>
                </div>
              </div>
            </Button>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-lg border border-secondary/30">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">💡</div>
          <div>
            <div className="text-secondary font-semibold text-sm mb-1">
              Pro Tip
            </div>
            <div className="text-white/60 text-xs">
              Diversify your bets across different categories to minimize risk
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
