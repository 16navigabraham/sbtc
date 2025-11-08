

// If the hook file doesn't exist yet, uncomment this inline version:
/*
const useTurnkeyWallet = () => {
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const connect = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setWallet({
      address: 'ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC',
      balance: '2.5',
      network: 'testnet'
    });
    setLoading(false);
  };
  
  const signTransaction = async (txData) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    return {
      txid: '0x' + Array.from({ length: 64 }, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join(''),
      success: true
    };
  };
  
  return { wallet, loading, connect, signTransaction };
};
*/
import React, { useState } from 'react';
import { Send, Wallet, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useTurnkeyWallet } from './hooks/useTurnkeyWallet';


export default function SBTCQuickSend() {
  const { wallet, loading, connect, signTransaction } = useTurnkeyWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [txStatus, setTxStatus] = useState(null);
  const [txHash, setTxHash] = useState('');

  

 
    const handleSend = async () => {
        try {
          setTxStatus(null);
          const result = await signTransaction({ recipient, amount });
          if (result.success) {
            setTxStatus('success');
            setTxHash(result.txid);
          }
        } catch (error) {
          setTxStatus('error');
        }
      };
    
      if (!wallet) {
        return (
          <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-orange-100">
              <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full mb-4">
              <Wallet className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">sBTC Quick Send</h1>
            <p className="text-gray-600">Powered by Turnkey Embedded Wallet</p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">Embedded Wallet</p>
                <p className="text-sm text-gray-600">Seamless authentication with Turnkey SDK</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">sBTC on Stacks</p>
                <p className="text-sm text-gray-600">Native Bitcoin transactions on testnet</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">Secure & Fast</p>
                <p className="text-sm text-gray-600">End-to-end encrypted transactions</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={connect}
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Connecting...</span>
              </>
            ) : (
              <>
                <Wallet className="w-5 h-5" />
                <span>Connect Turnkey Wallet</span>
              </>
            )}
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-6">
            This is a testnet demo. No real funds will be transferred.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Your Wallet</h2>
              <p className="text-sm text-gray-600 font-mono mt-1">{wallet.address.slice(0, 20)}...</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">sBTC Balance</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                {wallet.balance}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Testnet Connected
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Send className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Send sBTC</h3>
              <p className="text-sm text-gray-600">Transfer Bitcoin on Stacks</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Recipient Address
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors font-mono text-sm"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Amount (sBTC)
              </label>
              <input
                type="number"
                step="0.000001"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-lg"
                disabled={loading}
              />
              <p className="text-xs text-gray-500 mt-2">
                Available: {wallet.balance} sBTC
              </p>
            </div>

            <button
              onClick={handleSend}
              disabled={loading || !recipient || !amount}
              className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Processing Transaction...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send sBTC</span>
                </>
              )}
            </button>
          </div>

          {txStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-green-800">Transaction Successful!</p>
                  <p className="text-sm text-green-700 mt-1 font-mono break-all">
                    {txHash}
                  </p>
                  <a 
                    href={`https://explorer.hiro.so/txid/${txHash}?chain=testnet`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:text-green-700 underline mt-2 inline-block"
                  >
                    View on Explorer →
                  </a>
                </div>
              </div>
            </div>
          )}

          {txStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Transaction Failed</p>
                  <p className="text-sm text-red-700 mt-1">
                    Please check the recipient address and amount, then try again.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p className="mb-2">Built for Stacks Builders Challenge 2025</p>
          <div className="flex items-center justify-center space-x-4">
            <span className="inline-flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Turnkey SDK
            </span>
            <span className="inline-flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              sBTC on Stacks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


