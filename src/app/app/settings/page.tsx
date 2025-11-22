"use client";

import { Header } from "@/components/header";
import { NotificationSettings } from "@/components/settings/notification-settings";
import { ProfileSettings } from "@/components/settings/profile-settings";
import { SecuritySettings } from "@/components/settings/security-settings";
import { WalletSettings } from "@/components/settings/wallet-settings";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Shield, User, Wallet } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<string>("profile");

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
          <p className="text-white/50">Manage your account</p>
        </div>

        <Card className="bg-primary/40 backdrop-blur-xl border border-secondary/20">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="border-b border-secondary/10 px-6">
              <TabsList className="bg-transparent h-auto p-0 space-x-8">
                <TabsTrigger
                  value="profile"
                  className="bg-transparent data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-secondary rounded-none px-0 pb-4 text-white/60 data-[state=active]:text-secondary"
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="wallet"
                  className="bg-transparent data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-secondary rounded-none px-0 pb-4 text-white/60 data-[state=active]:text-secondary"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Wallet
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="bg-transparent data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-secondary rounded-none px-0 pb-4 text-white/60 data-[state=active]:text-secondary"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="bg-transparent data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-secondary rounded-none px-0 pb-4 text-white/60 data-[state=active]:text-secondary"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Security
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6">
              <TabsContent value="profile" className="mt-0">
                <ProfileSettings />
              </TabsContent>

              <TabsContent value="wallet" className="mt-0">
                <WalletSettings />
              </TabsContent>

              <TabsContent value="notifications" className="mt-0">
                <NotificationSettings />
              </TabsContent>

              <TabsContent value="security" className="mt-0">
                <SecuritySettings />
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </main>
    </div>
  );
}
