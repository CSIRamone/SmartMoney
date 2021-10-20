import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import Colors from '../../styles/Colors';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RelativeDaysModal from '../../components/RelativeDaysModal';

const Report = ({navigation}) => {
  const [relativeDaysModalVisible, setRelativeDaysModalVisible] =
    useState(false);

  const [relativeDays, setRelativeDays] = useState(7);

  const onRelativeDaysPress = item => {
    setRelativeDays(item);
    onRelativeDaysClosePress();
  };

  const onRelativeDaysClosePress = () => {
    setRelativeDaysModalVisible(false);
  };

  const onClose = () => {
    return navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            setRelativeDaysModalVisible(true);
          }}>
          <Text style={styles.filterTextButton}>Últimos 7 dias</Text>
          <Icon
            name="keyboard-arrow-down"
            size={30}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>
        <RelativeDaysModal
          isVisible={relativeDaysModalVisible}
          onConfirm={onRelativeDaysPress}
          onClose={onRelativeDaysClosePress}
        />
      </View>
      <ScrollView>
        <EntrySummary />
        <EntryList days={relativeDays} />
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
  filterButton: {
    flexDirection: 'row',
    borderColor: Colors.champagneDark,
    borderWidth: 1,
    borderRadius: 150,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  filterTextButton: {
    color: Colors.champagneDark,
  },
});

export default Report;
