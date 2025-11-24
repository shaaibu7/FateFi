"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Wallet } from "lucide-react";
import { createContext, useContext, useState, type ReactNode } from "react";
import { useAccount, useConnect } from "wagmi";

interface ConnectModalContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ConnectModalContext = createContext<ConnectModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export function useConnectModal() {
  return useContext(ConnectModalContext);
}

export function ConnectModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected } = useAccount();

  // Auto close when connected
  if (isConnected && isOpen) {
    setIsOpen(false);
  }

  return (
    <ConnectModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      <ConnectModal />
    </ConnectModalContext.Provider>
  );
}

function ConnectModal() {
  const { isOpen, setIsOpen } = useConnectModal();
  const { connectors, connect, isPending } = useConnect();

  const getConnectorIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("metamask")) return "🦊";
    if (lowerName.includes("walletconnect")) return "🔗";
    if (lowerName.includes("trust")) return "💙";
    if (lowerName.includes("binance")) return "⚡";
    return "👛";
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-primary border-secondary/20 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-secondary">
            Connect Wallet
          </DialogTitle>
          <DialogDescription className="text-white/60">
            Connect your wallet to start earning on BNB Chain
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {connectors.map((connector) => (
            <Button
              key={connector.uid}
              onClick={() => connect({ connector })}
              disabled={isPending}
              variant="outline"
              className="w-full justify-between h-16 bg-white/5 hover:bg-white/10 border-white/10 hover:border-secondary/50 text-white"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  {getConnectorIcon(connector.name)}
                </span>
                <span className="font-semibold">{connector.name}</span>
              </div>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </Button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
          <div className="flex items-start gap-3">
            <Wallet className="w-5 h-5 text-secondary mt-0.5" />
            <div className="text-sm">
              <p className="text-white/80 font-medium mb-1">
                New to BNB Chain?
              </p>
              <p className="text-white/50 text-xs">
                Get started by installing MetaMask or Trust Wallet browser
                extension
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
