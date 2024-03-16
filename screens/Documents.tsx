import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {Image} from 'expo-image';
import StatusBar1 from '../components/StatusBar1';
import HouseSection2 from '../components/HouseSection2';
import SectionInvoicesStatus from '../components/SectionInvoicesStatus';
import DocumentSection from '../components/DocumentSection';
import {Color, FontFamily, FontSize, Border, Padding} from '../GlobalStyles';

const Documents = () => {
  return (
    <View style={styles.documents}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.statusBarParent}>
          <View style={styles.statusBar}>
            <StatusBar1
              cap={require('../assets/cap1.png')}
              wifi={require('../assets/wifi1.png')}
              cellularConnection={require('../assets/cellular-connection1.png')}
              statusBarPosition="absolute"
              statusBarHeight="100%"
              statusBarAlignSelf="unset"
              statusBarWidth="100%"
              statusBarTop="0%"
              statusBarRight="0%"
              statusBarBottom="0%"
              statusBarLeft="0%"
              batteryWidth="6.5%"
              batteryLeft="89.7%"
              batteryRight="3.81%"
              borderWidth="90.29%"
              borderRight="9.71%"
              capIconWidth="5.4%"
              capIconLeft="94.6%"
              capIconRight="0%"
              capacityWidth="73.74%"
              capacityRight="17.99%"
              capacityLeft="8.27%"
              wifiIconWidth={18}
              cellularConnectionIconWidth={19}
              timeStyleWidth="14.39%"
              timeStyleLeft="5.61%"
              timeWidth={62}
            />
          </View>
          <View style={styles.statusBar1}>
            <Text style={styles.houseTypo}>house</Text>
            <View style={styles.statusBarChild} />
            <Text style={[styles.shareNodes, styles.houseTypo]}>
              share-nodes
            </Text>
            <Text style={[styles.shareNodes, styles.houseTypo]}>square-9</Text>
            <Text style={[styles.shareNodes, styles.houseTypo]}>square-9</Text>
          </View>
          <HouseSection2 />
        </View>
        <View style={styles.frameGroup}>
          <SectionInvoicesStatus carStatus="Documents" propWidth={412} />
          <DocumentSection />
        </View>
      </View>
      <View style={[styles.uploadDragDropWrapper, styles.uploadLayout]}>
        <View style={[styles.uploadDragDrop, styles.uploadLayout]}>
          {/* <Image
            style={styles.ufileUploadAltIcon}
            contentFit="cover"
            source={require('../assets/ufileuploadalt.png')}
          /> */}
          <View style={styles.textWrapper}>
            <Text style={[styles.clickOrDrag, styles.max2MbTypo]}>
              Click or drag file to this area to upload documents
            </Text>
            <Text style={[styles.max2Mb, styles.max2MbTypo]}>
              max 2 MB / file allowed
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: 0,
    top: 0,
  },
  houseTypo: {
    textAlign: 'center',
    color: Color.shadesBlack,
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    fontSize: FontSize.textXlSemibold_size,
  },
  uploadLayout: {
    width: 389,
    position: 'absolute',
  },
  max2MbTypo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 20,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  statusBar: {
    height: 44,
    width: 428,
  },
  statusBarChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorDarkgray_100,
    width: 283,
    height: 25,
    marginLeft: 10,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  shareNodes: {
    marginLeft: 10,
  },
  statusBar1: {
    backgroundColor: Color.colorAliceblue_300,
    borderColor: Color.colorWhitesmoke_100,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: Padding.p_3xs,
    alignItems: 'center',
    borderStyle: 'solid',
    width: 428,
  },
  statusBarParent: {
    backgroundColor: Color.white,
  },
  frameGroup: {
    width: 412,
    marginTop: 10,
  },
  frameParent: {
    width: 428,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  ufileUploadAltIcon: {
    width: 48,
    height: 48,
    overflow: 'hidden',
  },
  clickOrDrag: {
    fontSize: FontSize.size_base,
    color: Color.secondaryGrey800,
  },
  max2Mb: {
    fontSize: FontSize.size_3xs,
    color: Color.secondaryGrey400,
    marginTop: 4,
  },
  textWrapper: {
    marginTop: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    overflow: 'hidden',
  },
  uploadDragDrop: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.baseFill500,
    borderStyle: 'dashed',
    borderColor: '#dee1e7',
    padding: Padding.p_base,
    borderWidth: 1,
    alignItems: 'center',
    left: 0,
    top: 0,
  },
  uploadDragDropWrapper: {
    top: 567,
    left: 19,
    height: 160,
  },
  documents: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
});

export default Documents;
