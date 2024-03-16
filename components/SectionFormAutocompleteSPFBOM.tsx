import React, {useMemo} from 'react';
// import {Image} from 'expo-image';
import {StyleSheet, View, Text} from 'react-native';
import {Color, Padding, FontSize, FontFamily} from '../GlobalStyles';

export type SectionFormAutocompleteSPFBOMType = {
  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const SectionFormAutocompleteSPFBOM = ({
  propMarginTop,
}: SectionFormAutocompleteSPFBOMType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue('marginTop', propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.frameParent, styles.parentFlexBox, frameViewStyle]}>
      <View style={[styles.chatWrapper, styles.wrapperSpaceBlock]}>
        {/* <Image
          style={styles.chatIcon}
          contentFit="cover"
          source={require('../assets/chat.png')}
        /> */}
      </View>
      <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
        <View style={[styles.spfbom23110024Parent, styles.parentFlexBox]}>
          <Text style={styles.spfbom23110024}>SPFBOM23110024</Text>
          <Text style={[styles.customerAnshulExporters, styles.anshulTypo]}>
            Customer: Anshul Exporters
          </Text>
        </View>
        <View style={styles.anshulCanYouPleaseConfirmWrapper}>
          <Text style={[styles.anshulCanYouContainer, styles.anshulTypo]}>
            <Text style={styles.anshul}>{`@anshul `}</Text>
            <Text style={styles.canYouPlease}>
              Can you please confirm why this shipment is delayed?
            </Text>
          </Text>
        </View>
      </View>
      <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
        <View style={styles.pmWrapper}>
          <Text style={styles.pm}>{`2:14 PM `}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameSpaceBlock: {
    marginLeft: 10,
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
  anshulTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: 'left',
  },
  chatIcon: {
    width: 16,
    height: 16,
    overflow: 'hidden',
  },
  chatWrapper: {
    overflow: 'hidden',
    backgroundColor: Color.white,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: 'center',
  },
  spfbom23110024: {
    fontSize: FontSize.size_smi,
    color: Color.primaryBlue500,
    textAlign: 'left',
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    lineHeight: 20,
  },
  customerAnshulExporters: {
    lineHeight: 28,
    display: 'flex',
    width: 157,
    height: 18,
    marginLeft: 14,
    color: Color.secondaryGrey400,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    fontSize: FontSize.size_2xs,
    alignItems: 'center',
  },
  spfbom23110024Parent: {
    alignSelf: 'stretch',
  },
  anshul: {
    fontWeight: '700',
    fontFamily: FontFamily.robotoBold,
    color: Color.colorTomato,
  },
  canYouPlease: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.secondaryGrey400,
  },
  anshulCanYouContainer: {
    top: 0,
    left: 0,
    width: 347,
    position: 'absolute',
    fontSize: FontSize.size_2xs,
    lineHeight: 20,
  },
  anshulCanYouPleaseConfirmWrapper: {
    width: 328,
    height: 20,
    marginTop: 2,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
  },
  pm: {
    top: 1,
    left: 10,
    fontSize: FontSize.size_3xs,
    color: Color.lightGrey,
    textAlign: 'right',
    fontFamily: FontFamily.robotoRegular,
    position: 'absolute',
  },
  pmWrapper: {
    width: 46,
    height: 14,
  },
  frameWrapper: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameParent: {
    borderStyle: 'solid',
    borderColor: Color.colorLavender,
    borderWidth: 1,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_11xs,
  },
});

export default SectionFormAutocompleteSPFBOM;
