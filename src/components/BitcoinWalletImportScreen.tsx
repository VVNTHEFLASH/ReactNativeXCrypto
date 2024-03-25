// BitcoinWalletImportScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';
import walletStore from '../../stores/WalletStore';
import * as bip39 from 'react-native-bip39';

const BitcoinWalletImportScreen: React.FC = observer(() => {
  const [privateKey, setPrivateKey] = useState<string>('');

  const handleImport = async () => {
    try {
      // Validate private key format
      if (!isValidPrivateKey(privateKey)) {
        Alert.alert('Invalid Private Key', 'Please enter a valid private key.');
        return;
      }

      // Call MobX action to import wallet
      await walletStore.importBitcoinWallet(privateKey);

      // Clear input field
      setPrivateKey('');
      Alert.alert('Success', 'Bitcoin wallet imported successfully.');
    } catch (error) {
      console.error('Error importing Bitcoin wallet:', error);
      Alert.alert('Error', 'Failed to import Bitcoin wallet. Please try again.');
    }
  };

  const isValidPrivateKey = (key: string): boolean => {
    // Placeholder function to validate private key format
    // In a real implementation, you may want to validate against Bitcoin wallet standards
    return key.length > 0;
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

export default BitcoinWalletImportScreen;
