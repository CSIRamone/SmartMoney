import {isTemplateElement} from '@babel/types';
import React from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../styles/Colors';
import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

const RelativeDaysModal = ({isVisible, onConfirm, onCancel}) => {
  const relativDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modal}>
        <FlatList
          data={relativDays}
          keyExtractor={item => item.toString()}
          rederItem={({item}) => (
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => onConfirm(item)}>
              <Text style={styles.modalItemText}>{`${item} dias`}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <ActionFooter>
        <ActionPrimaryButton title="Fechar" onPress={onCancel} />
      </ActionFooter>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalItem: {
    borderColor: Colors.champagneDark,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default RelativeDaysModal;
