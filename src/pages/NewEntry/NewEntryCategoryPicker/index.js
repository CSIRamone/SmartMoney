import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategoryModal from '../../../components/CategoryModal';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);

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
        <CategoryModal
          categoryType={debit ? 'debit' : 'credit'}
          isVisible={modalVisible}
          onConfirm={onCategoryPress}
          onCancel={onClosePressModal}
        />
      </SafeAreaView>
    </View>
  );
};

export default NewEntryCategoryPicker;

const styles = StyleSheet.create({
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
