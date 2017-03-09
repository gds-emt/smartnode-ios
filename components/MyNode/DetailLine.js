import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  viewDetailLine: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
});

export default function DetailLine(props) {
  return (
    <View style={styles.viewDetailLine}>
      <Text style={styles.txtHeader}>{props.header}</Text>
      <Text style={styles.txtBody}>{props.body}</Text>
    </View>
  );
}

