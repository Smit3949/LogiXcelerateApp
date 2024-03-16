import React, {useMemo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import { Image } from "expo-image";
import StatusBar1 from './StatusBar1';

export type StatusContainerType = {
  /** Style props */
  batteryAlignSelf?: string;
  batteryHeight?: number | string;
  borderAlignSelf?: string;
  borderWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const StatusContainer = ({
  batteryAlignSelf,
  batteryHeight,
  borderAlignSelf,
  borderWidth,
}: StatusContainerType) => {
  const statusBar1Style = useMemo(() => {
    return {
      ...getStyleValue('alignSelf', batteryAlignSelf),
      ...getStyleValue('height', batteryHeight),
    };
  }, [batteryAlignSelf, batteryHeight]);

  const statusBarStyle = useMemo(() => {
    return {
      ...getStyleValue('alignSelf', borderAlignSelf),
      ...getStyleValue('width', borderWidth),
    };
  }, [borderAlignSelf, borderWidth]);

  return (
    <View style={[styles.statusBar, statusBar1Style]}>
      <StatusBar1
        cap={require('../assets/cap1.png')}
        wifi={require('../assets/wifi1.png')}
        cellularConnection={require('../assets/cellular-connection1.png')}
        statusBarPosition="relative"
        statusBarHeight={44}
        statusBarAlignSelf="stretch"
        statusBarWidth="unset"
        statusBarTop="unset"
        statusBarRight="unset"
        statusBarBottom="unset"
        statusBarLeft="unset"
        batteryWidth="6.5%"
        batteryLeft="89.7%"
        batteryRight="3.81%"
        borderWidth="90.29%"
        borderRight="9.71%"
        capIconWidth="5.4%"
        capIconLeft="94.6%"
        capIconRight="0%"
        capacityWidth="73.74%"
        capacityRight="17.99%"
        capacityLeft="8.27%"
        wifiIconWidth={18}
        cellularConnectionIconWidth={19}
        timeStyleWidth="14.39%"
        timeStyleLeft="5.61%"
        timeWidth={62}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StatusContainer;
