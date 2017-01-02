import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Transactions from './Transactions';

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
  txtStatus: {
    fontSize: 11,
    color: '#fff',
  },
  txtOnline: {
    fontSize: 11,
    color: '#fff',
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
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View style={styles.viewUpper}>
          <View style={styles.viewBalance}>
            <Text style={styles.txtBalance}>BALANCE</Text>
            <Text style={styles.txtEthBalance}>
              <Text style={styles.txtSymbol}>Ξ</Text> 122.751
            </Text>
            <Text style={styles.txtSgdBalance}>
              S$ 202.23
            </Text>
          </View>

          <View style={styles.viewStatusLine}>
            <View style={styles.viewStatusLineCell}>
              <Text style={styles.txtOnline}>Online</Text>
            </View>
            <View style={styles.viewStatusLineCell}>
              <Text style={styles.txtBlock}>Latest block: 1,9451456</Text>
            </View>
          </View>
        </View>
        <Transactions />
      </View>
    );
  }
}

