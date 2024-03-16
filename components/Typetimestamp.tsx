import React, {useMemo} from 'react';
import {Text, StyleSheet, View} from 'react-native';
// import {Image} from 'expo-image';
import {FontSize, FontFamily, Color} from '../GlobalStyles';

export type TypetimestampType = {
  timestampNextLine?: string;
  ellipsis?: boolean;

  /** Style props */
  typetimestampPosition?: string;
  typetimestampTop?: number | string;
  typetimestampLeft?: number | string;
  typetimestampMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const Typetimestamp = ({
  timestampNextLine,
  ellipsis = true,
  typetimestampPosition,
  typetimestampTop,
  typetimestampLeft,
  typetimestampMarginLeft,
}: TypetimestampType) => {
  const typetimestampStyle = useMemo(() => {
    return {
      ...getStyleValue('position', typetimestampPosition),
      ...getStyleValue('top', typetimestampTop),
      ...getStyleValue('left', typetimestampLeft),
      ...getStyleValue('marginLeft', typetimestampMarginLeft),
    };
  }, [
    typetimestampPosition,
    typetimestampTop,
    typetimestampLeft,
    typetimestampMarginLeft,
  ]);

  return (
    <View style={[styles.typetimestamp, typetimestampStyle]}>
      <Text style={styles.timestampNextLine}>{timestampNextLine}</Text>
      {/* {ellipsis && (
        <Image
          style={styles.ellipsisIcon}
          contentFit="cover"
          source={require('../assets/ellipsis.png')}
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  timestampNextLine: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_100,
    textAlign: 'left',
  },
  ellipsisIcon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  typetimestamp: {
    alignItems: 'center',
  },
});

export default Typetimestamp;
