import React from 'react';
import { observer } from 'mobx-react-lite';
import walletStore, { Transaction } from '../../stores/WalletStore';
import { View, Text, FlatList } from 'react-native';

const TransactionHistoryComponent: React.FC = observer(() => {
  const { transactions } = walletStore;

  const renderTransactionItem = ({ item }: { item: Transaction }) => (
    <View style={{ marginVertical: 10 }}>
      <Text>Receiver Address: {item.receiverAddress}</Text>
      <Text>Amount: {item.amount}</Text>
      {/* Add other transaction details here */}
    </View>
  );

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Transaction History</Text>
      {transactions.length > 0 ? (
        <FlatList
          data={transactions}
          renderItem={renderTransactionItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No transactions</Text>
      )}
    </View>
  );
});

export default TransactionHistoryComponent;
