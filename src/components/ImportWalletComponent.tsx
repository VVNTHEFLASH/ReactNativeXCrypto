import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import walletStore from '../../stores/WalletStore';

const ImportWalletComponent: React.FC = () => {
  const [privateKey, setPrivateKey] = useState('');

  const handleImport = () => {
    // Validate private key format (simplified check)
    if (!privateKey) {
      Alert.alert('Error', 'Please enter a private key');
      return;
    }

    // Simulate importing process
    const wallet = {
      privateKey,
      // Other wallet properties if needed
    };

    // Set the wallet in the store
    walletStore.setWallet(wallet);

    // Optionally, clear the private key input field
    setPrivateKey('');

    // Show success message
    Alert.alert('Success', 'Wallet imported successfully');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter private key"
        value={privateKey}
        onChangeText={setPrivateKey}
        secureTextEntry={true} // Mask the private key
      />
      <Button title="Import Wallet" onPress={handleImport} />
    </View>
  );
};

export default ImportWalletComponent;
