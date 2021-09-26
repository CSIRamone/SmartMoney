import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {getEntries} from '../../services/Entries';

const EntryList = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntries();
      setEntries(data);
    };

    loadEntries();
    console.log('EntryList :: useEffect');
  }, []);

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
