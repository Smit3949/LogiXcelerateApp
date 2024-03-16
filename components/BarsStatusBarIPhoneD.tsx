import React, {useMemo} from 'react';
import {StyleSheet, View, Text, ImageSourcePropType} from 'react-native';
// import {Image} from 'expo-image';
import BarsStatusBarIPhoneT from './BarsStatusBarIPhoneT';
import {Color} from '../GlobalStyles';

export type BarsStatusBarIPhoneDType = {
  cap?: ImageSourcePropType;
  wifi?: ImageSourcePropType;
  cellularConnection?: ImageSourcePropType;

  /** Style props */
  barsStatusBarIPhoneDPosition?: string;
  barsStatusBarIPhoneDBackgroundColor?: string;
  barsStatusBarIPhoneDWidth?: number | string;
  barsStatusBarIPhoneDHeight?: number | string;
  barsStatusBarIPhoneDTop?: number | string;
  barsStatusBarIPhoneDRight?: number | string;
  barsStatusBarIPhoneDBottom?: number | string;
  barsStatusBarIPhoneDLeft?: number | string;
  batteryWidth?: number | string;
  batteryRight?: number | string;
  batteryLeft?: number | string;
  borderWidth?: number | string;
  borderRight?: number | string;
  borderBorderColor?: string;
  capIconWidth?: number | string;
  capIconLeft?: number | string;
  capIconRight?: number | string;
  capacityWidth?: number | string;
  capacityRight?: number | string;
  capacityLeft?: number | string;
  capacityBackgroundColor?: string;
  wifiIconWidth?: number | string;
  cellularConnectionIconWidth?: number | string;
  timeStyleWidth?: number | string;
  timeStyleLeft?: number | string;
  timeColor?: string;
  timeWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const BarsStatusBarIPhoneD = ({
  cap,
  wifi,
  cellularConnection,
  barsStatusBarIPhoneDPosition,
  barsStatusBarIPhoneDBackgroundColor,
  barsStatusBarIPhoneDWidth,
  barsStatusBarIPhoneDHeight,
  barsStatusBarIPhoneDTop,
  barsStatusBarIPhoneDRight,
  barsStatusBarIPhoneDBottom,
  barsStatusBarIPhoneDLeft,
  batteryWidth,
  batteryRight,
  batteryLeft,
  borderWidth,
  borderRight,
  borderBorderColor,
  capIconWidth,
  capIconLeft,
  capIconRight,
  capacityWidth,
  capacityRight,
  capacityLeft,
  capacityBackgroundColor,
  wifiIconWidth,
  cellularConnectionIconWidth,
  timeStyleWidth,
  timeStyleLeft,
  timeColor,
  timeWidth,
}: BarsStatusBarIPhoneDType) => {
  const barsStatusBarIPhoneDStyle = useMemo(() => {
    return {
      ...getStyleValue('position', barsStatusBarIPhoneDPosition),
      ...getStyleValue('backgroundColor', barsStatusBarIPhoneDBackgroundColor),
      ...getStyleValue('width', barsStatusBarIPhoneDWidth),
      ...getStyleValue('height', barsStatusBarIPhoneDHeight),
      ...getStyleValue('top', barsStatusBarIPhoneDTop),
      ...getStyleValue('right', barsStatusBarIPhoneDRight),
      ...getStyleValue('bottom', barsStatusBarIPhoneDBottom),
      ...getStyleValue('left', barsStatusBarIPhoneDLeft),
    };
  }, [
    barsStatusBarIPhoneDPosition,
    barsStatusBarIPhoneDBackgroundColor,
    barsStatusBarIPhoneDWidth,
    barsStatusBarIPhoneDHeight,
    barsStatusBarIPhoneDTop,
    barsStatusBarIPhoneDRight,
    barsStatusBarIPhoneDBottom,
    barsStatusBarIPhoneDLeft,
  ]);

  const batteryStyle = useMemo(() => {
    return {
      ...getStyleValue('width', batteryWidth),
      ...getStyleValue('right', batteryRight),
      ...getStyleValue('left', batteryLeft),
    };
  }, [batteryWidth, batteryRight, batteryLeft]);

  const borderStyle = useMemo(() => {
    return {
      ...getStyleValue('width', borderWidth),
      ...getStyleValue('right', borderRight),
      ...getStyleValue('borderColor', borderBorderColor),
    };
  }, [borderWidth, borderRight, borderBorderColor]);

  const capIconStyle = useMemo(() => {
    return {
      ...getStyleValue('width', capIconWidth),
      ...getStyleValue('left', capIconLeft),
      ...getStyleValue('right', capIconRight),
    };
  }, [capIconWidth, capIconLeft, capIconRight]);

  const capacityStyle = useMemo(() => {
    return {
      ...getStyleValue('width', capacityWidth),
      ...getStyleValue('right', capacityRight),
      ...getStyleValue('left', capacityLeft),
      ...getStyleValue('backgroundColor', capacityBackgroundColor),
    };
  }, [capacityWidth, capacityRight, capacityLeft, capacityBackgroundColor]);

  const wifiIconStyle = useMemo(() => {
    return {
      ...getStyleValue('width', wifiIconWidth),
    };
  }, [wifiIconWidth]);

  const cellularConnectionIconStyle = useMemo(() => {
    return {
      ...getStyleValue('width', cellularConnectionIconWidth),
    };
  }, [cellularConnectionIconWidth]);

  const barsStatusBarIPhoneTStyle = useMemo(() => {
    return {
      ...getStyleValue('width', timeStyleWidth),
      ...getStyleValue('left', timeStyleLeft),
    };
  }, [timeStyleWidth, timeStyleLeft]);

  const timeStyle = useMemo(() => {
    return {
      ...getStyleValue('color', timeColor),
      ...getStyleValue('width', timeWidth),
    };
  }, [timeColor, timeWidth]);

  return (
    <View style={[styles.barsStatusBarIphoneD, barsStatusBarIPhoneDStyle]}>
      <View style={[styles.battery, batteryStyle]}>
        <View style={[styles.border, borderStyle]} />
        {/* <Image
          style={[styles.capIcon, capIconStyle]}
          contentFit="cover"
          source={cap}
        /> */}
        <View style={[styles.capacity, capacityStyle]} />
      </View>
      {/* <Image
        style={[styles.wifiIcon, wifiIconStyle]}
        contentFit="cover"
        source={wifi}
      />
      <Image
        style={[styles.cellularConnectionIcon, cellularConnectionIconStyle]}
        contentFit="cover"
        source={cellularConnection}
      /> */}
      <BarsStatusBarIPhoneT
        barsStatusBarIPhoneTPosition="absolute"
        barsStatusBarIPhoneTBackgroundColor="unset"
        barsStatusBarIPhoneTWidth="14.4%"
        barsStatusBarIPhoneTHeight="47.73%"
        barsStatusBarIPhoneTTop="15.91%"
        barsStatusBarIPhoneTRight="80%"
        barsStatusBarIPhoneTBottom="36.36%"
        barsStatusBarIPhoneTLeft="5.6%"
        timeColor="#fff"
        timeWidth={54}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    height: '100%',
    width: '90.53%',
    top: '0%',
    right: '9.47%',
    bottom: '0%',
    left: '0%',
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.white,
    borderWidth: 1,
    opacity: 0.35,
    position: 'absolute',
  },
  capIcon: {
    height: '35.4%',
    width: '5.35%',
    top: '32.74%',
    right: '0%',
    bottom: '31.86%',
    left: '94.65%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    opacity: 0.4,
    position: 'absolute',
  },
  capacity: {
    height: '64.6%',
    width: '74.07%',
    top: '17.7%',
    right: '17.7%',
    bottom: '17.7%',
    left: '8.23%',
    borderRadius: 1,
    backgroundColor: Color.white,
    position: 'absolute',
  },
  battery: {
    height: '25.68%',
    width: '6.48%',
    top: '39.32%',
    right: '3.84%',
    bottom: '35%',
    left: '89.68%',
    position: 'absolute',
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  barsStatusBarIphoneD: {
    backgroundColor: Color.shadesBlack,
    width: 375,
    height: 44,
  },
});

export default BarsStatusBarIPhoneD;
