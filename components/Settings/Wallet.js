import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import client from './../../lib/api-client';
import utils from './../../lib/utils';

const styles = StyleSheet.create({
  viewWallet: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  viewWalletAddress: {
    flexDirection: 'row',
  },
  viewWalletLeft: {
    flex: 5,
  },
  viewWalletRight: {
    flex: 1.5,
    paddingTop: 10,
  },
  viewSend: {
    marginTop: 30,
  },
  viewSendAddress: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  viewSendAddressLeft: {
    flex: 7,
    marginRight: 10,
  },
  viewSendAddressRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSendAddressRightButton: {
    height: 50,
    backgroundColor: '#2C4F7F',
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
  txtLink: {
    fontSize: 11,
    color: '#6498FF',
    backgroundColor: '#fff',
  },
  txtSubtitle: {
    fontSize: 17,
    color: '#000',
  },
  txtSendButton: {
    color: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 4,
    textAlign: 'center',
    fontSize: 12,
    flex: 1,
  },
  txtFormLabel: {
    fontSize: 9,
    color: '#777',
  },
  txtSendResponse: {
    fontSize: 12,
    marginTop: 2,
    color: '#000',
  },

  txtinSendAddress: {
    borderColor: '#eee',
    borderWidth: 1,
    paddingHorizontal: 2,
    height: 28,
    fontSize: 13,
    color: '#333',
    marginBottom: 6,
  },
  txtinAmount: {
    borderColor: '#eee',
    borderWidth: 1,
    paddingHorizontal: 2,
    height: 28,
    fontSize: 13,
    color: '#333',
  },
});

export default class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      sendAddress: '',
      sendETH: '0',
      sendResponse: '',
    };

    this.isSending = false;

    this.getStatus = this.getStatus.bind(this);
    this.sendETH = this.sendETH.bind(this);
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

  openBlockExplorer() {
    return Linking.openURL(`http://kovan.etherscan.io/address/${this.state.address}`);
  }

  sendETH() {
    if (this.isSending) {
      return;
    }

    const amount = utils.toWei(this.state.sendETH).toString();
    const address = this.state.sendAddress;

    if (amount !== '0' && address !== '') {
      this.isSending = true;
      client.send(address, amount).then(() => {
        this.isSending = false;
        this.setState({
          sendAddress: '',
          sendETH: 0,
          sendResponse: 'Send request successful.',
        });
      }, (err) => {
        this.isSending = false;
        this.setState({
          sendResponse: err,
        });
      });
    } else {
      this.isSending = false;
      this.setState({
        sendResponse: 'Bad address or amount.',
      });
    }
    // return client.send(${
    // return Linking.openURL(`http://kovan.etherscan.io/address/${this.state.address}`);
  }

  render() {
    const qrURI = `https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${this.state.address}&chld=L|1&choe=UTF-8`;

    return (
      <View style={styles.viewWallet}>
        <View style={styles.viewWalletAddress}>
          <View style={styles.viewWalletLeft}>
            <Text style={styles.txtTitleAddress}>Wallet address</Text>
            <Text style={styles.txtDescriptionAddress}>Send ETH to address to top up wallet</Text>
            <Text style={styles.txtAddress}>{this.state.address}</Text>
            <TouchableHighlight onPress={() => { this.openBlockExplorer(); }}>
              <Text style={styles.txtLink}>View on Block Explorer</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.viewWalletRight}>
            <Text style={{ textAlign: 'right' }}>
              <Image style={styles.imgQR} source={{ uri: qrURI }} />
            </Text>
          </View>
        </View>

        <View style={styles.viewSend}>
          <Text style={styles.txtSubtitle}>Send ETH from Wallet</Text>

          <View style={styles.viewSendAddress}>
            <View style={styles.viewSendAddressLeft}>
              <Text style={styles.txtFormLabel}>Ethereum address</Text>
              <TextInput
                style={styles.txtinSendAddress}
                onChangeText={sendAddress => this.setState({ sendAddress })}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Address to send to starting with 0x"
                value={this.state.sendAddress}
              />
              <Text style={styles.txtFormLabel}>Amount to send in Ξ</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.txtinAmount}
                onChangeText={sendETH => this.setState({ sendETH })}
                value={this.state.sendETH.toString()}
              />
              <Text style={styles.txtSendResponse}>{this.state.sendResponse}</Text>
            </View>
            <View style={styles.viewSendAddressRight}>
              <TouchableHighlight onPress={() => { this.sendETH(); }}>
                <View style={styles.viewSendAddressRightButton}>
                  <Text style={styles.txtSendButton}>Send ETH</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

