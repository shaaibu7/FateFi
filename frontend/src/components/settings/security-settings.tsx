"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, Key, Shield, Smartphone } from "lucide-react";

export function SecuritySettings() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Account Protection",
      description: "Your account is protected by Privy",
      status: "active",
      action: null,
    },
    {
      icon: Smartphone,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security",
      status: "not-setup",
      action: "Enable 2FA",
    },
    {
      icon: Key,
      title: "Recovery Method",
      description: "Set up account recovery options",
      status: "not-setup",
      action: "Setup Recovery",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-secondary mb-2">
          Security & Privacy
        </h3>
        <p className="text-white/60 text-sm mb-6">
          Manage your account security and privacy settings
        </p>

        <div className="space-y-4">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 p-4 hover:border-secondary/30 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-white font-medium">
                          {feature.title}
                        </h4>
                        <Badge
                          variant="outline"
                          className={
                            feature.status === "active"
                              ? "border-green-500/30 bg-green-500/10 text-green-300"
                              : "border-yellow-500/30 bg-yellow-500/10 text-yellow-300"
                          }
                        >
                          {feature.status === "active" ? "Active" : "Not Setup"}
                        </Badge>
                      </div>
                      <p className="text-white/60 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {feature.action && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 hover:bg-white/5 text-white ml-4"
                    >
                      {feature.action}
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
          <div>
            <div className="text-white font-semibold text-sm mb-1">
              Security Recommendation
            </div>
            <div className="text-white/60 text-xs mb-3">
              Enable 2FA to add an extra layer of security to your account
            </div>
            <Button
              size="sm"
              className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border border-yellow-500/30"
            >
              Enable Now
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary mb-4">
          Privacy Settings
        </h3>

        <div className="space-y-4">
          <Card className="bg-white/5 border border-white/10 p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-white font-medium mb-1">
                  Profile Visibility
                </h4>
                <p className="text-white/60 text-sm">
                  Control who can see your betting activity
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white ml-4"
              >
                Manage
              </Button>
            </div>
          </Card>

          <Card className="bg-white/5 border border-white/10 p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-white font-medium mb-1">Data Export</h4>
                <p className="text-white/60 text-sm">
                  Download all your data from FateFi
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white ml-4"
              >
                Export
              </Button>
            </div>
          </Card>

          <Card className="bg-red-500/10 border border-red-500/20 p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-red-400 font-medium mb-1">
                  Delete Account
                </h4>
                <p className="text-white/60 text-sm">
                  Permanently delete your account and all data
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-red-500/30 hover:bg-red-500/10 text-red-400 ml-4"
              >
                Delete
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
