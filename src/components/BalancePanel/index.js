import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import Colors from '../../styles/Colors';
import useBalance from '../../hooks/useBalance';

const BalancePanel = ({onNewEntryPress}) => {
  const [balance] = useBalance();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={balance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Text>
          <Icon name="add" size={30} color={Colors.white} />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BalancePanel;

const styles = StyleSheet.create({
  container: {
    marginBottom: -23,
  },
  panel: {},
  button: {
    backgroundColor: Colors.green,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: -25,
    marginRight: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: Colors.white,
  },
});
