import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HouseSection from '../components/HouseSection';
import SearchFilterContainer from '../components/SearchFilterContainer';
import SectionWithComments from '../components/SectionWithComments';
import SectionForm from '../components/SectionForm';
import {Color} from '../GlobalStyles';
import {NativeRouter, Route, Link, Routes} from 'react-router-native';
import TaskSwipeScreen from './TaskSwipeScreen';

const About = () => <Text>About</Text>;

const ShipmentListViewTopNavigat = (props: any) => {
  const {navigation} = props;
  console.log('navigation', navigation);
  return (
    <ScrollView>
      <View style={styles.shipmentListViewTopNavigat}>
        <View style={styles.frameParent}>
          <View style={styles.statusBarParent}>
            {/* <SearchFilterContainer /> */}
            {/* <Link to="/shipment"> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('TaskSwipeScreen')}>
              <SectionWithComments
                mblNumber="MBL # HLCUBO12312BAXD9"
                shipmentNumber="JOB/23-24/0000001"
              />
            </TouchableOpacity>
            {/* </Link> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('TaskSwipeScreen')}>
              <SectionWithComments
                mblNumber="MBL # HWEUBO12312BAXD9"
                shipmentNumber="JOB/23-24/5670001"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('TaskSwipeScreen')}>
              <SectionWithComments
                mblNumber="MBL # KLCUBO12312BAXD9"
                shipmentNumber="JOB/23-24/4300001"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('TaskSwipeScreen')}>
              <SectionWithComments
                mblNumber="MBL # THCUBO12312BAXD9"
                shipmentNumber="JOB/23-24/1200001"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('TaskSwipeScreen')}>
              <SectionWithComments
                mblNumber="MBL # UYCUBO12312BAXD9"
                shipmentNumber="JOB/23-24/4350001"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('TaskSwipeScreen')}>
              <SectionWithComments
                mblNumber="MBL # UYCUBO12312BAXD9"
                shipmentNumber="JOB/23-24/4350001"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('TaskSwipeScreen')}>
              <SectionWithComments
                mblNumber="MBL # UYCUBO12312BAXD9"
                shipmentNumber="JOB/23-24/4350001"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('TaskSwipeScreen')}>
              <SectionWithComments
                mblNumber="MBL # UYCUBO12312BAXD9"
                shipmentNumber="JOB/23-24/4350001"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('TaskSwipeScreen')}>
              <SectionWithComments
                mblNumber="MBL # UYCUBO12312BAXD9"
                shipmentNumber="JOB/23-24/4350001"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('TaskSwipeScreen')}>
              <SectionWithComments
                mblNumber="MBL # UYCUBO12312BAXD9"
                shipmentNumber="JOB/23-24/4350001"
              />
            </TouchableOpacity>
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
