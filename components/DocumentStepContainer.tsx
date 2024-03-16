import React, {useMemo} from 'react';
// import {Image} from 'expo-image';
import {StyleSheet, Text, View, ImageSourcePropType} from 'react-native';
import {Color, FontSize, FontFamily, Padding} from '../GlobalStyles';

export type DocumentStepContainerType = {
  dimensionLabel?: ImageSourcePropType;
  sizeLabel?: string;

  /** Style props */
  propWidth?: number | string;
  propHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const DocumentStepContainer = ({
  dimensionLabel,
  sizeLabel,
  propWidth,
  propHeight,
}: DocumentStepContainerType) => {
  const iconOutlinedAuditStyle = useMemo(() => {
    return {
      ...getStyleValue('width', propWidth),
      ...getStyleValue('height', propHeight),
    };
  }, [propWidth, propHeight]);

  return (
    <View style={[styles.step, styles.stepFlexBox]}>
      {/* <Image
        style={[styles.iconOutlinedAudit, iconOutlinedAuditStyle]}
        contentFit="cover"
        source={dimensionLabel}
      /> */}
      <View style={styles.labelParent}>
        <Text style={[styles.label, styles.labelFlexBox]}>
          <Text style={styles.sibl}>{sizeLabel}</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.mbl18409204}>MBL18409204</Text>
        </Text>
        <View style={styles.frameWrapper}>
          <View style={styles.stepFlexBox}>
            {/* <Image
              style={styles.uuserCircleIcon}
              contentFit="cover"
              source={require('../assets/uusercircle.png')}
            /> */}
            <Text
              style={[
                styles.lastUpdatedBy,
                styles.labelFlexBox,
              ]}>{`Created by: Anshul `}</Text>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.stepFlexBox}>
            {/* <Image
              style={styles.uuserCircleIcon}
              contentFit="cover"
              source={require('../assets/uusercircle.png')}
            /> */}
            <Text style={[styles.lastUpdatedBy, styles.labelFlexBox]}>
              Created at: 12-12-20204
            </Text>
          </View>
        </View>
      </View>
      {/* <Image
        style={styles.stepChild}
        contentFit="cover"
        source={require('../assets/frame-1171276449.png')}
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
  iconOutlinedAudit: {
    width: 28,
    height: 28,
    overflow: 'hidden',
  },
  sibl: {
    fontSize: FontSize.size_sm,
  },
  text: {
    fontSize: FontSize.size_base,
  },
  mbl18409204: {
    fontSize: FontSize.size_smi,
  },
  label: {
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
    fontSize: FontSize.size_2xs,
    lineHeight: 14,
    fontFamily: FontFamily.robotoRegular,
    marginLeft: 6,
  },
  frameWrapper: {
    marginTop: 5,
    flexDirection: 'row',
  },
  labelParent: {
    width: 275,
    marginLeft: 15,
  },
  stepChild: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  step: {
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderColor: Color.colorWhitesmoke_400,
    borderWidth: 1.5,
    justifyContent: 'center',
    padding: Padding.p_8xs,
    marginTop: 2,
    overflow: 'hidden',
  },
});

export default DocumentStepContainer;
