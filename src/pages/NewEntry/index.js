import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import Colors from '../../styles/Colors';
import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
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
  const [amount, setAmount] = useState(entry.amount);

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

  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <NewEntryInput value={amount} onChangeValue={setAmount} />
        <TextInput style={styles.input} placeholder="Descrição" />
        <Button title="GPS" />
        <Button title="Camera" />
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
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  input: {},
});

export default NewEntry;
