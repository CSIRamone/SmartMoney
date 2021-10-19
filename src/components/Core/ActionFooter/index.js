import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Colors from '../../../styles/Colors';

const ActionFooter = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryTextButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryTextButton}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingVertical: 10,
    marginBottom: 30,
  },
  primaryButton: {
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.greenDark,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  primaryTextButton: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.green,
  },
  secondaryButton: {
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.orangeDark,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryTextButton: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.orange,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ActionFooter;
