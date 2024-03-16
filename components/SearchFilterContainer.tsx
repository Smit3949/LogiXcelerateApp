import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {FontFamily, FontSize, Padding, Border, Color} from '../GlobalStyles';

const SearchFilterContainer = () => {
  return (
    <View style={styles.statusBar}>
      <View style={styles.statusBarInnerFlexBox}>
        <Text style={[styles.shipments, styles.shipmentsTypo]}>Shipments</Text>
      </View>
      <View
        style={[
          styles.statusBarInner,
          styles.statusBarInnerFlexBox,
          styles.width,
        ]}>
        <View style={styles.searchAnyShipmentByBlAwbParent}>
          <Text style={[styles.searchAnyShipment, styles.magnifyingGlassTypo]}>
            Search any shipment by BL, AWB, Container #, Ref #....
          </Text>
          <Text style={[styles.magnifyingGlass, styles.magnifyingGlassTypo]}>
            magnifying-glass
          </Text>
        </View>
      </View>
      <View style={[styles.statusBarInner, styles.statusBarInnerFlexBox]}>
        <View style={[styles.allActiveWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.allActive, styles.shipmentsTypo]}>
            All Active
          </Text>
        </View>
        <View style={[styles.onTimeWrapper, styles.wrapperSpaceBlock]}>
          <Text style={styles.onTime}>On Time</Text>
        </View>
        <View style={[styles.onTimeWrapper, styles.wrapperSpaceBlock]}>
          <Text style={styles.onTime}>Delayed</Text>
        </View>
        <View style={[styles.onTimeWrapper, styles.wrapperSpaceBlock]}>
          <Text style={styles.onTime}>Before Time</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shipmentsTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  statusBarInnerFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  magnifyingGlassTypo: {
    textAlign: 'center',
    letterSpacing: 0,
    fontFamily: FontFamily.robotoRegular,
  },
  width: {
    width: '80%',
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: 'row',
  },
  shipments: {
    color: Color.shadesBlack,
  },
  searchAnyShipment: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
  },
  magnifyingGlass: {
    fontSize: FontSize.size_mini,
    color: Color.secondaryGrey400,
    marginLeft: 41,
  },
  searchAnyShipmentByBlAwbParent: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: 407,
    height: 30,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    alignItems: 'center',
    flexDirection: 'row',
    borderStyle: 'solid',
  },
  statusBarInner: {
    marginTop: 5,
  },
  allActive: {
    color: Color.white,
  },
  allActiveWrapper: {
    backgroundColor: Color.primaryBlue500,
  },
  onTime: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.robotoRegular,
    textAlign: 'left',
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  onTimeWrapper: {
    backgroundColor: Color.white,
    marginLeft: 5,
  },
  statusBar: {
    backgroundColor: Color.colorAliceblue_300,
    borderColor: Color.colorWhitesmoke_100,
    borderBottomWidth: 1,
    width: 428,
    justifyContent: 'center',
    padding: Padding.p_3xs,
    borderStyle: 'solid',
  },
});

export default SearchFilterContainer;
