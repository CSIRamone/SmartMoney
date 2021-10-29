import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BarChart, Grid} from 'react-native-svg-charts';

const BalancePanelChart = () => {
  const data = [100, 80, -20, 300, 29, 89, 45];
  return (
    <View sytle={styles.container}>
      <BarChart
        style={styles.barChart}
        data={data}
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
