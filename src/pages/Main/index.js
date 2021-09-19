import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';

const Main = ({navigation}) => {
  const currentBalanc = 2102.55;
  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalanc} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
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
