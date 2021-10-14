import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = ({
  title,
  children,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
}) => {
  const iconButtonPlus = (
    <Icon name="insert-chart" style={styles.actionButtonIcon} />
  );
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
      {(actionLabelText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}
          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}>
              {iconButtonPlus}
              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    //flex: 1
    margin: 5,
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Colors.carbon,
    backgroundColor: Colors.asphalt,
    padding: 10,
  },
  title: {
    fontSize: 12,
    color: Colors.white,
    marginTop: 5,
    marginBottom: 6,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionLabel: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    marginTop: 10,
  },
  actionButtonIcon: {
    fontSize: 12,
    color: Colors.white,
    marginRight: 2,
    marginTop: 1,
  },
  actionButtonText: {
    fontSize: 12,
    color: Colors.white,
  },
});
