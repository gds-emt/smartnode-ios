import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ethUtils from './../../lib/eth-utils';

const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
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
  },
  txtValuePositive: {
    textAlign: 'right',
    color: '#87B757',
  },
  txtValueNegative: {
    textAlign: 'right',
    color: '#FD677C',
  },
});

export default function TransactionRow(props) {
  let txtValue = <Text style={styles.txtValuePositive}>Ξ {ethUtils.fromWei(props.transaction.value).toLocaleString()}</Text>;
  if (Number(props.transaction.value) < 0) {
    txtValue = <Text style={styles.txtValueNegative}>Ξ {(ethUtils.fromWei(props.transaction.value) * -1).toFixed(3).toLocaleString()}</Text>;
  }

  return (
    <View style={styles.viewRow}>
      <View style={styles.viewAvatar}>
        <Text>{props.transaction.type}</Text>
      </View>
      <View style={styles.viewDetails}>
        <Text>{props.transaction.address}</Text>
      </View>
      <View style={styles.viewEth}>
        {txtValue}
      </View>
    </View>
  );
}

