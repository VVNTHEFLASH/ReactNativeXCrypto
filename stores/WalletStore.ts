import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { Alert } from 'react-native';

export interface Wallet {
  privateKey: string
  // Define properties for wallet
}

export interface Transaction {
    amount: string;
    receiverAddress: string;
  // Define properties for transaction
}

type Network = 'Bitcoin' | 'Polygon';
type Currency = "INR" | "USD";

class WalletStore {
  wallet: Wallet | null = null;
  transactions: Transaction[] = [];
  network: Network = 'Bitcoin'; // Default network is Bitcoin
  bitcoinPrice: number | null = null;
  usdtPrice: number | null = null;
  currency: Currency = "USD";
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchLivePrices()
  }

  async fetchLivePrices() {
    try {
        this.loading = true;
        const endpoint = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,usd-coin&vs_currencies=${this.currency ?? "USD"}`;
        console.log( endpoint)

        const response = await axios.get(endpoint);

        const { data } = response;
        const currencyType = this.currency ? this.currency.toLowerCase(): "usd"
        console.log(data, endpoint,  currencyType)
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
    this.fetchLivePrices(); // Fetch live prices when network changes
  }
}

const walletStore = new WalletStore();
export default walletStore;
