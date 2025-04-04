// import React, { useState } from 'react';
// import { getWallets } from '@depay/web3-wallets-evm';

// const WalletConnect = () => {
//   const [wallet, setWallet] = useState(null);
//   const [error, setError] = useState(null);

//   const connectWallet = async () => {
//     try {
//       let availableWallets = await getWallets();

//       if (availableWallets.length === 1) {
//         setWallet(availableWallets[0]);
//       } else if (availableWallets.length > 1) {
//         const index = parseInt(prompt(`Which wallet do you want to connect? (0 to ${availableWallets.length - 1})`), 10);
//         setWallet(availableWallets[index]);
//       } else {
//         setError('No wallets available for connection.');
//       }
//     } catch (err) {
//       console.error('Error connecting wallet:', err);
//       setError('Failed to connect wallet.');
//     }
//   };

//   return (
//     <div>
//       <button onClick={connectWallet}>Connect Wallet</button>
//       {wallet && <p>Connected to: {wallet.name}</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default SectionWrapper(connectWallet, "connectWallet");

