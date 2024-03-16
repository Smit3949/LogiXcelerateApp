import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {FontFamily, Color, FontSize, Border, Padding} from '../GlobalStyles';

const SearchSection = () => {
  return (
    <View style={[styles.statusBarWrapper, styles.statusFlexBox]}>
      <View style={[styles.statusBar, styles.statusFlexBox]}>
        <View style={styles.activityFlexBox}>
          <Text style={styles.activity}>{`Activity `}</Text>
        </View>
        <View style={[styles.statusBarInner, styles.activityFlexBox]}>
          <View
            style={[styles.searchAnyActivityParent, styles.activityFlexBox]}>
            <Text
              style={[styles.searchAnyActivity, styles.magnifyingGlassTypo]}>
              Search Any Activity
            </Text>
            <Text style={[styles.magnifyingGlass, styles.magnifyingGlassTypo]}>
              magnifying-glass
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusFlexBox: {
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  activityFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  magnifyingGlassTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
  },
  activity: {
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: FontFamily.robotoMedium,
    color: Color.shadesBlack,
    textAlign: 'left',
    fontSize: FontSize.size_sm,
  },
  searchAnyActivity: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_sm,
  },
  magnifyingGlass: {
    fontSize: FontSize.size_mini,
    color: Color.secondaryGrey400,
  },
  searchAnyActivityParent: {
    flex: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    height: 30,
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_5xs,
    borderStyle: 'solid',
    paddingVertical: 0,
  },
  statusBarInner: {
    marginTop: 5,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  statusBar: {
    backgroundColor: Color.colorAliceblue_300,
    borderColor: Color.colorWhitesmoke_100,
    borderBottomWidth: 1,
    padding: Padding.p_3xs,
    borderStyle: 'solid',
  },
  statusBarWrapper: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchSection;
