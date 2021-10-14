import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Colors from '../../../styles/Colors';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </SafeAreaView>
  );
};

export default BalancePanelLabel;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
  value: {
    fontSize: 36,
    color: Colors.white,
  },
});
