import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../../components/Core/ActionFooter';

import {
  getDebitCategories,
  getCreditCategories,
} from '../../../services/Categories';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [debitCategories, setDebitCategories] = useState([]);
  const [creditCategories, setCreditCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      setDebitCategories(await getDebitCategories());
      setCreditCategories(await getCreditCategories());
    }

    loadCategories();
    console.log('NewEntryCategoryPicker :: useEffect');
    // console.log(`LoadCategories :: ${JSON.stringify(debitCategories)}`);
    //console.log(`LoadCategories :: ${JSON.stringify(creditCategories)}`);
  }, []);

  const onCategoryPress = item => {
    onChangeCategory(item);
    onClosePressModal();
  };

  const onClosePressModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <SafeAreaView>
        <Modal animationType="slide" transparent={false} visible={modalVisible}>
          <View style={styles.modal}>
            <FlatList
              data={debit ? debitCategories : creditCategories}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    onCategoryPress(item);
                  }}>
                  <Text style={[styles.modalItemText, {color: item.color}]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <ActionFooter>
            <ActionPrimaryButton title="Fechar" onPress={onClosePressModal} />
          </ActionFooter>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default NewEntryCategoryPicker;

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
  pickerButton: {
    backgroundColor: Colors.asphalt,
    padding: 15,
    borderRadius: 15,
    marginVertical: 11,
    marginHorizontal: 30,
  },
  pickerButtonText: {
    fontSize: 28,
    textAlign: 'center',
    color: Colors.white,
  },
});
