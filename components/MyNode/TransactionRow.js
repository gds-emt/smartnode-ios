import moment from 'moment';
import React from 'react';
import {
  Image,
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
  },
  viewDetails: {
    flex: 4.5,
    paddingHorizontal: 10,
  },
  viewEth: {
    flex: 1.5,
  },
  txtTitle: {
    fontSize: 16,
  },
  txtTime: {
    fontSize: 12,
    paddingTop: 2,
    color: '#666',
  },
  txtDescription: {
    fontSize: 12,
    color: '#999',
    paddingTop: 2,
  },
  txtValuePositive: {
    textAlign: 'right',
    color: '#87B757',
  },
  txtValueNegative: {
    textAlign: 'right',
    color: '#FD677C',
  },
  imgIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default function TransactionRow(props) {
  const tx = props.transaction;

  let txtValue = <Text style={styles.txtValuePositive}>Ξ {ethUtils.fromWei(tx.value).toLocaleString()}</Text>;
  if (Number(tx.value) < 0) {
    txtValue = <Text style={styles.txtValueNegative}>Ξ {(ethUtils.fromWei(tx.value) * -1).toFixed(3).toLocaleString()}</Text>;
  }

  let icon = 'https://pbs.twimg.com/profile_images/626149701189042177/LWpxKEv3.png';
  let title = '';
  let description = tx.address;
  if (tx.type === 'service' && tx.service.icon) {
    icon = tx.service.icon;
    title = tx.service.name;
    description = tx.service.description;
  } else {
    title = 'Receive';
    if (tx.type === 'send') {
      title = 'Send';
    }
  }

  let time = moment(tx.time).fromNow();
  if (moment(tx.time).isAfter(moment().subtract(1, 'hour'))) {
    time = 'Just now';
  }

  return (
    <View style={styles.viewRow}>
      <View style={styles.viewAvatar}>
        <Image style={styles.imgIcon} source={{ uri: icon }} />
      </View>
      <View style={styles.viewDetails}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtTime}>{time}</Text>
        <Text style={styles.txtDescription}>{description}</Text>
      </View>
      <View style={styles.viewEth}>
        {txtValue}
      </View>
    </View>
  );
}

