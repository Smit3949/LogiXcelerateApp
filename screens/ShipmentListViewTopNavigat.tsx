import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import HouseSection from '../components/HouseSection';
import SearchFilterContainer from '../components/SearchFilterContainer';
import SectionWithComments from '../components/SectionWithComments';
import SectionForm from '../components/SectionForm';
import {Color} from '../GlobalStyles';

const ShipmentListViewTopNavigat = () => {
  return (
    <View style={styles.shipmentListViewTopNavigat}>
      <View style={styles.frameParent}>
        <HouseSection />
        <View style={styles.statusBarParent}>
          <SearchFilterContainer />
          <SectionWithComments mblNumber="MBL # HLCUBO12312BAXD9" />
          <SectionForm />
          <SectionWithComments mblNumber="MBL #" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarParent: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameParent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 428,
  },
  shipmentListViewTopNavigat: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
});

export default ShipmentListViewTopNavigat;
