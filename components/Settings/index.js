import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Wallet from './Wallet';
import Marketplace from './Marketplace';

const styles = StyleSheet.create({
  viewPreferences: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function Settings(props) {
  return (
    <ScrollView style={styles.viewPreferences}>
      <Wallet />
      <Marketplace SmartNode={props.SmartNode} />
    </ScrollView>
  );
}
