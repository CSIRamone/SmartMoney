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
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClosePressModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: 69,
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  modalItemText: {
    fontSize: 22,
    textAlign: 'center',
    color: Colors.white,
  },
  pickerButton: {
    backgroundColor: Colors.asphalt,
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  pickerButtonText: {
    fontSize: 28,
    textAlign: 'center',
    color: Colors.white,
  },
  closeButton: {
    backgroundColor: Colors.background,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: Colors.green,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    marginBottom: 40,
    alignSelf: 'center',
  },
  closeButtonText: {
    fontSize: 14,
    color: Colors.green,
    textAlign: 'center',
  },
});
