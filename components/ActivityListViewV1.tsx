import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {Image} from 'expo-image';
import StatusBar1 from './StatusBar1';
import SearchSection from './SearchSection';
import SectionFormAB from './SectionFormAB';
import {Color, FontSize, FontFamily, Padding} from '../GlobalStyles';

const ActivityListViewV1 = () => {
  return (
    <View style={styles.activityListViewV2}>
      <View style={styles.frameParent}>
        <View style={styles.statusBarParent}>
          <View style={styles.statusBar}>
            <StatusBar1
              cap={require('../assets/cap2.png')}
              wifi={require('../assets/wifi3.png')}
              cellularConnection={require('../assets/cellular-connection2.png')}
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
              batteryRight="3.81%"
              borderWidth="90.22%"
              borderRight="9.78%"
              capIconWidth="5.43%"
              capIconLeft="94.57%"
              capIconRight="0%"
              capacityWidth="73.91%"
              capacityRight="17.75%"
              capacityLeft="8.33%"
              wifiIconWidth={17}
              cellularConnectionIconWidth={19}
              timeStyleWidth="14.4%"
              timeStyleLeft="5.6%"
              timeWidth={63}
            />
          </View>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={styles.frame}>
              <Text style={styles.bars}>bars</Text>
            </View>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              {/* <Image
                style={styles.vuesaxlinearnotificationBinIcon}
                contentFit="cover"
                source={require('../assets/vuesaxlinearnotificationbing.png')}
              />
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/ellipse-1.png')}
              /> */}
            </View>
          </View>
        </View>
        <SearchSection />
      </View>
      <View style={styles.frameContainer}>
        <SectionFormAB />
        <SectionFormAB lightModeButtonIconsMarginTop={10} />
        <SectionFormAB lightModeButtonIconsMarginTop={10} />
        <SectionFormAB lightModeButtonIconsMarginTop={10} />
        <SectionFormAB lightModeButtonIconsMarginTop={10} />
      </View>
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
  vuesaxlinearnotificationBinIcon: {
    width: 24,
    height: 24,
  },
  frameChild: {
    width: 32,
    marginLeft: 6,
    height: 32,
  },
  frame1: {
    justifyContent: 'flex-end',
    height: 32,
    overflow: 'hidden',
  },
  frameGroup: {
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
  statusBarParent: {
    backgroundColor: Color.white,
    alignSelf: 'stretch',
  },
  frameParent: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    alignSelf: 'stretch',
  },
  frameContainer: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_8xs,
    marginTop: 10,
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
  activityListViewV2: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 429,
    height: 759,
    overflow: 'hidden',
  },
});

export default ActivityListViewV1;
