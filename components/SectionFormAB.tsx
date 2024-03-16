import React, {useMemo} from 'react';
import {Text, StyleSheet, View} from 'react-native';
// import {Image} from 'expo-image';
import TypeCircle from './TypeCircle';
import Typetimestamp from './Typetimestamp';
import {FontSize, FontFamily, Padding, Border, Color} from '../GlobalStyles';

export type SectionFormABType = {
  /** Style props */
  lightModeButtonIconsMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const SectionFormAB = ({lightModeButtonIconsMarginTop}: SectionFormABType) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue('marginTop', lightModeButtonIconsMarginTop),
    };
  }, [lightModeButtonIconsMarginTop]);

  return (
    <View style={[styles.frameParent, frameView1Style]}>
      <View style={styles.lightModeavatarTypeWrapper}>
        <TypeCircle
          nK="AB"
          lightModeAvatarImage={require('../assets/lightmodeavatar-image1.png')}
          badge={false}
          image={false}
          typeCirclePosition="absolute"
          typeCircleTop={0}
          typeCircleLeft={0}
        />
      </View>
      <View style={[styles.content, styles.contentFlexBox]}>
        <Text style={styles.subtext}>Subtext</Text>
        <Text style={[styles.title, styles.titleLayout]}>Title</Text>
        <Text style={[styles.abcAddedAContainer, styles.containerTypo]}>
          <Text style={styles.abcAddedACommentOn}>
            <Text style={styles.abc}>{`ABC `}</Text>
            <Text style={styles.addedAComment}>added a comment on</Text>
            <Text style={styles.abc}>{`  `}</Text>
          </Text>
          <Text style={[styles.spfbom231, styles.anshulTypo]}>SPFBOM231</Text>
        </Text>
        <View style={styles.quote}>
          <View style={styles.quoteChild} />
          <Text
            style={[styles.anshulCanYouContainer, styles.containerTypo]}
            numberOfLines={2}>
            <Text style={[styles.anshul, styles.anshulTypo]}>@anshul</Text>
            <Text style={styles.canYouPlease}>
              {' '}
              can you please tell me why is the shipment delayed
            </Text>
          </Text>
        </View>
        <View style={styles.attachment} />
        {/* <Image
          style={styles.lightModethumbnailIcon}
          contentFit="cover"
          source={require('../assets/lightmodethumbnail3.png')}
        /> */}
        <View style={styles.lightModeactionButtons}>
          <View style={[styles.primary, styles.primaryFlexBox]}>
            {/* <Image
              style={[styles.lightModebuttonIcons, styles.lightLayout]}
              contentFit="cover"
              source={require('../assets/lightmodebutton-icons.png')}
            /> */}
            <View style={[styles.buttonWrapper, styles.contentFlexBox]}>
              <Text style={[styles.button, styles.buttonTypo]}>Apply now</Text>
            </View>
            {/* <Image
              style={[styles.lightModebuttonIcons, styles.lightLayout]}
              contentFit="cover"
              source={require('../assets/lightmodebutton-icons1.png')}
            /> */}
          </View>
          <View style={[styles.secondary, styles.primaryFlexBox]}>
            {/* <Image
              style={styles.lightLayout}
              contentFit="cover"
              source={require('../assets/lightmodebutton-icons5.png')}
            /> */}
            <View style={[styles.buttonWrapper, styles.contentFlexBox]}>
              <Text style={[styles.button1, styles.buttonTypo]}>Button</Text>
            </View>
            {/* <Image
              style={styles.lightLayout}
              contentFit="cover"
              source={require('../assets/lightmodebutton-icons6.png')}
            /> */}
          </View>
        </View>
        <Text style={[styles.timestampNextLine, styles.titleLayout]}>
          2 mins ago
        </Text>
      </View>
      <View style={styles.lightModerightAccessoryWrapper}>
        <Typetimestamp
          timestampNextLine="8h"
          ellipsis
          typetimestampPosition="absolute"
          typetimestampTop={0}
          typetimestampLeft={0}
          typetimestampMarginLeft="unset"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLayout: {
    lineHeight: 18,
    marginTop: 5,
    display: 'none',
    textAlign: 'left',
  },
  containerTypo: {
    lineHeight: 20,
    textAlign: 'left',
    fontSize: FontSize.size_xs,
  },
  anshulTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  primaryFlexBox: {
    paddingHorizontal: Padding.p_xs,
    height: 32,
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lightLayout: {
    height: 16,
    width: 16,
    overflow: 'hidden',
  },
  buttonTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
  },
  lightModeavatarTypeWrapper: {
    width: 48,
    height: 48,
  },
  subtext: {
    letterSpacing: 0.4,
    lineHeight: 17,
    display: 'none',
    textAlign: 'left',
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: '600',
    fontSize: FontSize.size_xs,
    alignSelf: 'stretch',
  },
  title: {
    color: Color.colorGray_200,
    marginTop: 5,
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: '600',
  },
  abc: {
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: '600',
  },
  addedAComment: {
    fontFamily: FontFamily.interRegular,
  },
  abcAddedACommentOn: {
    color: Color.colorDarkslategray_200,
  },
  spfbom231: {
    color: Color.primaryBlue500,
  },
  abcAddedAContainer: {
    marginTop: 5,
    alignSelf: 'stretch',
  },
  quoteChild: {
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorAliceblue_400,
    width: 4,
    alignSelf: 'stretch',
  },
  anshul: {
    color: Color.colorCrimson_100,
  },
  canYouPlease: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_100,
  },
  anshulCanYouContainer: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    overflow: 'hidden',
  },
  quote: {
    height: 38,
    marginTop: 5,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  attachment: {
    height: 20,
    marginTop: 5,
    display: 'none',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  lightModethumbnailIcon: {
    borderRadius: Border.br_5xs,
    maxWidth: '100%',
    height: 164,
    width: '100%',
    marginTop: 5,
    display: 'none',
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  lightModebuttonIcons: {
    display: 'none',
  },
  button: {
    color: Color.white,
  },
  buttonWrapper: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: Color.colorRoyalblue_100,
  },
  button1: {
    color: Color.colorDarkslategray_100,
  },
  secondary: {
    borderStyle: 'solid',
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    marginLeft: 8,
    display: 'none',
    backgroundColor: Color.white,
  },
  lightModeactionButtons: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    marginTop: 5,
    display: 'none',
    flexDirection: 'row',
  },
  timestampNextLine: {
    fontFamily: FontFamily.interRegular,
    marginTop: 5,
    color: Color.colorDarkslategray_100,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
  },
  content: {
    width: 231,
    height: 88,
    marginLeft: 26,
  },
  lightModerightAccessoryWrapper: {
    width: 24,
    height: 42,
    marginLeft: 26,
  },
  frameParent: {
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_8xs,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
});

export default SectionFormAB;
