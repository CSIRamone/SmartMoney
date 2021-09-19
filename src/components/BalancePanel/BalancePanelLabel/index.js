import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  label: {
    fontSize: 24,
  },
  value: {
    fontSize: 38,
  },
});

export default BalancePanelLabel;
