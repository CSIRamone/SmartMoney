import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Rect, Circle} from 'react-native-svg';
import Colors from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EntryListItem = ({entry, isFirstItem, isLastItem}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletHeight = isLastItem ? 30 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = Colors.metalDark;
  return (
    // y - distanacia do teto - 0 eh o teto ||| distancia do teto - 50 eh a Base
    // height - distancia da base - 0 eh a base ||| distancia da base - 50 eh o Teto
    <View style={styles.container}>
      <View style={styles.bullet}>
        <Svg height="50" width="30">
          {showBulletLine && (
            <Rect
              x="10"
              y={bulletLineY}
              width="2"
              height={bulletHeight}
              fill={Colors.greenDark}
            />
          )}
          <Circle
            cx="11"
            cy="25"
            r={10}
            stroke={Colors.greenDark}
            strokeWidth="2"
            fill={bulletColor}
          />
        </Svg>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{entry.description}</Text>

        <View style={styles.details}>
          <Icon style={styles.iconDetailsDate} name="history" size={17} />
          <Text style={styles.detailsDate}>{entry.entryAt.toString()}</Text>

          {entry.address && (
            <>
              <Icon
                style={styles.iconDetailsLocation}
                name="location-on"
                size={17}
              />
              <Text style={styles.detailsLocation}>{entry.address}</Text>
            </>
          )}
        </View>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amountText}>$10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'center',
  },
  amount: {
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
  },
  iconDetailsDate: {
    color: Colors.metal,
    marginRight: 3,
  },
  iconDetailsLocation: {
    color: Colors.metal,
    marginLeft: 10,
    marginRight: 3,
  },
  detailsLocation: {
    color: Colors.metal,
  },
  detailsDate: {
    color: Colors.metal,
  },
});

export default EntryListItem;
