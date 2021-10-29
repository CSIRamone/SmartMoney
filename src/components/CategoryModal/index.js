import React from 'react';
import {
  Modal,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';
import Colors from '../../styles/Colors';
import useCategories from '../../hooks/useCategories';

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
  const [debitCategories, creditCategories, allCategories] = useCategories();

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modal}>
        <FlatList
          data={
            categoryType === 'all'
              ? allCategories
              : categoryType === 'debit'
              ? debitCategories
              : creditCategories
          }
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                onConfirm(item);
              }}>
              <Text style={[styles.modalItemText, {color: item.color}]}>
                {item.name}
              </Text>
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
    padding: 28,
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    padding: 15,
    borderRadius: 15,
    marginVertical: 11,
    marginHorizontal: 30,
  },
  modalItemText: {
    fontSize: 22,
    textAlign: 'center',
    color: Colors.white,
  },
});

export default CategoryModal;
