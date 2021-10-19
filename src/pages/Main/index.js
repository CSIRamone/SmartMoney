import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <ScrollView>
        <EntrySummary
          onPressActionButton={() => navigation.navigate('Report')}
        />
        <EntryList
          onEntryPress={entry =>
            navigation.navigate('NewEntry', {entry: entry})
          }
          onPressActionButton={() => navigation.navigate('Report')}
        />
      </ScrollView>
    </SafeAreaView>
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
