import React, {useMemo} from 'react';
// import {Image} from 'expo-image';
import {StyleSheet, Text, View, ImageSourcePropType} from 'react-native';
import Typetimestamp from './Typetimestamp';
import {Color, FontSize, FontFamily, Border, Padding} from '../GlobalStyles';

export type Section1Type = {
  dimensionCode?: ImageSourcePropType;

  /** Style props */
  propOverflow?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const Section1 = ({dimensionCode, propOverflow}: Section1Type) => {
  const nounClipboard19686221IconStyle = useMemo(() => {
    return {
      ...getStyleValue('overflow', propOverflow),
    };
  }, [propOverflow]);

  return (
    <View style={styles.notificationsWrapper}>
      <View style={styles.notifications}>
        {/* <Image
          style={[
            styles.nounClipboard19686221Icon,
            nounClipboard19686221IconStyle,
          ]}
          contentFit="cover"
          source={dimensionCode}
        /> */}
        <View style={styles.content}>
          <Text style={[styles.subtext, styles.subtextClr]}>Subtext</Text>
          <Text
            style={[
              styles.spfbom23110024ContainerContainer,
              styles.containerLayout,
            ]}>
            <Text style={styles.spfbom23110024}>
              <Text style={styles.spfbom231100241}>{`SPFBOM23110024 `}</Text>
            </Text>
            <Text style={styles.containerPickedUp}>
              <Text style={styles.spfbom23110024}>-</Text>
              <Text style={styles.containerPickedUp1}>
                {' '}
                Container Picked Up
              </Text>
            </Text>
          </Text>
          <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorTypo]}>
            Lorem ipsum dolor solet ... / ETA
          </Text>
          <View style={styles.quote} />
          <View style={styles.attachment} />
          {/* <Image
            style={styles.lightModethumbnailIcon}
            contentFit="cover"
            source={require('../assets/lightmodethumbnail1.png')}
          /> */}
          <Text style={[styles.timestampNextLine, styles.loremIpsumDolorTypo]}>
            2 mins ago
          </Text>
        </View>
        <Typetimestamp
          timestampNextLine="14h"
          ellipsis
          typetimestampPosition="unset"
          typetimestampTop="unset"
          typetimestampLeft="unset"
          typetimestampMarginLeft={12}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtextClr: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
    display: 'none',
  },
  containerLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  loremIpsumDolorTypo: {
    fontFamily: FontFamily.interRegular,
    marginTop: 8,
    textAlign: 'left',
  },
  nounClipboard19686221Icon: {
    width: 28,
    height: 28,
    overflow: 'hidden',
  },
  subtext: {
    letterSpacing: 0.4,
    lineHeight: 17,
    fontWeight: '600',
    fontFamily: FontFamily.textXlSemibold,
    display: 'none',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  spfbom231100241: {
    color: Color.primaryBlue500,
  },
  spfbom23110024: {
    fontWeight: '500',
    fontFamily: FontFamily.robotoMedium,
  },
  containerPickedUp1: {
    fontWeight: '700',
    fontFamily: FontFamily.robotoBold,
  },
  containerPickedUp: {
    color: Color.colorDimgray_200,
  },
  spfbom23110024ContainerContainer: {
    marginTop: 8,
    textAlign: 'left',
  },
  loremIpsumDolor: {
    color: Color.colorDarkslategray_200,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    alignSelf: 'stretch',
  },
  quote: {
    height: 40,
    marginTop: 8,
    display: 'none',
    alignSelf: 'stretch',
  },
  attachment: {
    height: 20,
    alignItems: 'center',
    marginTop: 8,
    display: 'none',
    alignSelf: 'stretch',
  },
  lightModethumbnailIcon: {
    borderRadius: Border.br_5xs,
    maxWidth: '100%',
    height: 164,
    width: '100%',
    marginTop: 8,
    display: 'none',
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  timestampNextLine: {
    lineHeight: 18,
    display: 'none',
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12,
    alignSelf: 'stretch',
  },
  notifications: {
    width: 434,
    flexDirection: 'row',
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.white,
  },
  notificationsWrapper: {
    borderStyle: 'solid',
    borderColor: Color.colorWhitesmoke_400,
    borderWidth: 1,
    padding: Padding.p_11xs,
    marginTop: 2,
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
});

export default Section1;
