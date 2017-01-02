import React from 'react';
import {
  ListView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TransactionRow from './TransactionRow';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1.6,
    backgroundColor: '#ccc',
  },

  txtScrollTitle: {
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: '#666',
  }
});

export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      transactions: ds.cloneWithRows([
        { merchant: 'honestbee', time: '2 hours ago', description: '100 Nespresso capsules', eth: '-8.180' },
        { merchant: 'Coinbase', time: '11 hours ago', description: 'Top up', eth: '100.000' },
      ]),
    };
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.txtScrollTitle}>LATEST TRANSACTIONS</Text>
        <ListView
          dataSource={this.state.transactions}
          renderRow={(transaction) => <TransactionRow transaction={transaction} />}
        />
      </View>
    );
  }
}

