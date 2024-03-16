import * as React from 'react';
// import {Image} from 'expo-image';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Color, Border, FontFamily, Padding, FontSize} from '../GlobalStyles';

export type SectionWithCommentsType = {
  mblNumber?: string;
};

const SectionWithComments = (props: any) => {
  const {mblNumber, shipmentNumber} = props;
  return (
    <View style={[styles.frameParent, styles.frameParentBg]}>
      <View style={styles.defaultBoldParent}>
        {/* <Image
          style={styles.defaultBold}
          contentFit="cover"
          source={require('../assets/default--bold.png')}
        /> */}
        <View>
          <View style={styles.spfbom23110024Wrapper}>
            <Text style={[styles.spfbom23110024, styles.nhavashevaInTypo]}>
              {shipmentNumber}
            </Text>
          </View>
          <Text style={[styles.consigneeMoon, styles.nhavashevaInTypo]}>
            Consignee - Moon Pharma INC
          </Text>
          <Text style={[styles.consigneeMoon, styles.nhavashevaInTypo]}>
            {mblNumber}
          </Text>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.frameWrapper}>
            <View style={[styles.commentsWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.comments, styles.commentsTypo]}>C</Text>
            </View>
          </View>
          <View style={[styles.shareNodesWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.comments, styles.commentsTypo]}>S</Text>
          </View>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.spfbom23110024Wrapper}>
          <Text style={[styles.x40Refeer, styles.x40RefeerTypo]}>
            2 x 40 Refeer High Cube
          </Text>
        </View>
        <View style={[styles.rightIconGroup, styles.wrapperFlexBox]}>
          <Text style={styles.x40RefeerTypo}>temperature-low</Text>
          <Text style={[styles.tempControlled, styles.x40RefeerTypo]}>
            Temp Controlled
          </Text>
        </View>
      </View>
      <View style={styles.frameChild} />
      <View style={[styles.partyDetails, styles.partyDetailsLayout]}>
        <View>
          <Text
            style={[
              styles.etaDammamSadmn,
              styles.nhavashevaInTypo,
            ]}>{`ETA Dammam, SADMN (PoD) `}</Text>
          <Text style={[styles.tue02Jan, styles.tue02JanTypo]}>
            Tue, 02 Jan, 2024 11:30 AM
          </Text>
          <Text style={[styles.reachingIn5, styles.tue02JanTypo]}>
            Reaching in 5 Days
          </Text>
        </View>
        <View style={[styles.dataInputDate, styles.wrapperFlexBox]}>
          <Text style={styles.text}>On Time</Text>
        </View>
      </View>
      <View style={[styles.frameWrapper1, styles.partyDetailsLayout]}>
        <View style={styles.frameContainer}>
          <View>
            <View>
              <View style={styles.spfbom23110024Wrapper}>
                <Text
                  style={[
                    styles.comments,
                    styles.commentsTypo,
                    styles.fontSizeSmall,
                  ]}>
                  Nhavasheva, IN
                </Text>
                <View style={styles.frameItem} />
              </View>
              {/* <View style={styles.frameWrapper2}>
                <View>
                  <Text style={[styles.nhavashevaIn, styles.nhavashevaInTypo]}>
                    Nhavasheva, IN
                  </Text>
                </View>
              </View> */}
            </View>
          </View>
          <View style={styles.timelinePlaceOfCarrierRe1}>
            <View>
              <View style={styles.spfbom23110024Wrapper}>
                <Text
                  style={[
                    styles.comments,
                    styles.commentsTypo,
                    styles.fontSizeSmall,
                  ]}>
                  Jebelali, AJ
                </Text>
                <View style={styles.frameItem} />
              </View>
              {/* <View style={styles.frameWrapper2}>
                <View>
                  <Text style={[styles.nhavashevaIn, styles.nhavashevaInTypo]}>
                    via Jebelali, AJ
                  </Text>
                </View>
              </View> */}
            </View>
          </View>
          <View style={styles.timelinePlaceOfCarrierRe2}>
            <View>
              <Text
                style={[
                  styles.comments,
                  styles.commentsTypo,
                  styles.fontSizeSmall,
                ]}>
                Dammam, SA
              </Text>
              {/* <View style={styles.frameWrapper2}>
                <View>
                  <Text
                    style={[
                      styles.nhavashevaIn,
                      styles.nhavashevaInTypo,
                      styles.fontSizeSmall,
                    ]}>{`Dammam, SA `}</Text>
                </View>
              </View> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentBg: {
    backgroundColor: Color.white,
    borderRadius: Border.br_9xs,
  },
  fontSizeSmall: {
    fontSize: 13,
  },
  marginBottomT: {
    marginBottom: 10,
  },
  nhavashevaInTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  wrapperSpaceBlock: {
    padding: Padding.p_5xs,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: Color.white,
  },
  commentsTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.robotoRegular,
  },
  x40RefeerTypo: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.secondaryGrey400,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
  },
  wrapperFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  partyDetailsLayout: {
    width: 350,
    marginTop: 5,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  tue02JanTypo: {
    marginTop: 2,
    color: Color.colorSeagreen,
    fontFamily: FontFamily.robotoRegular,
    textAlign: 'left',
    lineHeight: 20,
  },
  defaultBold: {
    width: 40,
    height: 40,
  },
  spfbom23110024: {
    color: Color.primaryBlue500,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  spfbom23110024Wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  consigneeMoon: {
    lineHeight: 20,
    display: 'flex',
    width: 238,
    height: 18,
    color: Color.secondaryGrey400,
    fontSize: FontSize.size_xs,
    alignItems: 'center',
  },
  comments: {
    fontSize: FontSize.size_base,
    color: Color.secondaryGrey400,
  },
  commentsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameWrapper: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Color.colorAliceblue_300,
    borderStyle: 'solid',
    flexDirection: 'row',
    borderRadius: Border.br_9xs,
  },
  shareNodesWrapper: {
    marginLeft: 8,
    borderWidth: 1,
    borderColor: Color.colorAliceblue_300,
    borderStyle: 'solid',
    padding: Padding.p_5xs,
    borderRadius: Border.br_9xs,
  },
  frameContainer: {
    flexDirection: 'row',
  },
  defaultBoldParent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 340,
  },
  rightIcon: {
    color: Color.colorSlategray_200,
    width: 20,
    fontSize: FontSize.size_xs,
  },
  x40Refeer: {
    marginLeft: 5,
    lineHeight: 20,
  },
  tempControlled: {
    marginLeft: 8,
    lineHeight: 20,
  },
  rightIconGroup: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  frameView: {
    marginTop: 5,
    flexDirection: 'row',
  },
  frameChild: {
    backgroundColor: Color.colorAliceblue_300,
    height: 1,
    marginTop: 5,
    width: 390,
    borderRadius: Border.br_9xs,
  },
  etaDammamSadmn: {
    color: Color.secondaryGrey400,
    fontSize: FontSize.size_xs,
  },
  tue02Jan: {
    fontSize: FontSize.size_sm,
  },
  reachingIn5: {
    width: 102,
    height: 17,
    fontSize: FontSize.size_xs,
  },
  text: {
    lineHeight: 18,
    color: Color.colorSeagreen,
    textAlign: 'center',
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    fontSize: FontSize.size_sm,
  },
  dataInputDate: {
    backgroundColor: Color.colorHoneydew_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_10xs,
    flexDirection: 'row',
    borderRadius: Border.br_9xs,
  },
  partyDetails: {
    padding: Padding.p_8xs,
    justifyContent: 'space-between',
    backgroundColor: Color.white,
    borderRadius: Border.br_9xs,
  },
  frameItem: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.secondaryGrey400,
    width: 20,
    height: 2,
    marginLeft: 10,
  },
  nhavashevaIn: {
    color: Color.secondaryGrey400,
    fontSize: FontSize.size_sm,
  },
  frameWrapper2: {
    marginTop: 5,
  },
  timelinePlaceOfCarrierRe1: {
    marginLeft: 8,
  },
  timelinePlaceOfCarrierRe2: {
    marginLeft: 8,
    alignItems: 'center',
  },
  frameWrapper1: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_300,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_6xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameParent: {
    shadowColor: 'rgba(25, 29, 49, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    padding: Padding.p_6xs,
    marginTop: 10,
  },
});

export default SectionWithComments;
