"use client";

export function PortfolioOverview() {
  const portfolioData = {
    totalBalance: 2.15,
    totalProfit: 0.28,
    profitPercentage: 13.7,
    activeBets: 5,
    totalBets: 12,
    winRate: 58.3,
  };

  const isPositive = portfolioData.totalProfit > 0;

  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold text-secondary mb-6">Portfolio</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-1">
          <div className="text-white/50 text-xs">Balance</div>
          <div className="text-2xl font-bold text-white">
            {portfolioData.totalBalance.toFixed(3)} BNB
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-white/50 text-xs">Profit/Loss</div>
          <div
            className={`text-2xl font-bold ${
              isPositive ? "text-green-400" : "text-red-400"
            }`}
          >
            {isPositive ? "+" : ""}
            {Math.abs(portfolioData.totalProfit).toFixed(3)} BNB
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-white/50 text-xs">Active Bets</div>
          <div className="text-2xl font-bold text-white">
            {portfolioData.activeBets}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-white/50 text-xs">Win Rate</div>
          <div className="text-2xl font-bold text-white">
            {portfolioData.winRate}%
          </div>
        </div>
      </div>
    </div>
  );
}
