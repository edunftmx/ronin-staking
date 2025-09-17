"use client";

import "./globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { Chain } from "@thirdweb-dev/chains";

const RONIN: Chain = {
  chain: "ronin",
  chainId: 2020,
  name: "Ronin",
  shortName: "ron",
  slug: "ronin",
  nativeCurrency: {
    name: "Ronin",
    symbol: "RON",
    decimals: 18,
  },
  rpc: ["https://api.roninchain.com/rpc"],
  explorers: [
    {
      name: "Ronin Explorer",
      url: "https://app.roninchain.com",
      standard: "EIP3091",
    },
  ],
  testnet: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider activeChain={RONIN}>
          {children}
        </T
