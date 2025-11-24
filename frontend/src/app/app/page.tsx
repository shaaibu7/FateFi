"use client";
import { Header } from "@/components/header";
import { MarketFeed } from "@/components/market-feed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function AppHome() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main className="flex flex-col h-screen pt-16">
        <div className="px-6 py-4 border-b border-secondary/20">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="bg-primary/50 border border-secondary/20">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-secondary data-[state=active]:text-primary text-white/70"
              >
                All Markets
              </TabsTrigger>
              <TabsTrigger
                value="trending"
                className="data-[state=active]:bg-secondary data-[state=active]:text-primary text-white/70"
              >
                Trending
              </TabsTrigger>
              <TabsTrigger
                value="crypto"
                className="data-[state=active]:bg-secondary data-[state=active]:text-primary text-white/70"
              >
                Crypto
              </TabsTrigger>
              <TabsTrigger
                value="sports"
                className="data-[state=active]:bg-secondary data-[state=active]:text-primary text-white/70"
              >
                Sports
              </TabsTrigger>
              <TabsTrigger
                value="politics"
                className="data-[state=active]:bg-secondary data-[state=active]:text-primary text-white/70"
              >
                Politics
              </TabsTrigger>
              <TabsTrigger
                value="culture"
                className="data-[state=active]:bg-secondary data-[state=active]:text-primary text-white/70"
              >
                Culture
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} className="h-full">
            <TabsContent value="all" className="h-full mt-0">
              <MarketFeed />
            </TabsContent>
            <TabsContent value="trending" className="h-full mt-0">
              <MarketFeed />
            </TabsContent>
            <TabsContent value="crypto" className="h-full mt-0">
              <MarketFeed />
            </TabsContent>
            <TabsContent value="sports" className="h-full mt-0">
              <MarketFeed />
            </TabsContent>
            <TabsContent value="politics" className="h-full mt-0">
              <MarketFeed />
            </TabsContent>
            <TabsContent value="culture" className="h-full mt-0">
              <MarketFeed />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
