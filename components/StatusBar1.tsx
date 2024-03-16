import React, {useMemo} from 'react';
import {StyleSheet, View, Text, ImageSourcePropType} from 'react-native';
// import { Image } from "expo-image";
import BarsStatusBarIPhoneD from './BarsStatusBarIPhoneD';

export type StatusBar1Type = {
  cap?: ImageSourcePropType;
  wifi?: ImageSourcePropType;
  cellularConnection?: ImageSourcePropType;

  /** Style props */
  statusBarPosition?: string;
  statusBarHeight?: number | string;
  statusBarAlignSelf?: string;
  statusBarWidth?: number | string;
  statusBarTop?: number | string;
  statusBarRight?: number | string;
  statusBarBottom?: number | string;
  statusBarLeft?: number | string;
  batteryWidth?: number | string;
  batteryLeft?: number | string;
  batteryRight?: number | string;
  borderWidth?: number | string;
  borderRight?: number | string;
  capIconWidth?: number | string;
  capIconLeft?: number | string;
  capIconRight?: number | string;
  capacityWidth?: number | string;
  capacityRight?: number | string;
  capacityLeft?: number | string;
  wifiIconWidth?: number | string;
  cellularConnectionIconWidth?: number | string;
  timeStyleWidth?: number | string;
  timeStyleLeft?: number | string;
  timeWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const StatusBar1 = ({
  cap,
  wifi,
  cellularConnection,
  statusBarPosition,
  statusBarHeight,
  statusBarAlignSelf,
  statusBarWidth,
  statusBarTop,
  statusBarRight,
  statusBarBottom,
  statusBarLeft,
  batteryWidth,
  batteryLeft,
  batteryRight,
  borderWidth,
  borderRight,
  capIconWidth,
  capIconLeft,
  capIconRight,
  capacityWidth,
  capacityRight,
  capacityLeft,
  wifiIconWidth,
  cellularConnectionIconWidth,
  timeStyleWidth,
  timeStyleLeft,
  timeWidth,
}: StatusBar1Type) => {
  const statusBarStyle = useMemo(() => {
    return {
      ...getStyleValue('position', statusBarPosition),
      ...getStyleValue('height', statusBarHeight),
      ...getStyleValue('alignSelf', statusBarAlignSelf),
      ...getStyleValue('width', statusBarWidth),
      ...getStyleValue('top', statusBarTop),
      ...getStyleValue('right', statusBarRight),
      ...getStyleValue('bottom', statusBarBottom),
      ...getStyleValue('left', statusBarLeft),
    };
  }, [
    statusBarPosition,
    statusBarHeight,
    statusBarAlignSelf,
    statusBarWidth,
    statusBarTop,
    statusBarRight,
    statusBarBottom,
    statusBarLeft,
  ]);

  const batteryStyle = useMemo(() => {
    return {
      ...getStyleValue('width', batteryWidth),
      ...getStyleValue('left', batteryLeft),
      ...getStyleValue('right', batteryRight),
    };
  }, [batteryWidth, batteryLeft, batteryRight]);

  const borderStyle = useMemo(() => {
    return {
      ...getStyleValue('width', borderWidth),
      ...getStyleValue('right', borderRight),
    };
  }, [borderWidth, borderRight]);

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
    };
  }, [capacityWidth, capacityRight, capacityLeft]);

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
      ...getStyleValue('width', timeWidth),
    };
  }, [timeWidth]);

  return (
    <View style={[styles.statusBar, statusBarStyle]}>
      <BarsStatusBarIPhoneD
        cap={require('../assets/cap1.png')}
        wifi={require('../assets/wifi1.png')}
        cellularConnection={require('../assets/cellular-connection1.png')}
        barsStatusBarIPhoneDPosition="absolute"
        barsStatusBarIPhoneDBackgroundColor="unset"
        barsStatusBarIPhoneDWidth="100%"
        barsStatusBarIPhoneDHeight="100%"
        barsStatusBarIPhoneDTop="0%"
        barsStatusBarIPhoneDRight="0%"
        barsStatusBarIPhoneDBottom="0%"
        barsStatusBarIPhoneDLeft="0%"
        batteryWidth="6.5%"
        batteryRight="3.81%"
        batteryLeft="89.7%"
        borderWidth="90.29%"
        borderRight="9.71%"
        borderBorderColor="#000"
        capIconWidth="5.4%"
        capIconLeft="94.6%"
        capIconRight="0%"
        capacityWidth="73.74%"
        capacityRight="17.99%"
        capacityLeft="8.27%"
        capacityBackgroundColor="#000"
        wifiIconWidth={18}
        cellularConnectionIconWidth={19}
        timeStyleWidth="14.39%"
        timeStyleLeft="5.61%"
        timeColor="#000"
        timeWidth={62}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 44,
    alignSelf: 'stretch',
  },
});

export default StatusBar1;
