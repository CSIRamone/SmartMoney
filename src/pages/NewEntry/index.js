import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import {saveEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  const [entry, setEntry] = useState('0');

  const save = () => {
    //saveEntry;
    console.log('Entry :: save ', entry);
  };

  const currentBalanc = 2062.45;
  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalanc} />
      <View>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            placeholder="Valor $"
            onChangeText={text => setEntry(text)}
            value={entry}
          />
          <TextInput style={styles.input} placeholder="Descrição" />
          <Button title="GPS" />
          <Button title="Camera" />
        </SafeAreaView>
        <View>
          <Button title="Adicionar" onPress={save} />
          <Button title="Cancelar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
});

export default NewEntry;
