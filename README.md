# Ronin Fighters Staking dApp

Este es un proyecto base en **Next.js + Thirdweb** para tu sistema de staking de NFTs.

## 🚀 Cómo usar

1. Clona o sube este proyecto a tu repositorio de GitHub.
2. En `app/page.tsx`, reemplaza las direcciones de contrato:
   - `NFT_CONTRACT_ADDRESS` → tu contrato de colección NFT
   - `STAKING_CONTRACT_ADDRESS` → tu contrato de staking
   - `FIGHT_TOKEN_ADDRESS` → tu token FIGHT (ERC-20)
3. Instala dependencias (si lo corres local):
   ```bash
   npm install
   npm run dev
   ```
4. Para desplegar:
   - Conecta tu repo en [Vercel](https://vercel.com/).
   - Vercel detectará Next.js y desplegará automáticamente.
