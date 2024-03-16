import React, {useMemo} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Padding, FontSize, FontFamily, Color, Border} from '../GlobalStyles';

export type SectionInvoicesStatusType = {
  carStatus?: string;

  /** Style props */
  propWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const SectionInvoicesStatus = ({
  carStatus,
  propWidth,
}: SectionInvoicesStatusType) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue('width', propWidth),
    };
  }, [propWidth]);

  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
    <View style={[styles.frameParent, frameView2Style]}>
      <View style={[styles.statusWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.status, styles.statusTypo]}>{carStatus}</Text>
      </View>
      <View style={[styles.shipmentDetailsWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.shipmentDetails, styles.statusTypo]}>
          Details
        </Text>
      </View>
      <View style={[styles.shipmentDetailsWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.shipmentDetails, styles.statusTypo]}>
          Containers
        </Text>
      </View>
      <View style={[styles.shipmentDetailsWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.shipmentDetails, styles.statusTypo]}>Customs</Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: 'row',
  },
  statusTypo: {
    textAlign: 'left',
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  status: {
    fontWeight: '500',
    fontFamily: FontFamily.robotoMedium,
    color: Color.white,
  },
  statusWrapper: {
    backgroundColor: Color.primaryBlue500,
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
  },
  shipmentDetails: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.dark,
  },
  shipmentDetailsWrapper: {
    marginLeft: 24,
  },
  frameParent: {
    backgroundColor: Color.white,
    shadowColor: 'rgba(25, 29, 49, 0.08)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent : 'flex-start',
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 412,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    flexDirection: 'row',
    borderRadius: Border.br_9xs,
  },
});

export default SectionInvoicesStatus;
