import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalanceLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>$2.062,45</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 50,
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 22,
  },
  value: {
    fontSize: 38,
  },
});

export default BalanceLabel;
