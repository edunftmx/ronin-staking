"use client";

import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useOwnedNFTs,
  ThirdwebNftMedia,
  useTokenBalance,
} from "@thirdweb-dev/react";
import { SmartContract } from "@thirdweb-dev/sdk";

const NFT_CONTRACT_ADDRESS = "0xTU_NFT";
const STAKING_CONTRACT_ADDRESS = "0xTU_STAKING";
const FIGHT_TOKEN_ADDRESS = "0xTU_TOKEN";

export default function Page() {
  const address = useAddress();

  const { contract: nftContract } = useContract(NFT_CONTRACT_ADDRESS);
  const { contract: stakingContract } = useContract(STAKING_CONTRACT_ADDRESS);
  const { contract: fightToken } = useContract(FIGHT_TOKEN_ADDRESS);

  const { data: ownedNfts, isLoading: loadingNfts } = useOwnedNFTs(
    nftContract,
    address
  );
  const { data: fightBalance } = useTokenBalance(fightToken, address);

  return (
    <main style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Ronin Fighters — Staking</h1>

      <ConnectWallet />

      <p style={{ marginTop: 10 }}>
        <strong>Wallet conectada:</strong> {address ?? "ninguna"}
      </p>

      <p>
        <strong>Balance de FIGHT:</strong>{" "}
        {fightBalance
          ? `${fightBalance.displayValue} ${fightBalance.symbol}`
          : "0"}
      </p>

      <section style={{ marginTop: 30 }}>
        <h2>Tus NFTs</h2>
        {loadingNfts && <p>Cargando...</p>}
        {!loadingNfts && (!ownedNfts || ownedNfts.length === 0) && (
          <p>No tienes NFTs en esta colección.</p>
        )}

        <div style={{ display: "grid", gap: 15, gridTemplateColumns: "1fr 1fr" }}>
          {ownedNfts?.map((nft) => (
            <div className="card" key={nft.metadata.id}>
              <ThirdwebNftMedia
                metadata={nft.metadata}
                height="200px"
                width="100%"
              />
              <h3>{nft.metadata.name}</h3>

              <Web3Button
                contractAddress={NFT_CONTRACT_ADDRESS}
                action={async (contract: any) =>
                  contract.erc721.setApprovalForAll(STAKING_CONTRACT_ADDRESS, true)
                }
              >
                Aprobar staking
              </Web3Button>

              <Web3Button
                contractAddress={STAKING_CONTRACT_ADDRESS}
                action={async (contract: SmartContract) =>
                  contract.call("stake", nft.metadata.id)
                }
              >
                Stake
              </Web3Button>

              <Web3Button
                contractAddress={STAKING_CONTRACT_ADDRESS}
                action={async (contract: SmartContract) =>
                  contract.call("unstake", nft.metadata.id)
                }
              >
                Unstake
              </Web3Button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Reclamar recompensas</h2>
        <Web3Button
          contractAddress={STAKING_CONTRACT_ADDRESS}
          action={(contract: SmartContract) => contract.call("claim")}
        >
          Claim Rewards
        </Web3Button>
      </section>
    </main>
  );
}
