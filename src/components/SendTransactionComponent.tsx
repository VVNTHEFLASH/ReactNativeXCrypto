import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import walletStore from '../../stores/WalletStore';

const SendTransactionComponent: React.FC = () => {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSendTransaction = () => {
    // Validate receiver address and amount (simplified checks)
    if (!receiverAddress.trim()) {
      Alert.alert('Error', 'Please enter a receiver address');
      return;
    }
    if (!amount.trim() || isNaN(parseFloat(amount))) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }

    // Simulate sending transaction
    const transaction = {
      receiverAddress,
      amount: parseFloat(amount),
      // Other transaction properties if needed
    };

    // Add the transaction to the store
    walletStore.addTransaction(transaction);

    // Clear input fields
    setReceiverAddress('');
    setAmount('');

    // Show success message
    Alert.alert('Success', 'Transaction sent successfully');
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
        keyboardType="numeric" // Set keyboard type to numeric for amount input
      />
      <Button title="Send Transaction" onPress={handleSendTransaction} />
    </View>
  );
};

export default SendTransactionComponent;
