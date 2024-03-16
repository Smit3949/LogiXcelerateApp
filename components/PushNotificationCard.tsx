import * as React from 'react';
// import {Image} from 'expo-image';
import {StyleSheet, Text, View} from 'react-native';
import {Padding, FontSize, Color, FontFamily, Border} from '../GlobalStyles';

const PushNotificationCard = () => {
  return (
    <View
      style={[styles.pushNotificationCard, styles.pushNotificationCardFlexBox]}>
      {/* <Image
        style={styles.logo1Icon}
        contentFit="cover"
        source={require('../assets/logo-1.png')}
      /> */}
      <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.statusSpaceBlock]}>
          <View>
            <View
              style={[
                styles.spfbom23110024Wrapper,
                styles.pushNotificationCardFlexBox,
              ]}>
              <Text style={[styles.spfbom23110024, styles.spfbom23110024Typo]}>
                SPFBOM23110024
              </Text>
            </View>
            <Text style={styles.customerMoon}>Customer - Moon Pharma INC</Text>
          </View>
        </View>
        <View style={[styles.status, styles.statusSpaceBlock]}>
          <View style={styles.content}>
            <Text style={[styles.subtext, styles.subtextTypo]}>Subtext</Text>
            <Text
              style={[
                styles.mscu184902Maeu2198383Container,
                styles.spfbom23110024Typo,
              ]}>
              <Text style={styles.spfbom23110024Typo1}>
                <Text
                  style={
                    styles.mscu184902Maeu21983831
                  }>{`MSCU184902, MAEU219838 +3 `}</Text>
                <Text style={styles.text}>-</Text>
              </Text>
              <Text style={styles.text}>
                <Text style={styles.text1}>{` `}</Text>
                <Text style={styles.containersPickedUp1}>
                  ContainerS Picked Up
                </Text>
              </Text>
            </Text>
            <View style={styles.quote} />
            <View style={styles.attachment} />
            <View style={styles.lightModethumbnail}>
              {/* <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require('../assets/image.png')}
              /> */}
            </View>
            <Text style={[styles.timestampNextLine, styles.subtextTypo]}>
              2 mins ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pushNotificationCardFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusSpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    alignSelf: 'stretch',
  },
  spfbom23110024Typo: {
    textAlign: 'left',
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  subtextTypo: {
    color: Color.colorDarkslategray_100,
    display: 'none',
    fontSize: FontSize.size_xs,
    textAlign: 'left',
  },
  logo1Icon: {
    width: 30,
    height: 30,
  },
  spfbom23110024: {
    color: Color.primaryBlue500,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  spfbom23110024Wrapper: {
    alignItems: 'center',
  },
  customerMoon: {
    lineHeight: 28,
    color: Color.secondaryGrey400,
    display: 'flex',
    width: 238,
    height: 18,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    alignItems: 'center',
  },
  frameWrapper: {
    paddingVertical: 0,
    justifyContent: 'center',
  },
  subtext: {
    letterSpacing: 0.4,
    lineHeight: 17,
    fontWeight: '600',
    fontFamily: FontFamily.textXlSemibold,
    display: 'none',
    width: 332,
  },
  mscu184902Maeu21983831: {
    color: Color.primaryBlue500,
  },
  text: {
    color: Color.colorDimgray_200,
  },
  spfbom23110024Typo1: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  text1: {
    fontWeight: '700',
    fontFamily: FontFamily.robotoBold,
  },
  containersPickedUp1: {
    fontFamily: FontFamily.robotoRegular,
  },
  mscu184902Maeu2198383Container: {
    marginTop: 8,
    alignSelf: 'stretch',
  },
  quote: {
    height: 40,
    marginTop: 8,
    display: 'none',
    width: 332,
  },
  attachment: {
    height: 20,
    marginTop: 8,
    display: 'none',
    width: 332,
    alignItems: 'center',
  },
  imageIcon: {
    position: 'absolute',
    marginTop: -93,
    marginLeft: -166,
    top: '50%',
    left: '50%',
    height: 187,
    width: 332,
  },
  lightModethumbnail: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    width: 370,
    height: 164,
    marginTop: 8,
    display: 'none',
    overflow: 'hidden',
  },
  timestampNextLine: {
    lineHeight: 18,
    fontFamily: FontFamily.interRegular,
    marginTop: 8,
    display: 'none',
  },
  content: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  status: {
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_11xs,
    marginTop: 0.87,
    overflow: 'hidden',
  },
  frameParent: {
    width: 254,
    marginLeft: 6.93,
    justifyContent: 'center',
  },
  pushNotificationCard: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_300,
    width: 339,
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default PushNotificationCard;
