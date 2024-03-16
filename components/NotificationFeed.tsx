import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {Image} from 'expo-image';
import StatusBar1 from './StatusBar1';
import NotificationCard from './NotificationCard';
import Section1 from './Section1';
import {Color, FontSize, FontFamily, Padding} from '../GlobalStyles';

const NotificationFeed = () => {
  return (
    <View style={styles.notificationFeed}>
      <View style={styles.notificationFeedInner}>
        <View style={styles.parentBg}>
          <View style={styles.statusBar}>
            <StatusBar1
              cap={require('../assets/cap.png')}
              wifi={require('../assets/wifi2.png')}
              cellularConnection={require('../assets/cellular-connection.png')}
              statusBarPosition="relative"
              statusBarHeight={44}
              statusBarAlignSelf="stretch"
              statusBarWidth="unset"
              statusBarTop="unset"
              statusBarRight="unset"
              statusBarBottom="unset"
              statusBarLeft="unset"
              batteryWidth="6.5%"
              batteryLeft="89.68%"
              batteryRight="3.82%"
              borderWidth="90.43%"
              borderRight="9.57%"
              capIconWidth="5.32%"
              capIconLeft="94.33%"
              capIconRight="0.35%"
              capacityWidth="73.76%"
              capacityRight="18.09%"
              capacityLeft="8.16%"
              wifiIconWidth={18}
              cellularConnectionIconWidth={20}
              timeStyleWidth="14.4%"
              timeStyleLeft="5.6%"
              timeWidth={63}
            />
          </View>
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <View style={styles.frame}>
              <Text style={styles.bars}>bars</Text>
            </View>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              {/* <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-1.png')}
              /> */}
            </View>
          </View>
        </View>
      </View>
      <NotificationCard />
      <Section1
        dimensionCode={require('../assets/noun-clipboard-1968622-1.png')}
      />
      <Section1
        dimensionCode={require('../assets/noun-clipboard-1968677-21.png')}
        propOverflow="hidden"
      />
      <Section1
        dimensionCode={require('../assets/noun-clipboard-1968622-3.png')}
        propOverflow="hidden"
      />
      <Section1
        dimensionCode={require('../assets/group.png')}
        propOverflow="unset"
      />
      <Section1
        dimensionCode={require('../assets/noun-loading-1328151-21.png')}
        propOverflow="hidden"
      />
      <Section1
        dimensionCode={require('../assets/noun-clipboard-1968677-21.png')}
        propOverflow="hidden"
      />
      <Section1
        dimensionCode={require('../assets/group.png')}
        propOverflow="unset"
      />
      <Section1
        dimensionCode={require('../assets/noun-clipboard-1968622-1.png')}
        propOverflow="hidden"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBar: {
    borderStyle: 'solid',
    borderColor: Color.colorWhitesmoke_400,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  bars: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: FontSize.textXlSemibold_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.dark,
    textAlign: 'left',
  },
  frame: {
    flex: 1,
    height: 20,
    overflow: 'hidden',
  },
  frameChild: {
    width: 32,
    height: 32,
  },
  frame1: {
    justifyContent: 'flex-end',
    height: 32,
    overflow: 'hidden',
  },
  frameParent: {
    shadowColor: 'rgba(25, 29, 49, 0.08)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_mini,
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_smi,
    backgroundColor: Color.white,
    alignSelf: 'stretch',
  },
  parentBg: {
    backgroundColor: Color.white,
    alignSelf: 'stretch',
  },
  notificationFeedInner: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    alignSelf: 'stretch',
  },
  notificationFeed: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 828,
    overflow: 'hidden',
  },
});

export default NotificationFeed;
