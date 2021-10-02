import React from 'react';
import {View, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary />
      <EntryList />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  label: {
    //  fontSize: 38,
  },
});
