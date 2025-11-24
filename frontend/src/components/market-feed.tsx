"use client";

import { useState } from "react";
import { MarketCard } from "./market-card";

export interface Market {
  id: string;
  title: string;
  description: string;
  category: "meme" | "creator" | "gaming" | "culture";
  endDate: Date;
  yesPrice: number;
  noPrice: number;
  volume: number;
  participants: number;
  imageUrl?: string;
}

const MOCK_MARKETS: Market[] = [
  {
    id: "1",
    title: 'Will "Hawk Tuah Girl" hit 10M TikTok followers by June?',
    description: "Popular viral creator currently at 7.2M followers",
    category: "creator",
    endDate: new Date("2025-06-01"),
    yesPrice: 0.62,
    noPrice: 0.38,
    volume: 45000,
    participants: 1234,
  },
  {
    id: "2",
    title: "Will the next Pepe variant reach $100M market cap?",
    description: "Betting on the next major frog meme coin launch",
    category: "meme",
    endDate: new Date("2025-05-15"),
    yesPrice: 0.45,
    noPrice: 0.55,
    volume: 78000,
    participants: 2156,
  },
  {
    id: "3",
    title: "Will GTA 6 delay past 2025 release date?",
    description: "Rockstar announced Fall 2025, will they make it?",
    category: "gaming",
    endDate: new Date("2025-12-31"),
    yesPrice: 0.58,
    noPrice: 0.42,
    volume: 120000,
    participants: 3421,
  },
  {
    id: "4",
    title: "Will MrBeast reach 300M YouTube subs this year?",
    description: "Currently at 270M subscribers with strong growth",
    category: "creator",
    endDate: new Date("2025-12-31"),
    yesPrice: 0.71,
    noPrice: 0.29,
    volume: 95000,
    participants: 2890,
  },
  {
    id: "5",
    title: 'Will "Skibidi Toilet" get a Netflix series?',
    description: "Viral YouTube series rumored for streaming adaptation",
    category: "culture",
    endDate: new Date("2025-08-01"),
    yesPrice: 0.34,
    noPrice: 0.66,
    volume: 52000,
    participants: 1678,
  },
  {
    id: "6",
    title: "Will Drake and Kendrick drop another diss track?",
    description: "Hip-hop beef continues into 2025",
    category: "culture",
    endDate: new Date("2025-07-01"),
    yesPrice: 0.49,
    noPrice: 0.51,
    volume: 67000,
    participants: 2234,
  },
];

export function MarketFeed() {
  const [selectedTab, setSelectedTab] = useState<string>("trending");

  const sortedMarkets = [...MOCK_MARKETS].sort((a, b) => {
    if (selectedTab === "trending") {
      return b.volume - a.volume;
    } else if (selectedTab === "new") {
      return b.endDate.getTime() - a.endDate.getTime();
    } else {
      return b.participants - a.participants;
    }
  });

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedMarkets.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      </div>
    </div>
  );
}
