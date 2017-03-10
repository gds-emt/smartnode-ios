import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  viewDetailLine: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
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
  txtBodyWithLink: {
    fontSize: 14,
    color: '#1060FF',
  },
});

export default function DetailLine(props) {
  let response = (
    <View style={styles.viewDetailLine}>
      <Text style={styles.txtHeader}>{props.header}</Text>
      <Text style={styles.txtBody}>{props.body}</Text>
    </View>
  );

  if (props.url) {
    response = (
      <TouchableHighlight onPress={() => Linking.openURL(props.url)}>
        <View style={styles.viewDetailLine}>
          <Text style={styles.txtHeader}>{props.header}</Text>
          <Text style={styles.txtBodyWithLink}>{props.body}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  return response;
}

