import React from 'react';
import {View, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';

const Main = () => {
  return (
    <View style={styles.container}>
      <BalancePanel />
      <EntrySummary />
      <EntryList />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    // padding: 10,
    // paddingTop: 50,
  },
  label: {
    //  fontSize: 38,
  },
});
