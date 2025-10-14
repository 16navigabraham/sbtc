import { 
  makeContractCall, 
  broadcastTransaction,
  AnchorMode,
  PostConditionMode 
} from '@stacks/transactions';
import { StacksTestnet } from '@stacks/network';

const network = new StacksTestnet();

export async function sendSBTC(senderKey, recipient, amount) {
  const txOptions = {
    contractAddress: 'ST000000000000000000002AMW42H',
    contractName: 'sbtc',
    functionName: 'transfer',
    functionArgs: [
      uintCV(amount),
      principalCV(recipient),
      noneCV()
    ],
    senderKey,
    network,
    anchorMode: AnchorMode.Any,
    postConditionMode: PostConditionMode.Allow,
  };

  const transaction = await makeContractCall(txOptions);
  const broadcastResponse = await broadcastTransaction(transaction, network);
  
  return broadcastResponse.txid;
}

export function validateStacksAddress(address) {
  return address.startsWith('ST') && address.length === 41;
}