import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {Image} from 'expo-image';
import StatusBar1 from '../components/StatusBar1';
import SummaryContainer from '../components/SummaryContainer';
import {Border, Color, Padding} from '../GlobalStyles';

const MyGateLikeWISMO = () => {
  return (
    <View style={styles.mygateLikeWismo}>
      <View style={styles.mygateLikeWismoInner}>
        <View style={styles.statusBarWrapper}>
          <View style={[styles.statusBar, styles.statusBarFlexBox]}>
            <StatusBar1
              cap={require('../assets/cap4.png')}
              wifi={require('../assets/wifi5.png')}
              cellularConnection={require('../assets/cellular-connection4.png')}
              statusBarPosition="relative"
              statusBarHeight={44}
              statusBarAlignSelf="stretch"
              statusBarWidth="unset"
              statusBarTop="unset"
              statusBarRight="unset"
              statusBarBottom="unset"
              statusBarLeft="unset"
              batteryWidth="6.49%"
              batteryLeft="89.69%"
              batteryRight="3.82%"
              borderWidth="90.37%"
              borderRight="9.63%"
              capIconWidth="5.56%"
              capIconLeft="94.44%"
              capIconRight="0%"
              capacityWidth="74.07%"
              capacityRight="17.78%"
              capacityLeft="8.15%"
              wifiIconWidth={17}
              cellularConnectionIconWidth={19}
              timeStyleWidth="14.4%"
              timeStyleLeft="5.6%"
              timeWidth={63}
            />
          </View>
        </View>
      </View>
      <SummaryContainer />
      <View style={[styles.frameParent, styles.statusBarFlexBox]}>
        <View style={styles.shoppingCardCircleParent}>
          <View style={styles.shoppingCardCircle}>
            <View
              style={[
                styles.shoppingCardCircleChild,
                styles.shoppingCardLayout,
              ]}
            />
          </View>
          {/* <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/frame-1171276465.png')}
          /> */}
        </View>
        <View style={styles.shoppingCardCircleParent}>
          <View style={styles.shoppingCardCircle}>
            <View
              style={[styles.shoppingCardCircleItem, styles.shoppingCardLayout]}
            />
          </View>
          {/* <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/frame-1171276462.png')}
          /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarFlexBox: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  shoppingCardLayout: {
    borderWidth: 1,
    borderRadius: Border.br_52xl,
    left: 0,
    top: 0,
    position: 'absolute',
    height: 70,
    width: 70,
    borderStyle: 'solid',
  },
  statusBar: {
    borderColor: Color.colorWhitesmoke_400,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderStyle: 'solid',
    alignItems: 'center',
  },
  statusBarWrapper: {
    alignSelf: 'stretch',
    backgroundColor: Color.white,
  },
  mygateLikeWismoInner: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    alignSelf: 'stretch',
  },
  shoppingCardCircleChild: {
    backgroundColor: '#ffeaea',
    borderColor: '#ffb4b4',
  },
  shoppingCardCircle: {
    left: 0,
    top: 0,
    position: 'absolute',
    height: 70,
    width: 70,
  },
  frameChild: {
    top: 23,
    left: 23,
    width: 24,
    height: 24,
    position: 'absolute',
  },
  shoppingCardCircleParent: {
    height: 70,
    width: 70,
  },
  shoppingCardCircleItem: {
    backgroundColor: '#edffe8',
    borderColor: '#74ff71',
  },
  frameParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 44,
    paddingVertical: 25,
    marginTop: 2,
    overflow: 'hidden',
  },
  mygateLikeWismo: {
    flex: 1,
    width: '100%',
    height: 828,
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
});

export default MyGateLikeWISMO;
