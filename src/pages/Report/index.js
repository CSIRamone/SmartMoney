import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';

const Report = () => {
  const currentBalanc = 2062.45;
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

  return (
    <View style={styles.container}>
      <Text>Report</Text>
      <BalanceLabel currentBalance={currentBalanc} />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
          <Picker.Item label="ültimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 20,
    paddingTop: 50,
  },
});

export default Report;
