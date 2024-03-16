import * as React from 'react';
// import {Image} from 'expo-image';
import {StyleSheet, Text, View} from 'react-native';
import {Color, Border, FontFamily, Padding, FontSize} from '../GlobalStyles';

const SectionForm = () => {
  return (
    <View style={[styles.frameParent, styles.frameParentBg]}>
      <View style={styles.rectangleParent}>
        {/* <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require('../assets/rectangle-3315.png')}
        /> */}
        <View>
          <View style={styles.spfbom23110024Wrapper}>
            <Text style={styles.spfbom23110024}>SPFBOM23110024</Text>
          </View>
          <Text style={[styles.consigneeMoon, styles.mumbaiBomTypo]}>
            Consignee - Moon Pharma INC
          </Text>
          <Text style={[styles.consigneeMoon, styles.mumbaiBomTypo]}>
            MAWB #
          </Text>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.frameWrapper}>
            <View style={[styles.commentsWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.comments}>comments</Text>
            </View>
          </View>
          <View style={[styles.shareNodesWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.comments}>share-nodes</Text>
          </View>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.spfbom23110024Wrapper}>
          {/* <Image
            style={styles.chargableWeightIcon}
            contentFit="cover"
            source={require('../assets/chargable-weight1.png')}
          /> */}
          <Text style={[styles.kgs, styles.kgsTypo]}>383.5 kgs</Text>
          <View style={styles.grossWeightParent}>
            {/* <Image
              style={styles.chargableWeightIcon}
              contentFit="cover"
              source={require('../assets/gross-weight1.png')}
            /> */}
            <Text style={[styles.kgs, styles.kgsTypo]}>156 kgs</Text>
          </View>
        </View>
        <View style={[styles.rightIconParent, styles.wrapperFlexBox]}>
          <Text style={styles.kgsTypo}>temperature-low</Text>
          <Text style={[styles.kgs, styles.kgsTypo]}>Temp Controlled</Text>
        </View>
        <Text style={[styles.vaccineVeils, styles.kgsTypo]}>Vaccine Veils</Text>
      </View>
      <View style={styles.frameItem} />
      <View style={[styles.partyDetails, styles.partyDetailsLayout]}>
        <View>
          <Text
            style={[
              styles.etaDammamSadmn,
              styles.mumbaiBomTypo,
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
                <Text style={styles.comments}>plane-departure</Text>
                <View style={styles.frameInner} />
              </View>
              <View style={styles.frameWrapper2}>
                <View>
                  <Text style={[styles.mumbaiBom, styles.mumbaiBomTypo]}>
                    Mumbai, BOM
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.timelinePlaceOfCarrierRe1}>
            <View>
              <View style={styles.spfbom23110024Wrapper}>
                <Text style={styles.comments}>plane-departure</Text>
                <View style={styles.frameInner} />
              </View>
              <View style={styles.frameWrapper2}>
                <View>
                  <Text style={[styles.mumbaiBom, styles.mumbaiBomTypo]}>
                    via Dubai, DXB
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.timelinePlaceOfCarrierRe2}>
            <View>
              <Text style={styles.comments}>plane-departure</Text>
              <View style={styles.frameWrapper2}>
                <View>
                  <Text style={[styles.mumbaiBom, styles.mumbaiBomTypo]}>
                    Chicago, ORD
                  </Text>
                </View>
              </View>
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
  mumbaiBomTypo: {
    color: Color.secondaryGrey400,
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
  kgsTypo: {
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
    width: 380,
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
  frameChild: {
    width: 44,
    height: 44,
  },
  spfbom23110024: {
    color: Color.primaryBlue500,
    textAlign: 'left',
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  spfbom23110024Wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  consigneeMoon: {
    lineHeight: 28,
    display: 'flex',
    width: 238,
    height: 18,
    fontSize: FontSize.size_xs,
    alignItems: 'center',
  },
  comments: {
    fontSize: FontSize.size_base,
    textAlign: 'center',
    fontFamily: FontFamily.robotoRegular,
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
  rectangleParent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 390,
  },
  chargableWeightIcon: {
    width: 15,
    height: 15,
  },
  kgs: {
    marginLeft: 8,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
  },
  grossWeightParent: {
    marginLeft: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightIconParent: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  vaccineVeils: {
    marginLeft: 5,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
  },
  frameView: {
    marginTop: 5,
    flexDirection: 'row',
  },
  frameItem: {
    backgroundColor: Color.colorAliceblue_300,
    height: 1,
    marginTop: 5,
    width: 390,
    borderRadius: Border.br_9xs,
  },
  etaDammamSadmn: {
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
  frameInner: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.secondaryGrey400,
    width: 90,
    height: 2,
    marginLeft: 10,
  },
  mumbaiBom: {
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
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
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
    padding: Padding.p_3xs,
    marginTop: 10,
  },
});

export default SectionForm;
