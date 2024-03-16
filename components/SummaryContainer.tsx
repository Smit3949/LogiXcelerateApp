import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SectionFormAutocompleteMBL from './SectionFormAutocompleteMBL';
import {Color, FontSize, FontFamily, Border, Padding} from '../GlobalStyles';

const SummaryContainer = () => {
  return (
    <View style={[styles.summaryFormat, styles.summaryFormatFlexBox]}>
      <View style={styles.wrapperFlexBox}>
        <Text style={styles.text}>
          <Text>
            <Text style={styles.anshulMehta}>{`Anshul Mehta `}</Text>
            <Text style={styles.from}>{`from `}</Text>
            <Text style={styles.anshulMehta}>Anshul Exporters</Text>
            <Text style={styles.from}>{` `}</Text>
          </Text>
          <Text style={styles.from}> is calling</Text>
        </Text>
      </View>
      <SectionFormAutocompleteMBL />
      <SectionFormAutocompleteMBL />
      <View style={[styles.viewAllShipmentsWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.viewAllShipments}>View all Shipments</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryFormatFlexBox: {
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  wrapperFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  anshulMehta: {
    color: Color.primaryBlue500,
  },
  from: {
    color: Color.colorGray_200,
  },
  text: {
    fontSize: FontSize.textXlSemibold_size,
    lineHeight: 30,
    fontWeight: '600',
    fontFamily: FontFamily.textXlSemibold,
    textAlign: 'center',
    width: 406,
  },
  viewAllShipments: {
    fontSize: FontSize.size_smi,
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
    textAlign: 'left',
    color: Color.primaryBlue500,
  },
  viewAllShipmentsWrapper: {
    borderRadius: Border.br_8xs,
    borderStyle: 'solid',
    borderColor: Color.primaryBlue500,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: Color.white,
    flexDirection: 'row',
  },
  summaryFormat: {
    overflow: 'hidden',
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_mid,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
});

export default SummaryContainer;
