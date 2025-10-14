// src/hooks/useTurnkeyWallet.js
import { useState } from 'react';

export function useTurnkeyWallet() {
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const connect = async () => {
    setLoading(true);
    setError(null);

    try {
      // For the hackathon MVP, we'll use a functional demo mode
      // that simulates Turnkey wallet behavior without CSP issues
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Generate a realistic testnet address
      const address = 'ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC';
      
      // Fetch real balance from Stacks API
      let balance = '0.0';
      try {
        const response = await fetch(
          `https://api.testnet.hiro.so/extended/v1/address/${address}/balances`
        );
        const data = await response.json();
        
        // Check for sBTC balance
        const sbtcBalance = data.fungible_tokens?.[
          'ST000000000000000000002AMW42H.sbtc::sbtc'
        ];
        
        if (sbtcBalance) {
          balance = (parseInt(sbtcBalance) / 1000000).toFixed(6);
        } else {
          // Demo balance for testing
          balance = '2.5';
        }
      } catch (err) {
        console.warn('Balance fetch failed, using demo balance:', err);
        balance = '2.5';
      }

      setWallet({
        address,
        balance,
        network: 'testnet',
        walletId: `wallet-${Date.now()}`,
        mode: 'demo'
      });

    } catch (err) {
      setError(err.message || 'Failed to connect wallet');
      console.error('Wallet connection error:', err);
    } finally {
      setLoading(false);
    }
  };

  const signTransaction = async (txData) => {
    if (!wallet) {
      throw new Error('Wallet not connected');
    }

    setLoading(true);
    setError(null);

    try {
      // Validate transaction data
      if (!txData.recipient || !txData.amount) {
        throw new Error('Invalid transaction data');
      }

      // Validate Stacks address format
      if (!txData.recipient.startsWith('ST') || txData.recipient.length !== 41) {
        throw new Error('Invalid Stacks address');
      }

      // Validate amount
      const amount = parseFloat(txData.amount);
      if (isNaN(amount) || amount <= 0) {
        throw new Error('Invalid amount');
      }

      const balance = parseFloat(wallet.balance);
      if (amount > balance) {
        throw new Error('Insufficient balance');
      }

      // Simulate transaction signing and broadcasting
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate realistic transaction ID
      const txid = '0x' + Array.from({ length: 64 }, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('');

      // Update balance (demo only)
      const newBalance = (balance - amount).toFixed(6);
      setWallet(prev => ({ ...prev, balance: newBalance }));

      return {
        txid,
        success: true,
        amount: txData.amount,
        recipient: txData.recipient
      };

    } catch (err) {
      setError(err.message || 'Transaction failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const disconnect = () => {
    setWallet(null);
    setError(null);
  };

  return {
    wallet,
    loading,
    error,
    connect,
    signTransaction,
    disconnect
  };
}