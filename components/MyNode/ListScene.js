import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Transactions from './Transactions';
import client from './../../lib/api-client';
import utils from './../../lib/utils';

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
    textAlign: 'left',
    paddingHorizontal: 5,
    fontSize: 13,
    color: '#FEF0BE',
  },
  txtStatus: {
    fontSize: 13,
    color: '#fff',
  },
  txtOnline: {
    fontSize: 13,
    color: '#AAE8AC',
    textAlign: 'left',
    paddingHorizontal: 5,
  },
  txtBlock: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'right',
    paddingHorizontal: 5,
  },
});

export default class ListScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: '',
      latestBlock: '',
      ethsgd: 10.00,
      transactions: {},
    };

    this.jsonObjs = {
      transactions: '{}',
    };

    this.getStatus = this.getStatus.bind(this);
  }

  componentDidMount() {
    this.getStatus();
    this.getRate();
    setInterval(this.getStatus, 5 * 1000);
    setInterval(this.getRate, 15 * 60 * 1000);
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

  getRate() {
    client.getRate().then((response) => {
      this.setState({
        ethsgd: response,
      });
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
              <Text style={styles.txtSymbol}>Ξ</Text> {utils.fromWei(this.state.balance).toLocaleString()}
            </Text>
            <Text style={styles.txtSgdBalance}>
              S$ {(utils.fromWei(this.state.balance) * this.state.ethsgd).toLocaleString()}
            </Text>

          </View>

          <View style={styles.viewStatusLine}>
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
        <Transactions transactions={this.state.transactions} ethsgd={this.state.ethsgd} navigator={this.props.navigator} />
      </View>
    );
  }
}

