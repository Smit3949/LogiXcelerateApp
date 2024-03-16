import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SectionInvoicesStatus from './SectionInvoicesStatus';
import {Color, FontSize, FontFamily, Padding, Border} from '../GlobalStyles';

const DateTimeSection = () => {
  return (
    <View style={styles.frameParent}>
      <SectionInvoicesStatus carStatus="Status" propWidth={412} />
      <View style={[styles.partyDetailsParent, styles.frameGroupFlexBox]}>
        <View style={[styles.partyDetails, styles.partyDetailsBg]}>
          <View style={styles.partyDetailsInner}>
            <View style={styles.locationDotParent}>
              <Text style={[styles.locationDot, styles.locationDotTypo]}>
                location-dot
              </Text>
              <Text style={[styles.labelHeader, styles.textTypo]}>
                ETA Status
              </Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View>
              <Text
                style={[
                  styles.etaDammamSadmn,
                  styles.textTypo,
                ]}>{`ETA Dammam, SADMN (PoD) `}</Text>
              <Text style={[styles.tue02Jan, styles.tue02JanTypo]}>
                Tue, 02 Jan, 2024 11:30 AM
              </Text>
              <Text style={[styles.reachingIn5, styles.tue02JanTypo]}>
                Reaching in 5 Days
              </Text>
            </View>
            <View style={[styles.dataInputDate, styles.frameGroupFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>On Time</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={[styles.frameContainer, styles.partyDetailsBg]}>
            <View style={styles.locationDotParent}>
              <View>
                <View>
                  <View style={styles.anchorParent}>
                    <Text style={styles.anchor}>anchor</Text>
                    <View style={styles.frameChild} />
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View>
                      <Text style={[styles.etaDammamSadmn, styles.textTypo]}>
                        Nhavasheva, IN
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.timelinePlaceOfCarrierRe1}>
                <View>
                  <View style={styles.anchorParent}>
                    <Text style={styles.anchor}>anchor</Text>
                    <View style={styles.frameChild} />
                  </View>
                  <View style={styles.frameWrapper1}>
                    <View>
                      <Text style={[styles.etaDammamSadmn, styles.textTypo]}>
                        via Jebelali, AJ
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.timelinePlaceOfCarrierRe2}>
                <View>
                  <Text style={styles.anchor}>anchor</Text>
                  <View style={styles.frameWrapper1}>
                    <View>
                      <Text
                        style={[
                          styles.etaDammamSadmn,
                          styles.textTypo,
                        ]}>{`Dammam, SA `}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.expandWrapper}>
              <Text style={styles.expand}>Expand</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  partyDetailsBg: {
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
  locationDotTypo: {
    color: Color.colorSlategray_200,
    textTransform: 'uppercase',
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
  },
  textTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  tue02JanTypo: {
    lineHeight: 20,
    marginTop: 5,
    color: Color.colorSeagreen,
    textAlign: 'left',
    fontFamily: FontFamily.robotoRegular,
  },
  locationDot: {
    textAlign: 'left',
    fontFamily: FontFamily.robotoRegular,
  },
  labelHeader: {
    marginLeft: 8,
    textAlign: 'left',
    color: Color.colorSlategray_200,
    textTransform: 'uppercase',
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  locationDotParent: {
    flexDirection: 'row',
  },
  partyDetailsInner: {
    width: 320,
    flexDirection: 'row',
  },
  etaDammamSadmn: {
    color: Color.secondaryGrey400,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
  },
  tue02Jan: {
    fontSize: FontSize.size_lg,
    marginTop: 5,
    color: Color.colorSeagreen,
  },
  reachingIn5: {
    marginTop: 5,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_sm,
  },
  text: {
    lineHeight: 18,
    textAlign: 'center',
    color: Color.colorSeagreen,
    fontSize: FontSize.size_sm,
  },
  dataInputDate: {
    backgroundColor: Color.colorHoneydew_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_10xs,
    marginLeft: 15,
    flexDirection: 'row',
    borderRadius: Border.br_9xs,
  },
  frameGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  partyDetails: {
    width: 390,
    padding: Padding.p_3xs,
    borderRadius: Border.br_9xs,
  },
  anchor: {
    fontSize: FontSize.size_base,
    textAlign: 'center',
    color: Color.secondaryGrey400,
    fontFamily: FontFamily.robotoRegular,
  },
  frameChild: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.secondaryGrey400,
    width: 100,
    height: 2,
    marginLeft: 10,
  },
  anchorParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameWrapper1: {
    marginTop: 5,
  },
  timelinePlaceOfCarrierRe1: {
    marginLeft: 8,
  },
  timelinePlaceOfCarrierRe2: {
    marginLeft: 8,
    alignItems: 'center',
  },
  expand: {
    // textDecoration: 'underline',
    color: Color.primaryBlue500,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    fontFamily: FontFamily.robotoRegular,
  },
  expandWrapper: {
    marginTop: 10,
  },
  frameContainer: {
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
  },
  frameWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  partyDetailsParent: {
    width: 428,
    marginTop: 10,
  },
  frameParent: {
    width: 412,
    marginTop: 10,
  },
});

export default DateTimeSection;
