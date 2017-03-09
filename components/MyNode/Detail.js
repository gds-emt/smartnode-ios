import moment from 'moment';
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import utils from './../../lib/utils';

const styles = StyleSheet.create({
  viewUpper: {
    flex: 1,
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
  },
  imgIcon: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
  },
  txtTime: {
    color: '#999',
    fontSize: 16,
    marginTop: 2,
  },
});

export default function Detail(props) {
  console.log(props.prepped);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.viewUpper}>
        <Image style={styles.imgIcon} source={{ uri: props.prepped.icon }} />
        <Text style={styles.txtTitle}>{props.prepped.title}</Text>
        <Text style={styles.txtTime}>{props.prepped.time}</Text>
        <View style={styles.viewEth}>{props.prepped.txtValue}</View>
      </View>
      <View style={styles.viewMain}>
        <Text>Main</Text>
      </View>
    </View>
  );
}

