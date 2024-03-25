import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImportWalletComponent from '../../components/ImportWalletComponent'
import SwitchNetworkComponent from '../../components/SwitchingNetworkComponent'
import LivePriceComponent from '../../components/LivePriceComponent'
import SendTransactionComponent from '../../components/SendTransactionComponent'

const Home = () => {
  return (
    <View>
      <ImportWalletComponent />
      <SwitchNetworkComponent />
      <LivePriceComponent />
      <SendTransactionComponent />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})