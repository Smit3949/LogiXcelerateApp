import React, {useMemo} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {FontSize, FontFamily, Color} from '../GlobalStyles';

export type BarsStatusBarIPhoneTType = {
  /** Style props */
  barsStatusBarIPhoneTPosition?: string;
  barsStatusBarIPhoneTBackgroundColor?: string;
  barsStatusBarIPhoneTWidth?: number | string;
  barsStatusBarIPhoneTHeight?: number | string;
  barsStatusBarIPhoneTTop?: number | string;
  barsStatusBarIPhoneTRight?: number | string;
  barsStatusBarIPhoneTBottom?: number | string;
  barsStatusBarIPhoneTLeft?: number | string;
  timeColor?: string;
  timeWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const BarsStatusBarIPhoneT = ({
  barsStatusBarIPhoneTPosition,
  barsStatusBarIPhoneTBackgroundColor,
  barsStatusBarIPhoneTWidth,
  barsStatusBarIPhoneTHeight,
  barsStatusBarIPhoneTTop,
  barsStatusBarIPhoneTRight,
  barsStatusBarIPhoneTBottom,
  barsStatusBarIPhoneTLeft,
  timeColor,
  timeWidth,
}: BarsStatusBarIPhoneTType) => {
  const barsStatusBarIPhoneTStyle = useMemo(() => {
    return {
      ...getStyleValue('position', barsStatusBarIPhoneTPosition),
      ...getStyleValue('backgroundColor', barsStatusBarIPhoneTBackgroundColor),
      ...getStyleValue('width', barsStatusBarIPhoneTWidth),
      ...getStyleValue('height', barsStatusBarIPhoneTHeight),
      ...getStyleValue('top', barsStatusBarIPhoneTTop),
      ...getStyleValue('right', barsStatusBarIPhoneTRight),
      ...getStyleValue('bottom', barsStatusBarIPhoneTBottom),
      ...getStyleValue('left', barsStatusBarIPhoneTLeft),
    };
  }, [
    barsStatusBarIPhoneTPosition,
    barsStatusBarIPhoneTBackgroundColor,
    barsStatusBarIPhoneTWidth,
    barsStatusBarIPhoneTHeight,
    barsStatusBarIPhoneTTop,
    barsStatusBarIPhoneTRight,
    barsStatusBarIPhoneTBottom,
    barsStatusBarIPhoneTLeft,
  ]);

  const timeStyle = useMemo(() => {
    return {
      ...getStyleValue('color', timeColor),
      ...getStyleValue('width', timeWidth),
    };
  }, [timeColor, timeWidth]);

  return (
    <View style={[styles.barsStatusBarIphoneT, barsStatusBarIPhoneTStyle]}>
      <Text style={[styles.time, timeStyle]}>9:41</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    position: 'absolute',
    marginTop: -3.5,
    top: '50%',
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: '600',
    fontFamily: FontFamily.robotoBold,
    color: Color.white,
    textAlign: 'center',
    width: 54,
  },
  barsStatusBarIphoneT: {
    backgroundColor: Color.shadesBlack,
    height: 21,
    width: 54,
  },
});

export default BarsStatusBarIPhoneT;
