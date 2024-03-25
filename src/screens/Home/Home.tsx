import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ImportWalletComponent from '../../components/ImportWalletComponent'
import SwitchNetworkComponent from '../../components/SwitchingNetworkComponent'
import LivePriceComponent from '../../components/LivePriceComponent'
import SendTransactionComponent from '../../components/SendTransactionComponent'
import walletStore from '../../../stores/WalletStore';
import { observer } from 'mobx-react-lite'
import TransactionHistoryComponent from '../../components/TransactionHistoryComponent'


const Home = observer(() => {
  const { wallet, fetchLivePrices } = walletStore;

  useEffect(() => {
    // fetchLivePrices()
    console.log(wallet, "Wallet")
  }, [wallet])
  return (
    <View>
      <SwitchNetworkComponent />
      <LivePriceComponent />
      {!wallet ? <ImportWalletComponent /> :
        <View>
          <Text>
            Wallet is imported: Private key({wallet.privateKey})
          </Text>
          <SendTransactionComponent />
        </View>}
        <TransactionHistoryComponent />
    </View>
  )
})

export default Home

const styles = StyleSheet.create({})