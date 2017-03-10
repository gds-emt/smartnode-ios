import moment from 'moment';
import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import utils from './../../lib/utils';
import DetailSvcTxLine from './DetailSvcTxLine';

const styles = StyleSheet.create({
  viewDetailSvcTx: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  viewDetailSvcTxLeft: {
    flex: 5,
    backgroundColor: 'white',
  },
  viewDetailSvcTxRight: {
    flex: 1.5,
    backgroundColor: 'white',
  },

  txtHeader: {
    fontSize: 15,
    color: '#999',
    marginBottom: 4,
  },
  txtBody: {
    fontSize: 14,
    color: '#000',
  },
  txtBodyWithLink: {
    fontSize: 14,
    color: '#1060FF',
  },
  txtSvcTx: {
    color: 'black',
    fontSize: 12,
  },
  txtSvcTxTitle: {
    color: '#999',
    fontSize: 12,
  },

  txtValuePositive: {
    color: '#64B710',
    fontSize: 18,
    textAlign: 'right',
  },
  txtValueNegative: {
    color: '#FD405A',
    fontSize: 18,
    textAlign: 'right',
  },
  txtValuePositiveSGD: {
    color: '#87B757',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'right',
  },
  txtValueNegativeSGD: {
    color: '#FD97A6',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'right',
  },
});

export default function DetailSvcTx(props) {
  const tx = props.tx;

  let txtValue = <Text style={styles.txtValuePositive}>Ξ {utils.fromWei(tx.value, 4).toLocaleString()}</Text>;
    let txtSgd = <Text style={styles.txtValuePositiveSGD}>S$ {(utils.fromWei(tx.value, 4) * props.ethsgd).toLocaleString()}</Text>;

  if (Number(tx.value) < 0) {
    txtValue = <Text style={styles.txtValueNegative}>Ξ {(utils.fromWei(tx.value, 4) * -1).toFixed(4).toLocaleString()}</Text>;
    txtSgd = <Text style={styles.txtValueNegativeSGD}>S$ {(utils.fromWei(tx.value, 4) * -1 * props.ethsgd).toLocaleString()}</Text>;
  }

  const lines = [
    {
      header: 'Type',
      body: (tx.type === 'receive') ? 'Change' : 'Payment',
    },
    {
      header: 'Block',
      body: tx.blockNumber.toLocaleString(),
    },
    {
      header: 'Time',
      body: moment.unix(tx.timestamp).format('ddd, MMM D YYYY, H:mm:ss'),
    },
    {
      header: 'Tx hash',
      body: `${tx.transactionHash.substring(0, 20)}…`,
      showAsWithLink: true,
    },
  ];

  if (tx.remarks) {
    lines.push({
      header: 'Remarks',
      body: tx.remarks,
      small: true,
    });
  }

  return (
    <TouchableHighlight onPress={() => Linking.openURL(`http://kovan.etherscan.io/tx/${tx.transactionHash}`)}>
      <View style={styles.viewDetailSvcTx}>
        <View style={styles.viewDetailSvcTxLeft}>
          {lines.map((line, i) => <DetailSvcTxLine key={i} line={line} />)}
        </View>

        <View style={styles.viewDetailSvcTxRight}>
          {txtValue}
          {txtSgd}
        </View>
      </View>
    </TouchableHighlight>
  );
}

