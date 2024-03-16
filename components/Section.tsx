import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import StatusContainer from './StatusContainer';
import Section2 from './Section2';
import HouseSection1 from './HouseSection1';
import SectionInvoicesStatus from './SectionInvoicesStatus';
import {Color} from '../GlobalStyles';

const Section = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.statusBarParent}>
        {/* <StatusContainer
          batteryAlignSelf="unset"
          batteryHeight={44}
          borderAlignSelf="unset"
          borderWidth={428}
        /> */}
        <View style={styles.frameGroup}>
          {/* <Section2 /> */}
          <HouseSection1 />
        </View>
      </View>
      <View style={styles.frameWrapper}>
        <SectionInvoicesStatus carStatus="Activity" propWidth={422} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroup: {
    alignSelf: 'stretch',
    backgroundColor: Color.white,
  },
  statusBarParent: {
    backgroundColor: Color.white,
  },
  frameWrapper: {
    marginTop: 10,
    width: 422,
  },
  frameParent: {
    width: 422,
  },
});

export default Section;
