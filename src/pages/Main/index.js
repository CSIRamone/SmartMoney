import React from 'react';
import {View, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  const entriesGrouped = [
    {key: '1', description: 'Alimentação: ', amount: 201},
    {key: '2', description: 'Combustível: ', amount: 12},
    {key: '3', description: 'Aluguel: ', amount: 120},
    {key: '4', description: 'Lazer: ', amount: 250},
    {key: '5', description: 'Outros: ', amount: 1200},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList navigation={navigation} />
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
