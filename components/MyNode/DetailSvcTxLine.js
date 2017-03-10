import React from 'react';
import {
  StyleSheet,
  Text,
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
    flex: 3,
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
  },
  txtHeader: {
    fontSize: 14,
    color: '#999',
    textAlign: 'right',
    marginBottom: 1,
    marginRight: 10,
  },
  txtBody: {
    fontSize: 14,
    color: '#444',
    marginBottom: 1,
  },
  txtBodyWithLink: {
    fontSize: 14,
    color: '#6498FF',
    marginBottom: 1,
  },
  txtBodySmall: {
    fontSize: 12,
    color: '#444',
    marginBottom: 1,
  },
});

export default function DetailSvcTxLine(props) {
  const line = props.line;
  let styleTxtBody = styles.txtBody;
  if (line.showAsWithLink) {
    styleTxtBody = styles.txtBodyWithLink;
  } else if (line.small) {
    styleTxtBody = styles.txtBodySmall;
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

