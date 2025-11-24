"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown, Copy, ExternalLink, LogOut } from "lucide-react";
import { useState } from "react";
import { useAccount, useBalance, useDisconnect, useEnsName } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { useConnectModal } from "./connect-modal";

function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function formatBalance(balance: string) {
  const num = parseFloat(balance);
  if (num < 0.0001) return "< 0.0001";
  return num.toFixed(4);
}

export function WalletButton() {
  const { address, isConnected, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: balance } = useBalance({ address });
  const { setIsOpen } = useConnectModal();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDisconnect = () => {
    disconnect();
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
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-secondary hover:bg-secondary/90 text-primary font-semibold"
      >
        Connect Wallet
      </Button>
    );
  }

  const displayName = ensName || formatAddress(address);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-secondary/10 hover:bg-secondary/20 border-secondary/30 text-white font-semibold"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="hidden sm:inline">{displayName}</span>
            <span className="sm:hidden">{formatAddress(address)}</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 bg-primary border-secondary/20"
      >
        <div className="px-3 py-2">
          <div className="text-xs text-white/50 mb-1">Connected with</div>
          <div className="text-sm font-medium text-white">{displayName}</div>
        </div>

        {balance && (
          <div className="px-3 py-2">
            <div className="text-xs text-white/50 mb-1">Balance</div>
            <div className="text-sm font-semibold text-secondary">
              {formatBalance(balance.formatted)} {balance.symbol}
            </div>
          </div>
        )}

        {chain && (
          <div className="px-3 py-2">
            <div className="text-xs text-white/50 mb-1">Network</div>
            <div className="text-sm text-white flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              {chain.name}
            </div>
          </div>
        )}

        <DropdownMenuSeparator className="bg-white/10" />

        <DropdownMenuItem
          onClick={handleCopy}
          className="cursor-pointer text-white hover:bg-white/5"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Address
            </>
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => window.open(getExplorerUrl(), "_blank")}
          className="cursor-pointer text-white hover:bg-white/5"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View on Explorer
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-white/10" />

        <DropdownMenuItem
          onClick={handleDisconnect}
          className="cursor-pointer text-red-400 hover:bg-red-500/10"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
