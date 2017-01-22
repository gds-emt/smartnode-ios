import React from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TransactionRow from './TransactionRow';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1.6,
    backgroundColor: 'white',
  },

  txtScrollTitle: {
    fontSize: 12,
    paddingVertical: 8,
    paddingHorizontal: 5,
    color: '#444',
    backgroundColor: '#ccc',
  },
});

export default class Transactions extends React.Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dsTransactions: this.ds.cloneWithRows([]),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dsTransactions: this.ds.cloneWithRows(nextProps.transactions),
    });
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.txtScrollTitle}>LATEST TRANSACTIONS</Text>
        <ListView
          dataSource={this.state.dsTransactions}
          enableEmptySections
          renderRow={transaction => <TransactionRow transaction={transaction} />}
        />
      </View>
    );
  }
}

