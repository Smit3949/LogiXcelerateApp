import * as React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
// import {Image} from 'expo-image';
import StatusBar1 from '../components/StatusBar1';
import HouseSection1 from '../components/HouseSection1';
import SectionInvoicesStatus from '../components/SectionInvoicesStatus';
import BookingConfirmationContainer from '../components/BookingConfirmationContainer';
import ContainerStep from '../components/ContainerStep';
import {Color, FontSize, FontFamily, Border, Padding} from '../GlobalStyles';

const TaskSwipeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.taskSwipeScreen}>
      <View style={styles.frameParent}>
        <View style={styles.statusBarParent}>
          {/* <View style={styles.statusBar}>
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
          </View> */}
          {/* <View style={styles.statusBar1}>
            <Text style={[styles.house, styles.houseTypo]}>house</Text>
            <View style={styles.statusBarChild} />
            <Text style={[styles.shareNodes, styles.houseTypo]}>
              share-nodes
            </Text>
            <Text style={[styles.shareNodes, styles.houseTypo]}>square-9</Text>
            <Text style={[styles.shareNodes, styles.houseTypo]}>square-9</Text>
          </View> */}
          <HouseSection1 />
        </View>
        <View style={styles.frameGroup}>
          <SectionInvoicesStatus carStatus="Status" />
          <View style={styles.partyDetailsParent}>
            <View style={styles.partyDetails}>
              <View style={styles.partyDetailsInner}>
                <View style={styles.locationDotParent}>
                  <Text style={[styles.locationDot, styles.locationDotTypo]}>
                    location-dot
                  </Text>
                  <Text style={[styles.labelHeader, styles.textTypo]}>
                    ETA Status
                  </Text>
                </View>
              </View>
              <View style={styles.frameContainer}>
                <View>
                  <Text
                    style={[
                      styles.etaDammamSadmn,
                      styles.textTypo,
                    ]}>{`ETA Dammam, SADMN (PoD) `}</Text>
                  <Text style={[styles.tue02Jan, styles.tue02JanTypo]}>
                    Tue, 02 Jan, 2024 11:30 AM
                  </Text>
                  <Text style={[styles.reachingIn5, styles.tue02JanTypo]}>
                    Reaching in 5 Days
                  </Text>
                </View>
                <View style={styles.dataInputDate}>
                  <Text style={[styles.text, styles.textTypo]}>On Time</Text>
                </View>
              </View>
            </View>
            <View style={styles.frameWrapper}>
              <View style={[styles.frameView, styles.mainLayout]}>
                <View style={styles.locationDotParent}>
                  <View>
                    <View>
                      <View style={styles.anchorParent}>
                        <Text style={[styles.anchor, styles.anchorTypo, styles.fontSizeSmall]}>
                        Nhavasheva, IN
                        </Text>
                        <View style={styles.frameChild} />
                      </View>
                      {/* <View style={styles.frameWrapper1}>
                        <View>
                          <Text
                            style={[styles.etaDammamSadmn, styles.textTypo]}>
                            Nhavasheva, IN
                          </Text>
                        </View>
                      </View> */}
                    </View>
                  </View>
                  <View style={styles.timelinePlaceOfCarrierRe1}>
                    <View>
                      <View style={styles.anchorParent}>
                        <Text style={[styles.anchor, styles.anchorTypo, styles.fontSizeSmall]}>
                        Jebelali, AJ
                        </Text>
                        <View style={styles.frameChild} />
                      </View>
                      {/* <View style={styles.frameWrapper1}>
                        <View>
                          <Text
                            style={[styles.etaDammamSadmn, styles.textTypo]}>
                            via Jebelali, AJ
                          </Text>
                        </View>
                      </View> */}
                    </View>
                  </View>
                  <View style={styles.timelinePlaceOfCarrierRe2}>
                    <View>
                      <Text style={[styles.anchor, styles.anchorTypo, , styles.fontSizeSmall]}>
                      Dammam, SA
                      </Text>
                      {/* <View style={styles.frameWrapper1}>
                        <View>
                          <Text
                            style={[
                              styles.etaDammamSadmn,
                              styles.textTypo,
                            ]}>{`Dammam, SA `}</Text>
                        </View>
                      </View> */}
                    </View>
                  </View>
                </View>
                <View style={styles.expandWrapper}>
                  <Text style={styles.expand}>Expand</Text>
                </View>
              </View>
            </View>
            <View style={[styles.mainContainerlistToday, styles.mainLayout]}>
              <View style={[styles.mainContainerlistToday1, styles.mainLayout]}>
                <View style={styles.anchorParent}>
                  <View style={styles.shipmentWorkflowWrapper}>
                    <Text style={[styles.shipmentWorkflow, styles.textTypo]}>
                      Shipment Workflow
                    </Text>
                    <View style={styles.lineBreak} ></View> 
                    <BookingConfirmationContainer
                      statusMessage="Booking Confirmed"
                      bookingDetailsText="Actual : Fri 17 Nov, 12:30 PM"
                    />
                <ContainerStep
                  shipmentStatus="Gated in at PoL"
                  statusDescription="Estimated : "
                />
                <ContainerStep
                  shipmentStatus="Loaded on Vessel"
                  statusDescription="Actual : "
                />
                <ContainerStep
                  shipmentStatus="Vessel Departed"
                  statusDescription="Actual : "
                />
                <ContainerStep
                  shipmentStatus="Arrived at PoD"
                  statusDescription="Actual : Fri 17 Nov, 12:30 PM"
                />
                  </View>
                  
                </View>
                
                <View style={styles.mainContainerlistTodayChild} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lineBreak: {
    height: 8, // Adjust the height as needed for your spacing preference
  },
  houseTypo: {
    color: Color.shadesBlack,
    letterSpacing: 0,
    fontSize: FontSize.textXlSemibold_size,
    textAlign: 'center',
    fontFamily: FontFamily.robotoRegular,
  },
  fontSizeSmall: {
    fontSize: 13,
  },
  locationDotTypo: {
    textTransform: 'uppercase',
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    color: Color.colorSlategray_200,
  },
  textTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '900',
  },
  tue02JanTypo: {
    lineHeight: 20,
    marginTop: 5,
    color: Color.colorSeagreen,
    textAlign: 'left',
    fontFamily: FontFamily.robotoRegular,
  },
  mainLayout: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
  },
  anchorTypo: {
    fontSize: FontSize.size_base,
    textAlign: 'center',
    fontFamily: FontFamily.robotoRegular,
  },
  statusBar: {
    height: 44,
    width: 428,
  },
  house: {
    textAlign: 'center',
  },
  statusBarChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    width: 283,
    height: 25,
    marginLeft: 10,
    borderStyle: 'solid',
  },
  shareNodes: {
    marginLeft: 10,
    textAlign: 'center',
  },
  statusBar1: {
    backgroundColor: Color.colorAliceblue_300,
    borderColor: Color.colorWhitesmoke_100,
    borderBottomWidth: 1,
    padding: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row',
    borderStyle: 'solid',
    width: 428,
  },
  statusBarParent: {
    backgroundColor: Color.white,
  },
  locationDot: {
    textAlign: 'left',
    color: Color.colorSlategray_200,
    fontFamily: FontFamily.robotoRegular,
  },
  labelHeader: {
    marginLeft: 8,
    textAlign: 'left',
    color: Color.colorSlategray_200,
    textTransform: 'uppercase',
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  locationDotParent: {
    flexDirection: 'row',
  },
  partyDetailsInner: {
    width: 320,
    flexDirection: 'row',
  },
  etaDammamSadmn: {
    color: Color.secondaryGrey400,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
  },
  tue02Jan: {
    marginTop: 5,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_lg,
  },
  reachingIn5: {
    marginTop: 5,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_sm,
  },
  text: {
    lineHeight: 18,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_sm,
    textAlign: 'center',
  },
  dataInputDate: {
    backgroundColor: Color.colorHoneydew_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_10xs,
    marginLeft: 15,
    borderRadius: Border.br_9xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameContainer: {
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  partyDetails: {
    width: 390,
    borderRadius: Border.br_9xs,
    padding: Padding.p_3xs,
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
  anchor: {
    color: Color.secondaryGrey400,
  },
  frameChild: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.secondaryGrey400,
    width: 20,
    height: 2,
    marginLeft: 10,
  },
  anchorParent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameWrapper1: {
    marginTop: 5,
  },
  timelinePlaceOfCarrierRe1: {
    marginLeft: 8,
  },
  timelinePlaceOfCarrierRe2: {
    marginLeft: 8,
    alignItems: 'center',
  },
  expand: {
    // textDecoration: 'underline',
    color: Color.primaryBlue500,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    fontFamily: FontFamily.robotoRegular,
  },
  expandWrapper: {
    marginTop: 10,
  },
  frameView: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    overflow: 'hidden',
    height:100,
    width: 390,
  },
  frameWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  receipt: {
    top: '5.56%',
    left: '0%',
    color: Color.colorSlategray_200,
    position: 'absolute',
  },
  iconOutlinedTags: {
    width: 12,
    height: 18,
    overflow: 'hidden',
  },
  shipmentWorkflow: {
    lineHeight: 27,
    width: 281,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.colorSlategray_200,
  },
  shipmentWorkflowWrapper: {
    width: 317,
    marginLeft: 8,
    justifyContent: 'center',
  },
  mainContainerlistTodayChild: {
    width: 335,
    height: 20,
    marginTop: 2,
  },
  mainContainerlistToday1: {
    width: 390,
    padding: Padding.p_3xs,
  },
  mainContainerlistToday: {
    width: 390,
    marginTop: 10,
  },
  partyDetailsParent: {
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    width: 428,
  },
  frameGroup: {
    width: 412,
    marginTop: 10,
  },
  frameParent: {
    top: 0,
    left: 0,
    width: 428,
    position: 'absolute',
  },
  taskSwipeScreen: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default TaskSwipeScreen;
