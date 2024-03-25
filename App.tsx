import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import TransactionHistoryComponent from './src/components/TransactionHistoryComponent';
import ImportWalletComponent from './src/components/ImportWalletComponent';

const Stack = createNativeStackNavigator();

// 0fb031e1f4483b1795ef55190d4f518f
// Crypto Wallet App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ImportWalletComponent' component={ImportWalletComponent} />
        <Stack.Screen name='TransactionHistoryComponent' component={TransactionHistoryComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
