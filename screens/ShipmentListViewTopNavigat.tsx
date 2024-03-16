import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HouseSection from '../components/HouseSection';
import SearchFilterContainer from '../components/SearchFilterContainer';
import SectionWithComments from '../components/SectionWithComments';
import SectionForm from '../components/SectionForm';
import {Color} from '../GlobalStyles';

const ShipmentListViewTopNavigat = () => {
  return (
    <ScrollView>
      <View style={styles.shipmentListViewTopNavigat}>
        <View style={styles.frameParent}>
          <View style={styles.statusBarParent}>
            <SearchFilterContainer />

            <SectionWithComments
              mblNumber="MBL # HLCUBO12312BAXD9"
              shipmentNumber="JOB/23-24/0000001"
            />
            {/* <SectionForm /> */}
            <SectionWithComments
              mblNumber="MBL # HWEUBO12312BAXD9"
              shipmentNumber="JOB/23-24/5670001"
            />
            <SectionWithComments
              mblNumber="MBL # KLCUBO12312BAXD9"
              shipmentNumber="JOB/23-24/4300001"
            />

            <SectionWithComments
              mblNumber="MBL # THCUBO12312BAXD9"
              shipmentNumber="JOB/23-24/1200001"
            />

            <SectionWithComments
              mblNumber="MBL # UYCUBO12312BAXD9"
              shipmentNumber="JOB/23-24/4350001"
            />

            <SectionWithComments
              mblNumber="MBL # UYCUBO12312BAXD9"
              shipmentNumber="JOB/23-24/4350001"
            />

            <SectionWithComments
              mblNumber="MBL # UYCUBO12312BAXD9"
              shipmentNumber="JOB/23-24/4350001"
            />

            <SectionWithComments
              mblNumber="MBL # UYCUBO12312BAXD9"
              shipmentNumber="JOB/23-24/4350001"
            />

            <SectionWithComments
              mblNumber="MBL # UYCUBO12312BAXD9"
              shipmentNumber="JOB/23-24/4350001"
            />

            <SectionWithComments
              mblNumber="MBL # UYCUBO12312BAXD9"
              shipmentNumber="JOB/23-24/4350001"
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
