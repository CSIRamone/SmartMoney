import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import Colors from '../../styles/Colors';
import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import {saveEntry} from '../../services/Entries';
import {deleteEntry} from '../../services/Entries';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';

const NewEntry = ({navigation, route}) => {
  const entry = route.params?.entry
    ? route.params.entry
    : {
        id: null,
        amount: 0.0,
        category: {id: null, name: 'Selecione'},
        entryAt: new Date(),
      };
  const [debit, setDebit] = useState(entry.amount <= 0);
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
      category: category,
      entryAt: entryAt,
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
      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount}
          onChangeValue={setAmount}
          onChangeDebit={setDebit}
        />
        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />
        <View style={styles.formActionContainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
        </View>
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
  },
  formContainer: {
    flex: 1,
  },
  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 70,
  },
});

export default NewEntry;
