import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  viewWalletAddress: {
    marginTop: 200,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
  },
  viewWalletLeft: {
    flex: 5,
  },
  viewWalletRight: {
    flex: 1.5,
    paddingTop: 10,
  },

  imgQR: {
    width: 50,
    height: 50,
  },

  txtTitleAddress: {
    fontSize: 26,
    color: '#000',
  },
  txtDescriptionAddress: {
    fontSize: 12,
    color: '#666',
  },
  txtAddress: {
    fontSize: 11,
    color: '#999',
  },
});

export default class Marketplace extends React.Component {
  render() {
    return (
      <View style={styles.viewWalletAddress}>
        <View style={styles.viewWalletLeft}>
          <Text style={styles.txtTitleAddress}>Marketplace</Text>
          <Text style={styles.txtDescriptionAddress}>Available services</Text>
        </View>
        <View style={styles.viewWalletRight}>
          <Text style={{textAlign: 'right'}}>
          </Text>
        </View>
      </View>
    );
  }
}

