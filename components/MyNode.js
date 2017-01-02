import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  status: {
    flex: 1,
    backgroundColor: '#830017',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txView: {
    flex: 1.6,
    backgroundColor: '#aaa',
  },
  txtBalance: {
    paddingTop: 20,
    color: '#aaa',
  },
  txtEthBalance: {
    color: '#fff',
    fontSize: 50,
  },
  txtSymbol: {
    color: '#ccc',
  },
  txtSgdBalance: {
    fontSize: 20,
    color: '#FEC40A',
  },
});

export default class MyNode extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View style={styles.status}>
          <Text style={styles.txtBalance}>BALANCE</Text>
          <Text style={styles.txtEthBalance}>
            <Text style={styles.txtSymbol}>Ξ</Text> 122.751
          </Text>
          <Text style={styles.txtSgdBalance}>
            S$ 202.23
          </Text>
        </View>
        <View style={styles.txView} />
      </View>
    );
  }
}

