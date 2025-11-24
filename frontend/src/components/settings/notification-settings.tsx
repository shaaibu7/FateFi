"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, Mail, MessageSquare, TrendingUp } from "lucide-react";
import { useState } from "react";

interface NotificationPreference {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  enabled: boolean;
}

export function NotificationSettings() {
  const [preferences, setPreferences] = useState<NotificationPreference[]>([
    {
      id: "bet-updates",
      icon: TrendingUp,
      label: "Bet Updates",
      description: "Get notified when your bets win or lose",
      enabled: true,
    },
    {
      id: "market-alerts",
      icon: Bell,
      label: "Market Alerts",
      description: "Notifications about trending markets and price changes",
      enabled: true,
    },
    {
      id: "email-digest",
      icon: Mail,
      label: "Email Digest",
      description: "Weekly summary of your betting activity",
      enabled: false,
    },
    {
      id: "social-updates",
      icon: MessageSquare,
      label: "Social Updates",
      description: "Updates from markets you follow",
      enabled: true,
    },
  ]);

  const togglePreference = (id: string) => {
    setPreferences((prev) =>
      prev.map((pref) =>
        pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
      )
    );
  };

  const handleSave = () => {
    console.log("Saving notification preferences:", preferences);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-secondary mb-2">
          Notification Preferences
        </h3>
        <p className="text-white/60 text-sm mb-6">
          Choose what notifications you want to receive
        </p>

        <div className="space-y-4">
          {preferences.map((pref) => {
            const Icon = pref.icon;
            return (
              <Card
                key={pref.id}
                className="bg-white/5 border border-white/10 p-4 hover:border-secondary/30 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <Label
                        htmlFor={pref.id}
                        className="text-white font-medium cursor-pointer"
                      >
                        {pref.label}
                      </Label>
                      <p className="text-white/60 text-sm mt-1">
                        {pref.description}
                      </p>
                    </div>
                  </div>
                  <Switch
                    id={pref.id}
                    checked={pref.enabled}
                    onCheckedChange={() => togglePreference(pref.id)}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">💬</div>
          <div>
            <div className="text-white font-semibold text-sm mb-1">
              Push Notifications
            </div>
            <div className="text-white/60 text-xs">
              Enable push notifications in your browser for real-time updates
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <Button
          variant="outline"
          className="border-white/20 hover:bg-white/5 text-white"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          className="bg-secondary hover:bg-secondary/90 text-primary font-semibold"
        >
          Save Preferences
        </Button>
      </div>
    </div>
  );
}
