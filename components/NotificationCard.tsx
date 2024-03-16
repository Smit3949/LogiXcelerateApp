import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
// import {Image} from 'expo-image';
import {FontSize, FontFamily, Color, Padding} from '../GlobalStyles';

const NotificationCard = () => {
  return (
    <View style={[styles.frameParent, styles.frameParentFlexBox]}>
      <View style={styles.frameParentFlexBox}>
        <Text style={styles.text}>Notifications</Text>
      </View>
      {/* <Image
        style={styles.vuesaxlinearnotificationBinIcon}
        contentFit="cover"
        source={require('../assets/vuesaxlinearnotificationbing.png')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: FontSize.textXlSemibold_size,
    lineHeight: 30,
    fontWeight: '600',
    fontFamily: FontFamily.textXlSemibold,
    color: Color.colorGray_200,
    textAlign: 'left',
  },
  vuesaxlinearnotificationBinIcon: {
    width: 24,
    height: 24,
  },
  frameParent: {
    alignSelf: 'stretch',
    backgroundColor: Color.white,
    overflow: 'hidden',
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    marginTop: 2,
  },
});

export default NotificationCard;
