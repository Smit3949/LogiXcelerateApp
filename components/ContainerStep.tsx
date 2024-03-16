import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
// import {Image} from 'expo-image';
import {Color, FontSize, FontFamily, Padding} from '../GlobalStyles';

export type ContainerStepType = {
  shipmentStatus?: string;
  statusDescription?: string;
};

const ContainerStep = ({
  shipmentStatus,
  statusDescription,
}: ContainerStepType) => {
  return (
    <View style={[styles.step, styles.stepFlexBox]}>
      <View style={styles.labelParent}>
        <Text style={[styles.label, styles.labelFlexBox]}>
          {shipmentStatus}
        </Text>
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
              {statusDescription}
            </Text>
          </View>
        </View>
      </View>
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
  step: {
    alignSelf: 'stretch',
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    marginTop: 2,
    overflow: 'hidden',
  },
});

export default ContainerStep;
