import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {FontSize, Padding, Color, FontFamily, Border} from '../GlobalStyles';

const HouseSection1 = () => {
  return (
    <View style={styles.frameParent}>
      <View>
        <View style={styles.houseParent}>
          <Text style={styles.house}>house</Text>
          <Text style={[styles.shipments, styles.shipmentsTypo]}>
            Shipments
          </Text>
          <Text style={[styles.shipments, styles.shipmentsTypo]}>/</Text>
          <Text style={[styles.spfbom23110024, styles.shipmentsTypo]}>
            SPFBOM23110024
          </Text>
        </View>
      </View>
      <View style={styles.frameGroup}>
        <View style={styles.frameContainer}>
          <View style={[styles.usersWrapper, styles.wrapperSpaceBlock]}>
            <Text style={styles.users}>users</Text>
          </View>
        </View>
        <View style={[styles.shareNodesWrapper, styles.wrapperSpaceBlock]}>
          <Text style={styles.users}>share-nodes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shipmentsTypo: {
    marginLeft: 4,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
  },
  wrapperSpaceBlock: {
    padding: Padding.p_5xs,
    backgroundColor: Color.white,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  house: {
    textAlign: 'left',
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  shipments: {
    color: Color.colorDimgray_100,
    lineHeight: 24,
    marginLeft: 4,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
  },
  spfbom23110024: {
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: FontFamily.robotoMedium,
    color: Color.primaryBlue500,
  },
  houseParent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  users: {
    color: Color.secondaryGrey400,
    textAlign: 'center',
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  usersWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameContainer: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Color.colorAliceblue_300,
    borderStyle: 'solid',
    borderRadius: Border.br_9xs,
    flexDirection: 'row',
  },
  shareNodesWrapper: {
    marginLeft: 8,
    borderWidth: 1,
    borderColor: Color.colorAliceblue_300,
    borderStyle: 'solid',
    borderRadius: Border.br_9xs,
    padding: Padding.p_5xs,
    backgroundColor: Color.white,
  },
  frameGroup: {
    flexDirection: 'row',
  },
  frameParent: {
    width: 428,
    justifyContent: 'space-between',
    padding: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default HouseSection1;
