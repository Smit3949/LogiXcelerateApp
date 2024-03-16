import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
// import {Image} from 'expo-image';
import {Color, FontSize, FontFamily, Padding} from '../GlobalStyles';

const Variant = () => {
  return (
    <View style={[styles.variant2, styles.variant2FlexBox]}>
      <View style={styles.variant2Inner}>
        <View style={styles.pmWrapper}>
          <Text style={styles.pm}>{`2:14 PM `}</Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.spfbom23110024Parent, styles.variant2FlexBox]}>
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
      <View style={styles.variant2Inner}>
        {/* <Image
          style={styles.chatIcon}
          contentFit="cover"
          source={require('../assets/chat.png')}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  variant2FlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
  anshulTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: 'left',
  },
  pm: {
    fontSize: FontSize.size_3xs,
    color: Color.lightGrey,
    textAlign: 'right',
    fontFamily: FontFamily.robotoRegular,
  },
  pmWrapper: {
    width: 46,
    height: 14,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  variant2Inner: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: Color.white,
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
    color: Color.secondaryGrey400,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    fontSize: FontSize.size_2xs,
    alignItems: 'center',
  },
  spfbom23110024Parent: {
    width: 328,
  },
  anshul: {
    fontWeight: '700',
    fontFamily: FontFamily.robotoBold,
    color: Color.colorTomato,
  },
  canYouPlease: {
    color: Color.secondaryGrey400,
    fontFamily: FontFamily.robotoRegular,
  },
  anshulCanYouContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 347,
    fontSize: FontSize.size_2xs,
    lineHeight: 20,
  },
  anshulCanYouPleaseConfirmWrapper: {
    alignSelf: 'stretch',
    height: 20,
    marginTop: 2,
  },
  frameParent: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
  chatIcon: {
    width: 16,
    height: 16,
    overflow: 'hidden',
  },
  variant2: {
    borderStyle: 'solid',
    borderColor: Color.colorLavender,
    borderWidth: 1,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_11xs,
  },
});

export default Variant;
