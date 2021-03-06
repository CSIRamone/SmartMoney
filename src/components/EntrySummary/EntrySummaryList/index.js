import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>
            {item.key} - {item.description} - ${item.amount}{' '}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default EntrySummaryList;
