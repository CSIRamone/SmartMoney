import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../styles/Colors';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <LinearGradient
      colors={[Colors.violet, Colors.blue]}
      style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </LinearGradient>
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
