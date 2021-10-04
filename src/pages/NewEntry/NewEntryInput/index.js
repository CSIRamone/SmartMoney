import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import Colors from '../../../styles/Colors';

const NewEntryInput = ({value, onChangeValue}) => {
  return (
    <View>
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
          onChangeValue(rawValue);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputMask: {
    fontSize: 28,
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 30,
    marginVertical: 8,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default NewEntryInput;
