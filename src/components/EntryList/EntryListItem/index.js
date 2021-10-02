import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Rect, Circle} from 'react-native-svg';
import Colors from '../../../styles/Colors';

const EntryListItem = ({entry, isFirstItem, isLastItem}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletHeight = isLastItem ? 30 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = Colors.metalDark;
  return (
    // y - distanacia do teto - 0 eh o teto ||| distancia do teto - 50 eh a Base
    // height - distancia da base - 0 eh a base ||| distancia da base - 50 eh o Teto
    <View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default EntryListItem;
