import { useWallet } from "@solana/wallet-adapter-react";

export function RequestAirDrop(){
    const wallet = useWallet();


    return <div>
        <input type="text" placeholder="Amount..."/>
        <button>Request Airdrop</button>
        {wallet.publicKey?.toBase58()}
    </div>
}

