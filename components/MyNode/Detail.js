import moment from 'moment';
import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import utils from './../../lib/utils';
import DetailLine from './DetailLine';

const styles = StyleSheet.create({
  viewUpper: {
    flex: 1,
    marginTop: -10,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMain: {
    flex: 2,
    backgroundColor: 'white',
  },
  viewEth: {
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLink: {
    marginTop: 20,
  },
  imgIcon: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: '#999',
    borderWidth: 1,

  },
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  txtTime: {
    color: '#999',
    fontSize: 14,
    marginTop: 2,
  },
  txtValuePositive: {
    color: '#64B710',
    fontSize: 18,
  },
  txtValueNegative: {
    color: '#FD405A',
    fontSize: 18,
  },
  txtValuePositiveSGD: {
    color: '#87B757',
    fontSize: 12,
    marginTop: 2,
  },
  txtValueNegativeSGD: {
    color: '#FD97A6',
    fontSize: 12,
    marginTop: 2,
  },
  txtLink: {
    color: '#1060FF',
    fontSize: 16,
    padding: 10,
    backgroundColor: 'white',
  },
  scrollViewBottomPadding: {
    marginBottom: 100,
  },
});

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.openBlockExplorer = this.openBlockExplorer.bind(this);
  }

  openBlockExplorer() {
    return Linking.openURL(`http://kovan.etherscan.io/tx/${this.props.transaction.transactionHash}`);
  }

  render() {
    const props = this.props;
    const tx = props.transaction;

    let txtValue = <Text style={styles.txtValuePositive}>Ξ {utils.fromWei(tx.value).toLocaleString()}</Text>;
    let txtSgd = <Text style={styles.txtValuePositiveSGD}>S$ {(utils.fromWei(tx.value) * props.ethsgd).toLocaleString()}</Text>;

    if (Number(tx.value) < 0) {
      txtValue = <Text style={styles.txtValueNegative}>Ξ {(utils.fromWei(tx.value) * -1).toFixed(3).toLocaleString()}</Text>;
      txtSgd = <Text style={styles.txtValueNegativeSGD}>S$ {(utils.fromWei(tx.value) * -1 * props.ethsgd).toLocaleString()}</Text>;
    }

    const lines = [];
    if (tx.type !== 'service') {
      lines.push({
        header: 'Ethereum block',
        body: tx.blockNumber.toLocaleString(),
      });
      lines.push({
        header: 'Time',
        body: moment.unix(tx.timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a'),
      });
      lines.push({
        header: (tx.type === 'receive') ? 'Sender' : 'Recipient',
        body: tx.address,
      });
      lines.push({
        header: 'Value',
        body: `Ξ ${utils.fromWei(tx.value, 6).toLocaleString()}`,
      });
      lines.push({
        header: 'Transaction hash',
        body: tx.transactionHash,
      });
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.viewUpper}>
          <Image style={styles.imgIcon} source={{ uri: props.prepped.icon }} />
          <Text style={styles.txtTitle}>{props.prepped.title}</Text>
          <Text style={styles.txtTime}>{props.prepped.time}</Text>
          <View style={styles.viewEth}>
            {txtValue}
            {txtSgd}
          </View>
        </View>
        <View style={styles.viewMain}>
          <ScrollView>
            {lines.map((line, i) => <DetailLine key={i} header={line.header} body={line.body} />)}

            <View style={styles.viewLink}>
              <TouchableHighlight onPress={() => { this.openBlockExplorer(); }}>
                <Text style={styles.txtLink}>View on Block Explorer</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.scrollViewBottomPadding}>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

