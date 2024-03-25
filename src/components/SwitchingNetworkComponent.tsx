import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import WalletStore from '../../stores/WalletStore';

const SwitchNetworkComponent: React.FC = observer(() => {
    
  const [buttonTitle, setButtonTitle] = useState("Switch to INR")
  const [buttonTitleNetwork, setButtonTitleNetwork] = useState("Switch to Bitcoin Network")

  const handleSwitchBitcoin = () => {
    // Implement switching to Bitcoin network
    WalletStore.setNetwork('Bitcoin');
    setButtonTitleNetwork("Switch to Polygon Network")
  };

  const handleSwitchPolygon = () => {
    // Implement switching to Polygon network
    WalletStore.setNetwork('Polygon');
    setButtonTitleNetwork("Switch to Bitcoin Network")
  };

  const handleSwitchCurrency = () => {
    if(WalletStore.currency === "USD") {
        WalletStore.setCurrency("INR")
        setButtonTitle("Switch to USD")
    }
    else {
        WalletStore.setCurrency("USD")
        setButtonTitle("Switch to INR")
    }
  }

  const handleSwitchNetwork = () => {
    if(WalletStore.network === "Bitcoin") {
        handleSwitchPolygon()
    }
    else {
        handleSwitchBitcoin()
    }
  }

  return (
    <View>
      <Button title={buttonTitle} onPress={handleSwitchCurrency} />

      <Button title={buttonTitleNetwork} onPress={handleSwitchNetwork} />
    </View>
  );
});

export default SwitchNetworkComponent;
