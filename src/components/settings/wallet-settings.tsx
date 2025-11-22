"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useConnectModal } from "@/components/wallet/connect-modal";
import { Copy, ExternalLink, Plus, Wallet } from "lucide-react";
import { useState } from "react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { bscTestnet } from "wagmi/chains";

function formatAddress(address: string) {
  return `${address.slice(0, 8)}...${address.slice(-6)}`;
}

export function WalletSettings() {
  const { address, isConnected, chain } = useAccount();
  const { data: balance } = useBalance({ address });
  const { disconnect } = useDisconnect();
  const { setIsOpen } = useConnectModal();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getExplorerUrl = () => {
    if (!address) return "";
    if (chain?.id === bscTestnet.id) {
      return `https://testnet.bscscan.com/address/${address}`;
    }
    return `https://bscscan.com/address/${address}`;
  };

  if (!isConnected || !address) {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            Wallet Management
          </h3>
          <p className="text-white/60 text-sm mb-6">
            Connect your wallet to BNB Chain to start earning
          </p>

          <div className="text-center py-12">
            <Wallet className="w-12 h-12 text-white/40 mx-auto mb-4" />
            <div className="text-white/60 mb-2">No wallet connected</div>
            <p className="text-white/40 text-sm mb-4">
              Connect a wallet to start making predictions on BNB Chain
            </p>
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-secondary hover:bg-secondary/90 text-primary font-semibold"
            >
              <Plus className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-secondary mb-4">
          Connected Wallet
        </h3>
        <Card className="bg-white/5 border border-secondary/20 p-6">
          <div className="space-y-4">
            <div>
              <div className="text-xs text-white/50 mb-2">Address</div>
              <div className="flex items-center justify-between">
                <code className="text-white font-mono text-sm">
                  {formatAddress(address)}
                </code>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="text-white/60 hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(getExplorerUrl(), "_blank")}
                    className="text-white/60 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {balance && (
              <div>
                <div className="text-xs text-white/50 mb-2">Balance</div>
                <div className="text-2xl font-bold text-secondary">
                  {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
                </div>
              </div>
            )}

            {chain && (
              <div>
                <div className="text-xs text-white/50 mb-2">Network</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-white">{chain.name}</span>
                </div>
              </div>
            )}

            <Button
              onClick={() => disconnect()}
              variant="destructive"
              className="w-full mt-4"
            >
              Disconnect Wallet
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
