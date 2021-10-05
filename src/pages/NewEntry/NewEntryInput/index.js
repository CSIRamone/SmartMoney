import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import Colors from '../../../styles/Colors';

const NewEntryInput = ({value, onChangeValue}) => {
  const [debit, setDebit] = useState(value < 0 ? -1 : 1);
  const [debitPrefix, setDebitPrefix] = useState(value < 0 ? '-' : '');

  const onChangeDebitCredit = () => {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
    } else {
      setDebit(-1);
      setDebitPrefix('-');
    }
    onChangeValue(value * -1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.debitButton}
        onPress={onChangeDebitCredit}>
        <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
        <Text style={styles.debitButtonText}>R$</Text>
      </TouchableOpacity>
      <TextInputMask
        style={styles.inputMask}
        type={'money'}
        options={{
          precision: 2,
          separetor: ',',
          delimiter: '.',
          unit: ' ',
          suffixUnit: ' ',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue * debit);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  debitButton: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  debitButtonPrefix: {
    fontSize: 28,
    color: Colors.white,
    minWidth: 12,
  },
  debitButtonText: {
    fontSize: 28,
    color: Colors.white,
  },
  inputMask: {
    flex: 1,
    fontSize: 28,
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 30,
    marginVertical: 8,
    color: Colors.white,
    textAlign: 'right',
    paddingLeft: 0,
    paddingRight: 20,
  },
});

export default NewEntryInput;
