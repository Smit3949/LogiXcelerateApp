import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Color, FontFamily, Padding, Border, FontSize} from '../GlobalStyles';

const SectionFormAutocompleteMBL = () => {
  return (
    <View style={[styles.summaryFormatInner, styles.statusFlexBox]}>
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <View>
            <View style={[styles.spfbom23110024Wrapper, styles.statusFlexBox]}>
              <Text style={[styles.spfbom23110024, styles.tue02JanFlexBox]}>
                SPFBOM23110024
              </Text>
            </View>
            <Text style={[styles.customerMoon, styles.customerMoonTypo]}>
              Customer - Moon Pharma INC
            </Text>
          </View>
        </View>
        <View style={[styles.status, styles.statusSpaceBlock]}>
          <View style={styles.frameFlexBox}>
            <View>
              <Text
                style={[
                  styles.etaDammamSadmn,
                  styles.customerMoonTypo,
                ]}>{`ETA Dammam, SADMN (PoD) `}</Text>
              <Text style={[styles.tue02Jan, styles.tue02JanFlexBox]}>
                Tue, 02 Jan, 2024 11:30 AM
              </Text>
              <Text style={[styles.tue02Jan, styles.tue02JanFlexBox]}>
                Reaching in 5 Days
              </Text>
            </View>
            <View style={[styles.dataInputDate, styles.dataFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>On Time</Text>
            </View>
          </View>
        </View>
        <View style={styles.statusSpaceBlock}>
          <View style={[styles.frameView, styles.frameFlexBox]}>
            <View>
              <Text style={[styles.etaDammamSadmn, styles.customerMoonTypo]}>
                MBL: MBL103060
              </Text>
            </View>
            <View style={[styles.dataInputDate1, styles.dataFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>
                Surrendered at Origin
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tue02JanFlexBox: {
    textAlign: 'left',
    lineHeight: 20,
  },
  customerMoonTypo: {
    color: Color.secondaryGrey400,
    textAlign: 'left',
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  statusSpaceBlock: {
    marginTop: 0.87,
    paddingVertical: Padding.p_11xs,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_3xs,
    width: 390,
    overflow: 'hidden',
  },
  dataFlexBox: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_9xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textTypo: {
    textAlign: 'center',
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  frameFlexBox: {
    width: 365,
    alignItems: 'center',
    flexDirection: 'row',
  },
  spfbom23110024: {
    color: Color.primaryBlue500,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    textAlign: 'left',
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  spfbom23110024Wrapper: {
    alignItems: 'center',
  },
  customerMoon: {
    lineHeight: 28,
    display: 'flex',
    width: 238,
    height: 18,
    fontSize: FontSize.size_xs,
    alignItems: 'center',
  },
  frameWrapper: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    width: 390,
    justifyContent: 'center',
  },
  etaDammamSadmn: {
    fontSize: FontSize.size_sm,
    color: Color.secondaryGrey400,
  },
  tue02Jan: {
    fontFamily: FontFamily.robotoRegular,
    marginTop: 5,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    lineHeight: 20,
  },
  text: {
    color: Color.colorSeagreen,
  },
  dataInputDate: {
    backgroundColor: Color.colorHoneydew_100,
    marginLeft: 90,
  },
  status: {
    height: 72,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text1: {
    color: Color.primaryBlue500,
  },
  dataInputDate1: {
    backgroundColor: Color.colorAliceblue_200,
  },
  frameView: {
    justifyContent: 'space-between',
  },
  frameParent: {
    justifyContent: 'center',
  },
  summaryFormatInner: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_300,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    marginTop: 10,
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
  },
});

export default SectionFormAutocompleteMBL;
