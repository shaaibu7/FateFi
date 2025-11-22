// Market prediction types
export interface Market {
  id: string;
  title: string;
  description: string;
  category: string;
  endDate: Date;
  totalVolume: number;
  createdBy: string;
  status: "active" | "resolved" | "cancelled";
  outcomes: MarketOutcome[];
}

export interface MarketOutcome {
  id: string;
  marketId: string;
  title: string;
  probability: number;
  totalBets: number;
  isWinner?: boolean;
}

export interface Bet {
  id: string;
  userId: string;
  marketId: string;
  outcomeId: string;
  amount: number;
  probability: number;
  potential_payout: number;
  status: "pending" | "active" | "won" | "lost" | "cancelled";
  createdAt: Date;
  stakingPosition?: StakingPosition;
}

export interface StakingPosition {
  id: string;
  betId: string;
  principal: number;
  currentYield: number;
  apy: number;
  stakedAt: Date;
  estimatedEndDate: Date;
  protocol: string;
  status: "staking" | "completed" | "withdrawn";
}

export interface YieldHistory {
  id: string;
  stakingPositionId: string;
  amount: number;
  timestamp: Date;
  type: "accrual" | "withdrawal" | "completion";
}

export interface User {
  id: string;
  email?: string;
  wallet?: string;
  farcasterUsername?: string;
  totalBets: number;
  totalWinnings: number;
  totalLosses: number;
  winRate: number;
  reputation: number;
  createdAt: Date;
  totalStaked?: number;
  totalYieldEarned?: number;
}

// UI Component types
export interface MarketCardProps {
  market: Market;
  onBet?: (marketId: string, outcomeId: string) => void;
}

export interface BettingModalProps {
  isOpen: boolean;
  onClose: () => void;
  market: Market;
  outcome: MarketOutcome;
  onPlaceBet: (amount: number) => void;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Settings types
export interface NotificationSettings {
  email: boolean;
  push: boolean;
  betResolved: boolean;
  marketEnding: boolean;
  newMarkets: boolean;
}

export interface ProfileSettings {
  displayName: string;
  avatar?: string;
  bio?: string;
  isPublic: boolean;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  emailVerified: boolean;
  walletConnected: boolean;
}

export interface StakingSettings {
  autoStakeEnabled: boolean;
  preferredProtocol: string;
  minimumStakeAmount: number;
  autoCompound: boolean;
  notifyOnYield: boolean;
}
