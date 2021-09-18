import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EntryListItem = () => {
  return (
    <View>
      <Text style={styles.label}>Últimos Lançamentos</Text>
      <Text>EntryListItem</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default EntryListItem;
