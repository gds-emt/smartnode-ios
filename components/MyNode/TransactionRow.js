import moment from 'moment';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import utils from './../../lib/utils';
import Detail from './Detail';

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
    flex: 2,
  },
  txtTitle: {
    fontSize: 18,
  },
  txtTime: {
    fontSize: 14,
    paddingTop: 2,
    color: '#666',
  },
  txtDescription: {
    fontSize: 14,
    color: '#999',
    paddingTop: 2,
  },
  txtValuePositive: {
    textAlign: 'right',
    color: '#87B757',
    fontSize: 18,
  },
  txtValueNegative: {
    textAlign: 'right',
    color: '#FD677C',
    fontSize: 18,
  },
  imgIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

// export default function TransactionRow(props) {
export default class TransactionRow extends React.Component {
  constructor(props) {
    super(props);

    this.viewDetail = this.viewDetail.bind(this);
  }

  viewDetail(prepped) {
    if (this.props.transaction.demo) {
      return false;
    }

    return this.props.navigator.push({
      component: Detail,
      title: '',
      translucent: false,
      barTintColor: '#eee',
      shadowHidden: true,
      navigationBarHidden: false,
      passProps: {
        navigator: this.props.navigator,
        transaction: this.props.transaction,
        ethsgd: this.props.ethsgd,
        prepped,
      },
    });
  }

  render() {
    const tx = this.props.transaction;

    let txtValue = <Text style={styles.txtValuePositive}>Ξ {utils.fromWei(tx.value, 4).toLocaleString()}</Text>;
    if (Number(tx.value) < 0) {
      txtValue = <Text style={styles.txtValueNegative}>Ξ {(utils.fromWei(tx.value, 4) * -1).toFixed(4).toLocaleString()}</Text>;
    }

    let icon = 'https://pbs.twimg.com/profile_images/626149701189042177/LWpxKEv3.png';
    let title = '';
    let description = utils.friendlyAddress(tx.address);
    if (tx.type === 'service' && tx.service.icon) {
      icon = tx.service.icon;
      title = tx.service.name;
      description = tx.service.description;
    } else {
      if (tx.type === 'send') {
        title = 'Send';
        description = `To ${description}`;
      } else {
        title = 'Receive';
        description = `From ${description}`;
      }
    }

    let time = moment.unix(tx.timestamp).fromNow();
    if (moment.unix(tx.timestamp).isAfter(moment().subtract(1, 'hour'))) {
      time = 'Just now';
    }

    return (
      <TouchableHighlight onPress={() => { this.viewDetail({ icon, title, description, time }); }}>
        <View style={styles.viewRow}>
          <View style={styles.viewAvatar}>
            <Image style={styles.imgIcon} source={{ uri: icon }} />
          </View>
          <View style={styles.viewDetails}>
            <Text style={styles.txtTitle}>{title}</Text>
            <Text style={styles.txtTime}>{time}</Text>
            <Text style={styles.txtDescription}>{description}</Text>
          </View>
          <View style={styles.viewEth}>{txtValue}</View>
        </View>
      </TouchableHighlight>
    );
  }
}
