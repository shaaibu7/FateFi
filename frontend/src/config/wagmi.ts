import { createConfig, http } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

// Create connectors array based on available configuration
const connectors = [];

// Always add injected connector (MetaMask, Trust Wallet, etc.)
connectors.push(injected());

// Add WalletConnect only if we have a valid project ID
if (projectId && projectId.length > 10 && !projectId.includes("YOUR_PROJECT")) {
  try {
    connectors.push(
      walletConnect({
        projectId,
        showQrModal: true,
      })
    );
  } catch (error) {
    console.warn("WalletConnect initialization failed:", error);
  }
}

export const config = createConfig({
  chains: [bsc, bscTestnet],
  connectors,
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
  ssr: true,
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
