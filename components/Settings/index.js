import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import WalletAddress from './WalletAddress';
import Marketplace from './Marketplace';

const styles = StyleSheet.create({
  viewPreferences: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function Settings() {
  return (
    <ScrollView style={styles.viewPreferences}>
      <WalletAddress />
      <Marketplace />
    </ScrollView>
  );
}
