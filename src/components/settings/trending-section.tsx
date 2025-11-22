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
    <section id="trending" className="py-16 px-4 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <Flame className="w-8 h-8 text-orange-400" />
          <h2 className="text-3xl font-bold text-white">
            Trending Now
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingTopics.map((topic, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 cursor-pointer"
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
