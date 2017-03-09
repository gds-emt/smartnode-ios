import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import client from './../../lib/api-client';

const styles = StyleSheet.create({
  viewPreferences: {
    flex: 1,
    padding: 30,
  },
  imgQR: {
    width: 200,
    height: 200,
  },
});

export default class MyNode extends React.Component {
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
    StatusBar.setBarStyle('dark-content');
    const qrURI = `https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${this.state.address}&chld=L|1&choe=UTF-8`;

    return (
      <View style={styles.viewPreferences}>
        <Text>Wallet address</Text>
        <Text>{this.state.address}</Text>
        <Image style={styles.imgQR} source={{ uri: qrURI }} />
      </View>
    );
  }
}

