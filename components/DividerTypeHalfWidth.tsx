import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Color, Padding} from '../GlobalStyles';

export type DividerTypeHalfWidthType = {
  /** Style props */
  dividerTypeHalfWidthPosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const DividerTypeHalfWidth = ({
  dividerTypeHalfWidthPosition,
}: DividerTypeHalfWidthType) => {
  const dividerTypeHalfWidthStyle = useMemo(() => {
    return {
      ...getStyleValue('position', dividerTypeHalfWidthPosition),
    };
  }, [dividerTypeHalfWidthPosition]);

  return (
    <View style={[styles.dividerTypehalfWidth, dividerTypeHalfWidthStyle]}>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: Color.colorAliceblue_400,
    borderTopWidth: 1,
    height: 1,
  },
  dividerTypehalfWidth: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingLeft: Padding.p_65xl,
  },
});

export default DividerTypeHalfWidth;
