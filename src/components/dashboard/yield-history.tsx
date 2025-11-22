"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { YieldHistory as YieldHistoryType } from "@/types";
import { ArrowDownRight, CheckCircle2, TrendingUp } from "lucide-react";

export function YieldHistory() {
  // Mock data - replace with real data from API
  const mockHistory: YieldHistoryType[] = [
    {
      id: "1",
      stakingPositionId: "pos-001",
      amount: 12.38,
      timestamp: new Date("2024-11-18T10:30:00"),
      type: "accrual",
    },
    {
      id: "2",
      stakingPositionId: "pos-002",
      amount: 8.45,
      timestamp: new Date("2024-11-17T14:20:00"),
      type: "accrual",
    },
    {
      id: "3",
      stakingPositionId: "pos-003",
      amount: 125.5,
      timestamp: new Date("2024-11-16T09:15:00"),
      type: "completion",
    },
    {
      id: "4",
      stakingPositionId: "pos-001",
      amount: 45.2,
      timestamp: new Date("2024-11-15T16:45:00"),
      type: "withdrawal",
    },
    {
      id: "5",
      stakingPositionId: "pos-004",
      amount: 18.24,
      timestamp: new Date("2024-11-14T11:30:00"),
      type: "accrual",
    },
    {
      id: "6",
      stakingPositionId: "pos-002",
      amount: 31.45,
      timestamp: new Date("2024-11-13T08:20:00"),
      type: "accrual",
    },
    {
      id: "7",
      stakingPositionId: "pos-005",
      amount: 89.75,
      timestamp: new Date("2024-11-12T15:10:00"),
      type: "completion",
    },
  ];

  const getTypeIcon = (type: YieldHistoryType["type"]) => {
    switch (type) {
      case "accrual":
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case "withdrawal":
        return <ArrowDownRight className="w-4 h-4 text-blue-400" />;
      case "completion":
        return <CheckCircle2 className="w-4 h-4 text-secondary" />;
    }
  };

  const getTypeLabel = (type: YieldHistoryType["type"]) => {
    switch (type) {
      case "accrual":
        return "Yield Accrued";
      case "withdrawal":
        return "Withdrawn";
      case "completion":
        return "Position Completed";
    }
  };

  const getTypeColor = (type: YieldHistoryType["type"]) => {
    switch (type) {
      case "accrual":
        return "text-green-400";
      case "withdrawal":
        return "text-blue-400";
      case "completion":
        return "text-secondary";
    }
  };

  const filterByType = (type?: YieldHistoryType["type"]) => {
    return type ? mockHistory.filter((h) => h.type === type) : mockHistory;
  };

  const getTotalByType = (type?: YieldHistoryType["type"]) => {
    return filterByType(type).reduce((sum, h) => sum + h.amount, 0);
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const HistoryList = ({ items }: { items: YieldHistoryType[] }) => (
    <div className="space-y-3">
      {items.length === 0 ? (
        <div className="text-center py-12 text-white/40">
          No yield history found
        </div>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="bg-primary/40 border border-secondary/10 rounded-lg p-4 hover:border-secondary/30 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/60 border border-secondary/20 rounded-lg flex items-center justify-center group-hover:border-secondary/40 transition-all">
                  {getTypeIcon(item.type)}
                </div>
                <div>
                  <div className="text-white font-medium mb-1">
                    {getTypeLabel(item.type)}
                  </div>
                  <div className="text-white/60 text-xs">
                    {formatDate(item.timestamp)} at {formatTime(item.timestamp)}
                  </div>
                  <div className="text-white/40 text-xs mt-1">
                    Position #{item.stakingPositionId}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`text-xl font-semibold ${getTypeColor(item.type)}`}
                >
                  {item.type === "withdrawal" ? "-" : "+"}$
                  {item.amount.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Yield History</h2>
          <p className="text-white/60 text-sm">
            Track all your staking earnings and transactions
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-white/60 text-xs">Total Accrued</span>
            </div>
            <div className="text-green-400 text-2xl font-bold">
              ${getTotalByType("accrual").toFixed(2)}
            </div>
            <div className="text-white/40 text-xs mt-1">
              {filterByType("accrual").length} events
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span className="text-white/60 text-xs">From Completions</span>
            </div>
            <div className="text-secondary text-2xl font-bold">
              ${getTotalByType("completion").toFixed(2)}
            </div>
            <div className="text-white/40 text-xs mt-1">
              {filterByType("completion").length} positions
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <ArrowDownRight className="w-4 h-4 text-blue-400" />
              <span className="text-white/60 text-xs">Withdrawn</span>
            </div>
            <div className="text-blue-400 text-2xl font-bold">
              ${getTotalByType("withdrawal").toFixed(2)}
            </div>
            <div className="text-white/40 text-xs mt-1">
              {filterByType("withdrawal").length} transactions
            </div>
          </CardContent>
        </Card>
      </div>

      {/* History Tabs */}
      <Card className="bg-primary/60 backdrop-blur-sm border border-secondary/20">
        <CardHeader>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-primary/60">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="accrual">Accrued</TabsTrigger>
              <TabsTrigger value="completion">Completed</TabsTrigger>
              <TabsTrigger value="withdrawal">Withdrawn</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <HistoryList items={mockHistory} />
            </TabsContent>

            <TabsContent value="accrual" className="mt-4">
              <HistoryList items={filterByType("accrual")} />
            </TabsContent>

            <TabsContent value="completion" className="mt-4">
              <HistoryList items={filterByType("completion")} />
            </TabsContent>

            <TabsContent value="withdrawal" className="mt-4">
              <HistoryList items={filterByType("withdrawal")} />
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>

      {/* Monthly Summary */}
      <Card className="bg-primary/40 border border-secondary/20">
        <CardHeader>
          <h3 className="text-lg font-semibold text-white">
            This Month Summary
          </h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Net Yield Earned</span>
              <span className="text-green-400 text-lg font-semibold">
                +$
                {(
                  getTotalByType("accrual") +
                  getTotalByType("completion") -
                  getTotalByType("withdrawal")
                ).toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Total Events</span>
              <span className="text-white font-medium">
                {mockHistory.length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Avg. Daily Yield</span>
              <span className="text-secondary font-medium">
                $
                {(
                  (getTotalByType("accrual") + getTotalByType("completion")) /
                  30
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
