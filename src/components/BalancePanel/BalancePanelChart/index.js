import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BarChart} from 'react-native-svg-charts';
import useBalanceSumByDate from '../../../hooks/useBalanceSumByDate';

const BalancePanelChart = () => {
  const [balanceSum] = useBalanceSumByDate();
  return (
    <View sytle={styles.container}>
      <BarChart
        style={styles.barChart}
        data={balanceSum}
        svg={{
          fill: 'rgba(0,0,0, .2)',
          stroke: 'rgba(0,0,0, .2)',
          strokeWidth: 1,
        }}
        contentInset={{top: 0, bottom: 0}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: -20,
    marginBottom: 5,
  },
  barChart: {
    height: 80,
  },
});

export default BalancePanelChart;
