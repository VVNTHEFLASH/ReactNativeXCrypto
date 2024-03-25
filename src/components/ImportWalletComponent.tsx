import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import walletStore from '../../stores/WalletStore';
import PolygonWalletImportScreen from './PolygonWalletImportScreen';
import BitcoinWalletImportScreen from './BitcoinWalletImportScreen';

const ImportWalletComponent: React.FC = () => {
  const { network } = walletStore

  return (
    <View>
      {
        network === "Polygon" ? <PolygonWalletImportScreen />
          :
          network === "Bitcoin" ? <BitcoinWalletImportScreen />
            :
            null
      }
    </View>
  );
};

export default ImportWalletComponent;
