import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import StatusContainer from './StatusContainer';
import Section2 from './Section2';
import {Color, FontFamily, FontSize, Border, Padding} from '../GlobalStyles';

const HouseSection = () => {
  return (
    <View style={styles.statusBarParent}>
      <StatusContainer />
      <View style={styles.statusBar}>
        <Text style={[styles.house, styles.houseTypo]}>house</Text>
        <View style={[styles.statusBarChild, styles.shareNodesSpaceBlock]} />
        <Text style={[styles.shareNodes, styles.shareNodesSpaceBlock]}>
          share-nodes
        </Text>
        <Text style={[styles.shareNodes, styles.shareNodesSpaceBlock]}>
          square-9
        </Text>
        <Text style={[styles.shareNodes, styles.shareNodesSpaceBlock]}>
          square-9
        </Text>
      </View>
      <Section2 />
    </View>
  );
};

const styles = StyleSheet.create({
  houseTypo: {
    textAlign: 'center',
    color: Color.shadesBlack,
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    fontSize: FontSize.textXlSemibold_size,
  },
  shareNodesSpaceBlock: {
    marginLeft: 10,
    flex: 1,
  },
  house: {
    flex: 1,
    textAlign: 'center',
    color: Color.shadesBlack,
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    fontSize: FontSize.textXlSemibold_size,
  },
  statusBarChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    height: 25,
    borderStyle: 'solid',
  },
  shareNodes: {
    textAlign: 'center',
    color: Color.shadesBlack,
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    fontSize: FontSize.textXlSemibold_size,
  },
  statusBar: {
    backgroundColor: Color.colorAliceblue_300,
    borderColor: Color.colorWhitesmoke_100,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Padding.p_3xs,
    borderStyle: 'solid',
    alignSelf: 'stretch',
  },
  statusBarParent: {
    backgroundColor: Color.white,
    alignSelf: 'stretch',
  },
});

export default HouseSection;
