import React, {useMemo} from 'react';
import {Text, StyleSheet, View} from 'react-native';
// import {Image} from 'expo-image';
import {Color, FontSize, FontFamily, Padding} from '../GlobalStyles';

export type BookingConfirmationContainerType = {
  statusMessage?: string;
  bookingDetailsText?: string;

  /** Style props */
  propPaddingHorizontal?: number | string;
  propPaddingVertical?: number | string;
  propBorderStyle?: string;
  propBorderColor?: string;
  propBorderWidth?: number;
  propPadding?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const BookingConfirmationContainer = ({
  statusMessage,
  bookingDetailsText,
  propPaddingHorizontal,
  propPaddingVertical,
  propBorderStyle,
  propBorderColor,
  propBorderWidth,
  propPadding,
}: BookingConfirmationContainerType) => {
  const stepStyle = useMemo(() => {
    return {
      ...getStyleValue('paddingHorizontal', propPaddingHorizontal),
      ...getStyleValue('paddingVertical', propPaddingVertical),
      ...getStyleValue('borderStyle', propBorderStyle),
      ...getStyleValue('borderColor', propBorderColor),
      ...getStyleValue('borderWidth', propBorderWidth),
      ...getStyleValue('padding', propPadding),
    };
  }, [
    propPaddingHorizontal,
    propPaddingVertical,
    propBorderStyle,
    propBorderColor,
    propBorderWidth,
    propPadding,
  ]);

  return (
    <View style={[styles.step, styles.stepFlexBox, stepStyle]}>
      <View style={styles.labelParent}>
        <Text style={[styles.label, styles.labelFlexBox]}>{statusMessage}</Text>
        <View style={styles.frameWrapper}>
          <View style={styles.stepFlexBox}>
            {/* <Image
              style={styles.uuserCircleIcon}
              contentFit="cover"
              source={require('../assets/uusercircle1.png')}
            /> */}
            <Text style={[styles.lastUpdatedBy, styles.labelFlexBox]}>
              Shubham Pachori
            </Text>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.stepFlexBox}>
            {/* <Image
              style={styles.uuserCircleIcon}
              contentFit="cover"
              source={require('../assets/uusercircle1.png')}
            /> */}
            <Text style={[styles.lastUpdatedBy, styles.labelFlexBox]}>
              {bookingDetailsText}
            </Text>
          </View>
        </View>
      </View>
      {/* <Image
        style={styles.stepChild}
        contentFit="cover"
        source={require('../assets/frame-1171276415.png')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  stepFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  labelFlexBox: {
    textAlign: 'left',
    color: Color.colorSlategray_200,
  },
  label: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: FontFamily.robotoMedium,
  },
  uuserCircleIcon: {
    width: 14,
    height: 14,
    display: 'none',
    overflow: 'hidden',
  },
  lastUpdatedBy: {
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    fontFamily: FontFamily.robotoRegular,
    marginLeft: 6,
  },
  frameWrapper: {
    marginTop: 5,
    flexDirection: 'row',
  },
  labelParent: {
    width: 295,
  },
  stepChild: {
    width: 16,
    height: 16,
    marginLeft: 15,
  },
  step: {
    alignSelf: 'stretch',
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    marginTop: 2,
    overflow: 'hidden',
  },
});

export default BookingConfirmationContainer;
