"use client";

import "./globals.css"; // Asegúrate de que este archivo exista
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { createChain } from "thirdweb";

const RONIN = createChain({
  id: 2020, // Chain ID de Ronin
  name: "Ronin",
  nativeCurrency: {
    name: "Ronin",
    symbol: "RON",
    decimals: 18,
  },
  rpc: ["https://api.roninchain.com/rpc"],
  blockExplorers: [
    {
      name: "Ronin Explorer",
      url: "https://app.roninchain.com",
    },
  ],
  testnet: false,
});

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
        </ThirdwebProvider>
      </body>
    </html>
  );
}
