'use client'

import { Card } from '@/components/ui/card'
import { TrendingUp, Flame, Sparkles } from 'lucide-react'

export function TrendingSection() {
  const trendingTopics = [
    { name: 'MrBeast Challenges', change: '+42%', volume: '$2.1M' },
    { name: 'Pepe Variants', change: '+38%', volume: '$1.8M' },
    { name: 'Game Delays', change: '+25%', volume: '$980K' },
    { name: 'Viral TikTokers', change: '+19%', volume: '$750K' },
  ]

  return (
    <section id="trending" className="py-32 px-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 to-[#0A0E13]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center space-x-3 mb-12">
          <Flame className="w-8 h-8 text-orange-400" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Trending Now
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTopics.map((topic, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-green-400 text-sm font-semibold">
                  {topic.change}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-2">{topic.name}</h3>
              <div className="flex items-center text-white/60 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>{topic.volume} volume</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
