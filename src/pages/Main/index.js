import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';

const Main = ({navigation}) => {
  const entriesGrouped = [
    {key: '1', description: 'Alimentação: ', amount: 201},
    {key: '2', description: 'Combustível: ', amount: 12},
    {key: '3', description: 'Aluguel: ', amount: 120},
    {key: '4', description: 'Lazer: ', amount: 250},
    {key: '5', description: 'Outros: ', amount: 1200},
  ];

  const entries = [
    {key: '1', description: 'Padaria ', amount: 14.0},
    {key: '2', description: 'Mercado Giasi ', amount: 145.0},
    {key: '3', description: 'Posto Padre Reus', amount: 230.0},
  ];

  const currentBalanc = 2102.55;
  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalanc} />
      <Button
        title="Adicionar "
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
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
