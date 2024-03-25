// PolygonWalletImportScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';
import walletStore from '../../stores/WalletStore';

const PolygonWalletImportScreen: React.FC = observer(() => {
  const [privateKey, setPrivateKey] = useState<string>('');

  const handleImport = async () => {
    try {
      // Validate private key format
      if (!isValidPrivateKey(privateKey)) {
        Alert.alert('Invalid Private Key', 'Please enter a valid private key.');
        return;
      }

      // Call MobX action to import wallet
      await walletStore.importPolygonWallet(privateKey);
      // Clear input field
      setPrivateKey('');
      Alert.alert('Success', 'Polygon wallet imported successfully.');
    } catch (error) {
      console.error('Error importing Polygon wallet:', error);
      Alert.alert('Error', 'Failed to import Polygon wallet. Please try again.');
    }
  };

  const isValidPrivateKey = (key: string): boolean => {
    // Implement validation logic for private key format
    // Example: Check if it's a hexadecimal string with correct length
    return /^0x[a-fA-F0-9]{64}$/.test(key);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Private Key"
        value={privateKey}
        onChangeText={setPrivateKey}
      />
      <Button title="Import Wallet" onPress={handleImport} />
    </View>
  );
});

export default PolygonWalletImportScreen;
