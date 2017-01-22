import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Transactions from './Transactions';
import client from './../../lib/api-client';
import ethUtils from './../../lib/eth-utils';

const styles = StyleSheet.create({
  viewUpper: {
    flex: 1,
    backgroundColor: '#830017',
  },
  viewBalance: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStatusLine: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStatusLineCell: {
    flex: 1,
  },
  txtBalance: {
    paddingTop: 20,
    color: '#aaa',
  },
  txtEthBalance: {
    fontSize: 50,
    color: '#fff',
  },
  txtSymbol: {
    color: '#ccc',
  },
  txtSgdBalance: {
    fontSize: 20,
    color: '#FEC40A',
  },
  txtRate: {
    textAlign: 'center',
    fontSize: 11,
    color: '#FEF0BE',
  },
  txtStatus: {
    fontSize: 11,
    color: '#fff',
  },
  txtOnline: {
    fontSize: 11,
    color: '#AAE8AC',
    textAlign: 'left',
    paddingHorizontal: 5,
  },
  txtBlock: {
    fontSize: 11,
    color: '#fff',
    textAlign: 'right',
    paddingHorizontal: 5,
  },
});

export default class MyNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: '',
      latestBlock: '',
      ethsgd: 10.35,
      transactions: {},
    };

    this.jsonObjs = {
      transactions: '{}',
    };

    this.getStatus = this.getStatus.bind(this);
  }

  componentDidMount() {
    this.getStatus();
    setInterval(this.getStatus, 15 * 1000);
  }

  getStatus() {
    client.getStatus().then((response) => {
      const newState = {};
      if (this.state.blockNumber !== response.blockNumber) {
        newState.latestBlock = response.blockNumber;
      }
      if (this.state.balance !== response.wallet.balance) {
        newState.balance = response.wallet.balance;
      }
      if (this.jsonObjs.transactions !== JSON.stringify(response.transactions)) {
        this.jsonObjs.transactions = JSON.stringify(response.transactions);
        newState.transactions = response.transactions;
      }
      if (newState) {
        this.setState(newState);
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View style={styles.viewUpper}>
          <View style={styles.viewBalance}>
            <Text style={styles.txtBalance}>BALANCE</Text>
            <Text style={styles.txtEthBalance}>
              <Text style={styles.txtSymbol}>Ξ</Text> {ethUtils.fromWei(this.state.balance).toLocaleString()}
            </Text>
            <Text style={styles.txtSgdBalance}>
              S$ {(ethUtils.fromWei(this.state.balance) * this.state.ethsgd).toFixed(2)}
            </Text>

          </View>

          <View style={styles.viewStatusLine}>
            <View style={styles.viewStatusLineCell}>
              <Text style={styles.txtOnline}>Online</Text>
            </View>
            <View style={styles.viewStatusLineCell}>
              <Text style={styles.txtRate}>
                ETHSGD @ {this.state.ethsgd}
              </Text>
            </View>
            <View style={styles.viewStatusLineCell}>
              <Text style={styles.txtBlock}>Latest block: {this.state.latestBlock.toLocaleString()}</Text>
            </View>
          </View>
        </View>
        <Transactions transactions={this.state.transactions} />
      </View>
    );
  }
}

