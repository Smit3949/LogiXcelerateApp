import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
// import {Image} from 'expo-image';
import Section from '../components/Section';
import {Padding, Color, FontFamily, FontSize, Border} from '../GlobalStyles';

const ActivityScreen = () => {
  return (
    <View style={[styles.activityScreen, styles.frameWrapperFlexBox]}>
      <Section />
      <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.frameSpaceBlock1]}>
          <View style={[styles.yesterdayWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.yesterday}>Yesterday</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
          <View style={styles.loremLayout}>
            <Text
              style={[
                styles.loremIpsumDolor,
                styles.todayLayout,
              ]}>{`Lorem Ipsum Dolor solet
 something soemthing`}</Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
          <View style={styles.loremLayout}>
            <Text
              style={[
                styles.loremIpsumDolor,
                styles.todayLayout,
              ]}>{`Lorem Ipsum Dolor solet
 something soemthing`}</Text>
          </View>
          <View
            style={[
              styles.loremIpsumDolorSoletSomethFrame,
              styles.loremLayout,
            ]}>
            <Text
              style={[
                styles.loremIpsumDolor,
                styles.todayLayout,
              ]}>{`Lorem Ipsum Dolor solet
 something soemthing`}</Text>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <View style={[styles.yesterdayWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.today, styles.todayLayout]}>Today</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
          <View style={styles.loremLayout}>
            <Text
              style={[
                styles.loremIpsumDolor,
                styles.todayLayout,
              ]}>{`Lorem Ipsum Dolor solet
 something soemthing`}</Text>
          </View>
        </View>
        <View style={[styles.frameParent1, styles.frameLayout]}>
          <View style={[styles.writeSomethingHereWrapper, styles.frameLayout]}>
            <Text style={styles.writeSomethingHere}>Write Something here</Text>
          </View>
          {/* <Image
            style={[styles.frameChild, styles.frameLayout]}
            contentFit="cover"
            source={require('../assets/frame-1171276440.png')}
          /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperFlexBox: {
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameSpaceBlock1: {
    paddingHorizontal: Padding.p_5xs,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  wrapperFlexBox: {
    flexDirection: 'row',
    paddingHorizontal: Padding.p_8xs,
    alignItems: 'center',
  },
  frameSpaceBlock: {
    marginTop: 30,
    backgroundColor: Color.white,
    paddingVertical: 0,
  },
  todayLayout: {
    height: 42,
    width: 186,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  loremLayout: {
    height: 62,
    backgroundColor: Color.colorAliceblue_100,
    flexDirection: 'row',
    borderRadius: Border.br_mini,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_8xs,
    alignItems: 'center',
    overflow: 'hidden',
  },
  frameLayout: {
    borderRadius: Border.br_3xs,
    overflow: 'hidden',
  },
  yesterday: {
    width: 186,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    display: 'flex',
    textAlign: 'center',
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesterdayWrapper: {
    height: 23,
    borderRadius: Border.br_mini,
    flexDirection: 'row',
    backgroundColor: Color.white,
    paddingVertical: 0,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  frameWrapper: {
    backgroundColor: Color.white,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loremIpsumDolor: {
    textAlign: 'left',
  },
  frameContainer: {
    paddingHorizontal: Padding.p_5xs,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  loremIpsumDolorSoletSomethFrame: {
    marginTop: 5,
  },
  frameGroup: {
    alignItems: 'flex-end',
    paddingHorizontal: Padding.p_5xs,
    alignSelf: 'stretch',
    overflow: 'hidden',
    justifyContent: 'center',
    marginTop: 30,
  },
  today: {
    display: 'flex',
    textAlign: 'center',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameView: {
    paddingHorizontal: Padding.p_5xs,
    alignSelf: 'stretch',
    overflow: 'hidden',
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
  },
  writeSomethingHere: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.shadesBlack,
    textAlign: 'left',
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  writeSomethingHereWrapper: {
    width: 271,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    paddingHorizontal: Padding.p_8xs,
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  frameChild: {
    width: 52,
    height: 49,
    marginLeft: 46,
  },
  frameParent1: {
    borderStyle: 'solid',
    borderColor: '#e6e6e6',
    borderWidth: 1,
    height: 54,
    marginTop: 30,
    backgroundColor: Color.white,
    paddingVertical: 0,
    flexDirection: 'row',
    paddingHorizontal: Padding.p_8xs,
    alignItems: 'center',
  },
  frameParent: {
    paddingVertical: 68,
    marginTop: 10,
    backgroundColor: Color.white,
    alignSelf: 'stretch',
    paddingHorizontal: Padding.p_8xs,
    overflow: 'hidden',
  },
  activityScreen: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    width: '100%',
    paddingHorizontal: Padding.p_8xs,
    overflow: 'hidden',
    paddingVertical: 0,
  },
});

export default ActivityScreen;
