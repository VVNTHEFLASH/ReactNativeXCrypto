import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import walletStore from '../../stores/WalletStore';
import { View, Text } from 'react-native';

const LivePriceComponent: React.FC = observer(() => {
    const { bitcoinPrice, usdtPrice, network, currency, fetchLivePrices } = walletStore;

    return (
        <View>
            <Text>Current Network: {network}</Text>
            <Text>Current currency: {currency}</Text>
            <Text>Bitcoin Price: {(bitcoinPrice ?? 'Loading...') + " " + currency}</Text>
            <Text>USDT Price: {(usdtPrice ?? 'Loading...') + " " + currency}</Text>
        </View>
    );
});

export default LivePriceComponent;
