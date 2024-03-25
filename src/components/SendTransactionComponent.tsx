import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SendTransactionComponent: React.FC = () => {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSendTransaction = () => {
    // Implement logic to send transaction
    // todo
  };

  return (
    <View>
      <TextInput
        placeholder="Receiver Address"
        value={receiverAddress}
        onChangeText={setReceiverAddress}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Send Transaction" onPress={handleSendTransaction} />
    </View>
  );
};

export default SendTransactionComponent;
