import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {getEntries} from '../../services/Entries';
import Container from '../Core/Container';
import EntryListItem from './EntryListItem';

const EntryList = ({days = 7, onEntryPress, onPressActionButton}) => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntries(days);
      setEntries(data);
    };

    loadEntries();
    console.log('EntryList :: useEffect');
  }, [days]);

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={onEntryPress}
          />
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default EntryList;
