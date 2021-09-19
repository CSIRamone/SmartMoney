import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = ({currentBalance}) => {
  const currentBalanc = 2102.55;
  return (
    <View style={styles.container}>
      <BalancePanelLabel currentBalance={currentBalanc} />
      <BalancePanelChart />
    </View>
  );
};

export default BalancePanel;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
