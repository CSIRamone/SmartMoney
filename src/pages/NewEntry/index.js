import React from 'react';
import {View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = ({navigation}) => {
  const currentBalanc = 2062.45;
  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalanc} />
      <View>
        <SafeAreaView>
          <TextInput style={styles.input} placeholder="Valor $" />
          <TextInput style={styles.input} placeholder="Descrição" />
          <Button title="GPS" />
          <Button title="Camera" />
        </SafeAreaView>
        <View>
          <Button title="Adicionar" />
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
