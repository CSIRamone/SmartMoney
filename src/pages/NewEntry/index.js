import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import {saveEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  const [amount, setAmount] = useState('0.00');

  const save = () => {
    const value = {
      amount: parseFloat(amount),
    };
    saveEntry(value);
    console.log('Entry :: save ', value);
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
            onChangeText={text => setAmount(text)}
            value={amount}
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
