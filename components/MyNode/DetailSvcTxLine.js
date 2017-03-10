import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  viewLine: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },
  viewHeader: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
  },
  viewBody: {
    flex: 1.8,
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
  },
  txtHeader: {
    fontSize: 10,
    color: '#999',
    textAlign: 'left',
  },
  txtBody: {
    fontSize: 10,
    color: '#444',
  },
  txtBodyWithLink: {
    fontSize: 10,
    color: '#6498FF',
  }
});

export default function DetailSvcTxLine(props) {
  const line = props.line;
  let styleTxtBody = styles.txtBody;
  if (line.showAsWithLink) {
    styleTxtBody = styles.txtBodyWithLink;
  }

  return (
    <View style={styles.viewLine}>
      <View style={styles.viewHeader}>
        <Text style={styles.txtHeader}>{line.header}</Text>
      </View>
      <View style={styles.viewBody}>
        <Text style={styleTxtBody}>{line.body}</Text>
      </View>
    </View>
  );
}

