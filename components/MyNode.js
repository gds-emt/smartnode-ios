import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class MyNode extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1.6, backgroundColor: 'skyblue'}} />
      </View>
    );
  }
}
