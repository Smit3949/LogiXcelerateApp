import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {Image} from 'expo-image';
import StatusBar1 from '../components/StatusBar1';
import HouseSection1 from '../components/HouseSection1';
import DateTimeSection from '../components/DateTimeSection';
import {Color, FontFamily, FontSize, Border, Padding} from '../GlobalStyles';

const WidgetSubscription = () => {
  return (
    <View style={styles.widgetSubscription}>
      <View style={styles.frameParent}>
        <View style={styles.statusBarParent}>
          <View style={styles.statusBar}>
            <StatusBar1
              cap={require('../assets/cap1.png')}
              wifi={require('../assets/wifi1.png')}
              cellularConnection={require('../assets/cellular-connection1.png')}
              statusBarPosition="absolute"
              statusBarHeight="100%"
              statusBarAlignSelf="unset"
              statusBarWidth="100%"
              statusBarTop="0%"
              statusBarRight="0%"
              statusBarBottom="0%"
              statusBarLeft="0%"
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
          <View style={styles.statusBar1}>
            <Text style={styles.houseTypo}>house</Text>
            <View style={styles.statusBarChild} />
            <Text style={[styles.shareNodes, styles.houseTypo]}>
              share-nodes
            </Text>
            <Text style={[styles.shareNodes, styles.houseTypo]}>square-9</Text>
            <Text style={[styles.shareNodes, styles.houseTypo]}>square-9</Text>
          </View>
          <HouseSection1 />
        </View>
        <DateTimeSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  houseTypo: {
    textAlign: 'center',
    color: Color.shadesBlack,
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    fontSize: FontSize.textXlSemibold_size,
  },
  statusBar: {
    height: 44,
    width: 428,
  },
  statusBarChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: 283,
    height: 25,
    marginLeft: 10,
    borderStyle: 'solid',
  },
  shareNodes: {
    marginLeft: 10,
  },
  statusBar1: {
    backgroundColor: Color.colorAliceblue_300,
    borderColor: Color.colorWhitesmoke_100,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Padding.p_3xs,
    borderStyle: 'solid',
    width: 428,
  },
  statusBarParent: {
    backgroundColor: Color.white,
  },
  frameParent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 428,
  },
  widgetSubscription: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
});

export default WidgetSubscription;
