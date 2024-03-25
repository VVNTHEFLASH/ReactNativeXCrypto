import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ImportWalletComponent from '../../components/ImportWalletComponent'
import SwitchNetworkComponent from '../../components/SwitchingNetworkComponent'
import LivePriceComponent from '../../components/LivePriceComponent'
import SendTransactionComponent from '../../components/SendTransactionComponent'
import walletStore from '../../../stores/WalletStore';
import { observer } from 'mobx-react-lite'


const Home = observer(({ navigation }: any) => {
  const { polygonWallet, bitcoinWallet, network } = walletStore;

  useEffect(() => {
    // fetchLivePrices()
    console.log(polygonWallet, "Wallet")
  }, [polygonWallet])

  const walletScreen = () => {
    return (
      <>
        {polygonWallet || bitcoinWallet ?  <View>
          <Text>
            Wallet is imported: Private key({polygonWallet || bitcoinWallet}) {network}
          </Text>
          <SendTransactionComponent />
        </View> : <ImportWalletComponent />}
      </>
    )
  }
  return (
    <View>
      <SwitchNetworkComponent />
      <LivePriceComponent />
      {/* {!polygonWallet ? <ImportWalletComponent /> : !bitcoinWallet ?
        <View>
          <Text>
            Wallet is imported: Private key({bitcoinWallet})
          </Text>
          <SendTransactionComponent />
        </View> :
      <View>
        <Text>
          Wallet is imported: Private key({polygonWallet})
        </Text>
        <SendTransactionComponent />
      </View>} */}
      {walletScreen()}
      <Button title='Transaction History' onPress={() => {
        navigation.navigate("TransactionHistoryComponent")
      }} />
    </View>
  )
})

export default Home

const styles = StyleSheet.create({})