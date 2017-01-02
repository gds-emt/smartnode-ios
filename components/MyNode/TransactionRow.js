import React from 'react';
import {
  ListView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
  },
  viewAvatar: {
    flex: 1,
    backgroundColor: 'green',
  },
  viewDetails: {
    flex: 4.5,
    backgroundColor: 'blue',
  },
  viewEth: {
    flex: 1.5,
    backgroundColor: 'pink',
  },
});

export default class TransactionRow extends React.Component {
  render() {
    return (
      <View style={styles.viewRow}>
        <View style={styles.viewAvatar}>
          <Text>asdf</Text>
        </View>
        <View style={styles.viewDetails}>
          <Text>{this.props.transaction.merchant}</Text>
        </View>
        <View style={styles.viewEth}>
          <Text>Ξ {this.props.transaction.eth}</Text>
        </View>
      </View>
    );
  }
}

