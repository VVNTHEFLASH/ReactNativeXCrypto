import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ImportWalletComponent: React.FC = () => {
  const [privateKey, setPrivateKey] = useState('');

  const handleImport = () => {
    // Implement import logic
    // todo
  };

  return (
    <View>
      <TextInput
        placeholder="Enter private key"
        value={privateKey}
        onChangeText={setPrivateKey}
      />
      <Button title="Import Wallet" onPress={handleImport} />
    </View>
  );
};

export default ImportWalletComponent;
