import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { Alert } from 'react-native';
import { ethers } from 'ethers';

export interface Wallet {
  privateKey: string
  // Define properties for wallet
}

export interface Transaction {
  amount: number;
  receiverAddress: string;
  // Define properties for transaction
}

type Network = 'Bitcoin' | 'Polygon';
type Currency = "INR" | "USD";

class WalletStore {
  async importBitcoinWallet(privateKey: string): Promise<void> {
    try {
      // Placeholder logic for importing Bitcoin wallet
      // You'll need to use a Bitcoin library like bitcoinjs-lib to interact with Bitcoin wallets
      // This logic will depend on how you plan to handle Bitcoin wallet imports
      this.bitcoinWallet = privateKey; // Placeholder, replace with actual implementation
      console.log('Bitcoin wallet imported:', privateKey);
    } catch (error) {
      console.error('Error importing Bitcoin wallet:', error);
      throw new Error('Failed to import Bitcoin wallet. Please try again.');
    }
  }

  wallet: Wallet | null = null;
  transactions: Transaction[] = [];
  network: Network = 'Bitcoin'; // Default network is Bitcoin
  bitcoinPrice: number | null = null;
  usdtPrice: number | null = null;
  currency: Currency = "USD";
  loading: boolean = false;
  polygonWallet: string | null = null;
  bitcoinWallet: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.fetchLivePrices()
  }

  async fetchLivePrices() {
    try {
      this.loading = true;
      const endpoint = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,usd-coin&vs_currencies=${this.currency ?? "USD"}`;
      console.log(endpoint)

      const response = await axios.get(endpoint);

      const { data } = response;
      const currencyType = this.currency ? this.currency.toLowerCase() : "usd"
      console.log(data, endpoint, currencyType)
      const bitcoinPriceUSD = data['bitcoin'][currencyType];
      const usdCoinPriceUSD = data['usd-coin'][currencyType];

      if (bitcoinPriceUSD && usdCoinPriceUSD) {
        this.bitcoinPrice = bitcoinPriceUSD;
        this.usdtPrice = usdCoinPriceUSD;
      } else {
        console.error('Error: Bitcoin or USDT price not found in response');
      }
    } catch (error) {
      console.error('Error fetching live prices:', error);
      if (error instanceof Error) {
        Alert.alert('Error fetching live prices:', error.message)
      }
    }
    finally {
      this.loading = false
    }
  }

  setWallet(wallet: Wallet) {
    this.wallet = wallet;
  }

  setCurrency(currency: Currency) {
    this.currency = currency;
    this.fetchLivePrices(); // Fetch live prices when network changes
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  setNetwork(network: Network) {
    this.network = network;
    if(network === "Polygon") {
      this.bitcoinWallet = null
    }
    else if(network === 'Bitcoin') {
      this.polygonWallet = null
    }
    else {
      this.polygonWallet = null
      this.bitcoinWallet = null
    }
    this.fetchLivePrices(); // Fetch live prices when network changes
  }

  async importPolygonWallet(privateKey: string) {
    try {
      // Create an ethers.js provider using the provided RPC endpoint
      const provider = new ethers.JsonRpcProvider('https://polygon-rpc.com');

      // Create a wallet instance using the provided private key
      const wallet = new ethers.Wallet(privateKey, provider);

      // Get the address of the imported wallet
      const address = await wallet.getAddress();

      // Set the imported wallet address to the polygonWallet property
      this.polygonWallet = address;

      console.log('Polygon wallet imported:', address);
    } catch (error) {
      console.error('Error importing Polygon wallet:', error);
      throw new Error('Failed to import Polygon wallet. Please try again.');
    }
  }

}

const walletStore = new WalletStore();
export default walletStore;
