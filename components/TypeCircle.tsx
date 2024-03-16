import React, {useMemo} from 'react';
import {Text, StyleSheet, View, ImageSourcePropType} from 'react-native';
// import {Image} from 'expo-image';
import {Border, FontSize, FontFamily, Color} from '../GlobalStyles';

export type TypeCircleType = {
  nK?: string;
  lightModeAvatarImage?: ImageSourcePropType;
  badge?: boolean;
  image?: boolean;

  /** Style props */
  typeCirclePosition?: string;
  typeCircleTop?: number | string;
  typeCircleLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const TypeCircle = ({
  nK,
  lightModeAvatarImage,
  badge = false,
  image = false,
  typeCirclePosition,
  typeCircleTop,
  typeCircleLeft,
}: TypeCircleType) => {
  const typeCircleStyle = useMemo(() => {
    return {
      ...getStyleValue('position', typeCirclePosition),
      ...getStyleValue('top', typeCircleTop),
      ...getStyleValue('left', typeCircleLeft),
    };
  }, [typeCirclePosition, typeCircleTop, typeCircleLeft]);

  return (
    <View style={[styles.typecircle, styles.typecircleLayout, typeCircleStyle]}>
      <Text style={[styles.nk, styles.nkPosition]}>{nK}</Text>
      {/* {image && (
        <Image
          style={[styles.lightModeavatarImageIcon, styles.badgePosition]}
          contentFit="cover"
          source={lightModeAvatarImage}
        />
      )} */}
      {badge && <View style={[styles.badge, styles.badgePosition]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  typecircleLayout: {
    height: 48,
    width: 48,
    borderRadius: Border.br_181xl,
  },
  nkPosition: {
    left: '50%',
    top: '50%',
  },
  badgePosition: {
    display: 'none',
    position: 'absolute',
  },
  nk: {
    marginTop: -15,
    marginLeft: -14,
    fontSize: FontSize.textXlSemibold_size,
    lineHeight: 30,
    fontWeight: '600',
    fontFamily: FontFamily.textXlSemibold,
    color: Color.colorLightslategray_100,
    textAlign: 'left',
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
  lightModeavatarImageIcon: {
    marginTop: -24,
    marginLeft: -24,
    left: '50%',
    top: '50%',
    height: 48,
    width: 48,
    borderRadius: Border.br_181xl,
  },
  badge: {
    right: -1,
    bottom: -1,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.success500,
    borderStyle: 'solid',
    borderColor: Color.white,
    borderWidth: 1.5,
    width: 15,
    height: 15,
    overflow: 'hidden',
  },
  typecircle: {
    backgroundColor: Color.colorAliceblue_400,
  },
});

export default TypeCircle;
