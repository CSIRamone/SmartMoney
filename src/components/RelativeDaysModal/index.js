import React from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../styles/Colors';
import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

const RelativeDaysModal = ({isVisible, onConfirm, onCancel}) => {
  const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <View style={styles.modal}>
          <FlatList
            data={relativeDays}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => {
                  onConfirm(item);
                }}>
                <Text style={styles.modalItemText}>{`${item} dias`}</Text>
              </TouchableOpacity>
            )}
          />
          <ActionFooter>
            <ActionPrimaryButton title="Fechar" onPress={onCancel} />
          </ActionFooter>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 40,
  },
  modalItem: {
    borderColor: Colors.blueDark,
    borderWidth: 1,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    marginVertical: 8,
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default RelativeDaysModal;
