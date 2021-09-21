import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

const EntryList = ({entries}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text>
            {item.key} - {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 30,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default EntryList;
