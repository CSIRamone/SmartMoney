import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import {saveEntry} from '../../services/Entries';
import {deleteEntry} from '../../services/Entries';
const NewEntry = ({navigation, route}) => {
  const entry = route.params?.entry
    ? route.params.entry
    : {
        id: null,
        amount: 0.0,
        //entryAt: new Date(),
      };
  const [amount, setAmount] = useState(`${entry.amount}`);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
    };
    saveEntry(data, entry);
    onClose();
    console.log('Entry :: onSave ', data);
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
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
          <Button
            title="Adicionar"
            onPress={() => {
              isValid() && onSave();
            }}
          />
          <Button title="Excluir" onPress={onDelete} />
          <Button title="Cancelar" onPress={onClose} />
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
