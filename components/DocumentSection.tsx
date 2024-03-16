import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
// import {Image} from 'expo-image';
import DocumentStepContainer from './DocumentStepContainer';
import {Color, Border, FontSize, FontFamily, Padding} from '../GlobalStyles';

const DocumentSection = () => {
  return (
    <View style={styles.mainContainerlistTodayWrapper}>
      <View style={styles.mainLayout}>
        <View style={[styles.mainContainerlistToday1, styles.mainLayout]}>
          <View style={styles.mainContainerlistTodayInner}>
            <View style={styles.documentsWrapper}>
              <Text style={[styles.documents, styles.labelFlexBox]}>
                Documents
              </Text>
            </View>
          </View>
          <DocumentStepContainer
            dimensionLabel={require('../assets/icon--outlined--audit.png')}
            sizeLabel="SI/BL:"
          />
          <View style={styles.step}>
            {/* <Image
              style={styles.pdfSvgrepoComOptimizedIcon}
              contentFit="cover"
              source={require('../assets/pdfsvgrepocom-optimized.png')}
            /> */}
            <View style={styles.labelParent}>
              <Text style={[styles.label, styles.labelFlexBox]}>
                <Text style={styles.can}>{`CAN: `}</Text>
                <Text style={styles.can7293901}>CAN7293901</Text>
              </Text>
              <View style={styles.frameWrapper}>
                <View style={styles.mainContainerlistTodayInner}>
                  {/* <Image
                    style={styles.uuserCircleIcon}
                    contentFit="cover"
                    source={require('../assets/uusercircle.png')}
                  /> */}
                  <Text
                    style={[
                      styles.lastUpdatedBy,
                      styles.labelFlexBox,
                    ]}>{`Created by: Anshul `}</Text>
                </View>
              </View>
              <View style={styles.frameWrapper}>
                <View style={styles.mainContainerlistTodayInner}>
                  {/* <Image
                    style={styles.uuserCircleIcon}
                    contentFit="cover"
                    source={require('../assets/uusercircle.png')}
                  /> */}
                  <Text style={[styles.lastUpdatedBy, styles.labelFlexBox]}>
                    Created at: 12-12-20204
                  </Text>
                </View>
              </View>
            </View>
            {/* <Image
              style={styles.stepChild}
              contentFit="cover"
              source={require('../assets/frame-1171276449.png')}
            /> */}
          </View>
          <DocumentStepContainer
            dimensionLabel={require('../assets/xlssvgrepocom-optimized.png')}
            sizeLabel="MBL:"
            propWidth={20}
            propHeight={20}
          />
          <DocumentStepContainer
            dimensionLabel={require('../assets/icon--outlined--audit.png')}
            sizeLabel="MBL:"
            propWidth={28}
            propHeight={28}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainLayout: {
    width: 390,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
  },
  labelFlexBox: {
    textAlign: 'left',
    color: Color.colorSlategray_200,
  },
  documents: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    width: 281,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    color: Color.colorSlategray_200,
  },
  documentsWrapper: {
    width: 317,
    justifyContent: 'center',
  },
  mainContainerlistTodayInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pdfSvgrepoComOptimizedIcon: {
    width: 20,
    height: 20,
    overflow: 'hidden',
  },
  can: {
    fontSize: FontSize.size_sm,
  },
  can7293901: {
    fontSize: FontSize.size_smi,
  },
  label: {
    lineHeight: 20,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    color: Color.colorSlategray_200,
  },
  uuserCircleIcon: {
    width: 14,
    height: 14,
    display: 'none',
    overflow: 'hidden',
  },
  lastUpdatedBy: {
    fontSize: FontSize.size_2xs,
    lineHeight: 14,
    fontFamily: FontFamily.robotoRegular,
    marginLeft: 6,
  },
  frameWrapper: {
    marginTop: 5,
    flexDirection: 'row',
  },
  labelParent: {
    width: 275,
    marginLeft: 15,
  },
  stepChild: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  step: {
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderColor: Color.colorWhitesmoke_400,
    borderWidth: 1.5,
    padding: Padding.p_8xs,
    marginTop: 2,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainerlistToday1: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    padding: Padding.p_3xs,
  },
  mainContainerlistTodayWrapper: {
    width: 428,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DocumentSection;
