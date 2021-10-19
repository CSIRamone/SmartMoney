import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import Colors from '../../styles/Colors';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

const Report = ({navigation}) => {
  const onClose = () => {
    return navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
          <Picker.Item label="ültimos 7 dias" />
        </Picker>
      </View>
      <ScrollView>
        <EntrySummary />
        <EntryList />
      </ScrollView>
      <ActionFooter>
        <ActionPrimaryButton title="Fechar" onPress={onClose} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Report;
