import React from 'react';
import {View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = () => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <SafeAreaView>
          <TextInput style={styles.input} placeholder="Valor $" />
          <TextInput style={styles.input} placeholder="Descrição" />
          <Button title="GPS" />
          <Button title="Camera" />
        </SafeAreaView>
        <View>
          <Button title="Adicionar" />
          <Button title="Cancelar" />
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
