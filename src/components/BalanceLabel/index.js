import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../styles/Colors';

const BalanceLabel = () => {
  const currentBalanc = 2062.45;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>{currentBalanc}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
  },
  label: {
    fontSize: 22,
    color: Colors.white,
  },
  panel: {
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  value: {
    fontSize: 38,
  },
});

export default BalanceLabel;
