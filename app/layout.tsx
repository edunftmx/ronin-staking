"use client";

import "./globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const RONIN_CHAIN_ID = 2020;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider activeChain={RONIN_CHAIN_ID}>
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
