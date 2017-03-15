import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import client from './../../lib/api-client';

const styles = StyleSheet.create({
  viewWalletAddress: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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

export default class WalletAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
    };

    this.getStatus = this.getStatus.bind(this);
  }

  componentDidMount() {
    this.getStatus();
  }

  getStatus() {
    client.getStatus().then((response) => {
      this.setState({
        address: response.wallet.address,
      });
    });
  }


  render() {
    const qrURI = `https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${this.state.address}&chld=L|1&choe=UTF-8`;

    return (
      <View style={styles.viewWalletAddress}>
        <View style={styles.viewWalletLeft}>
          <Text style={styles.txtTitleAddress}>Wallet address</Text>
          <Text style={styles.txtDescriptionAddress}>Send ETH to address to top up wallet</Text>
          <Text style={styles.txtAddress}>{this.state.address}</Text>
        </View>
        <View style={styles.viewWalletRight}>
          <Text style={{textAlign: 'right'}}>
            <Image style={styles.imgQR} source={{ uri: qrURI }} />
          </Text>
        </View>
      </View>
    );
  }
}

