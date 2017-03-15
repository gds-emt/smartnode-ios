import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import WalletAddress from './WalletAddress';

const styles = StyleSheet.create({
  viewPreferences: {
  },
});

export default function Settings() {
  return (
    <View style={styles.viewPreferences}>
      <WalletAddress />
    </View>
  );
}
