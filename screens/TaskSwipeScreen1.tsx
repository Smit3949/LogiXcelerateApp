import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {Image} from 'expo-image';
import StatusBar1 from '../components/StatusBar1';
import HouseSection2 from '../components/HouseSection2';
import SectionInvoicesStatus from '../components/SectionInvoicesStatus';
import BookingConfirmationContainer from '../components/BookingConfirmationContainer';
import {Color, FontSize, FontFamily, Padding, Border} from '../GlobalStyles';

const TaskSwipeScreen1 = () => {
  return (
    <View style={styles.taskSwipeScreen}>
      <View style={styles.frameParent}>
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
            <Text style={[styles.house, styles.houseTypo]}>house</Text>
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
          <SectionInvoicesStatus carStatus="Status" propWidth={412} />
          <View style={styles.partyDetailsParent}>
            <View style={styles.partyDetails}>
              <View style={styles.partyDetailsInner}>
                <View style={styles.locationDotParent}>
                  <Text style={[styles.locationDot, styles.locationDotTypo]}>
                    location-dot
                  </Text>
                  <Text style={[styles.labelHeader, styles.labelTypo]}>
                    ETA Status
                  </Text>
                </View>
              </View>
              <View style={styles.frameContainer}>
                <View>
                  <Text
                    style={[
                      styles.etaDammamSadmn,
                      styles.labelTypo,
                    ]}>{`ETA Dammam, SADMN (PoD) `}</Text>
                  <Text style={[styles.tue02Jan, styles.labelLayout]}>
                    Tue, 02 Jan, 2024 11:30 AM
                  </Text>
                  <Text style={[styles.reachingIn5, styles.labelLayout]}>
                    Reaching in 5 Days
                  </Text>
                </View>
                <View style={[styles.dataInputDate, styles.dataFlexBox]}>
                  <Text style={[styles.text, styles.labelTypo]}>On Time</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameView, styles.mainLayout]}>
              <View style={styles.locationDotParent}>
                <View>
                  <View>
                    <View style={styles.anchorParent}>
                      <Text style={styles.anchor}>anchor</Text>
                      <View style={styles.frameChild} />
                    </View>
                    <View style={styles.frameWrapper}>
                      <View>
                        <Text style={[styles.etaDammamSadmn, styles.labelTypo]}>
                          Nhavasheva, IN
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.timelinePlaceOfCarrierRe1}>
                  <View>
                    <View style={styles.anchorParent}>
                      <Text style={styles.anchor}>anchor</Text>
                      <View style={styles.frameChild} />
                    </View>
                    <View style={styles.frameWrapper}>
                      <View>
                        <Text style={[styles.etaDammamSadmn, styles.labelTypo]}>
                          via Jebelali, AJ
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.timelinePlaceOfCarrierRe2}>
                  <View>
                    <Text style={styles.anchor}>anchor</Text>
                    <View style={styles.frameWrapper}>
                      <View>
                        <Text
                          style={[
                            styles.etaDammamSadmn,
                            styles.labelTypo,
                          ]}>{`Dammam, SA `}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.expandWrapper}>
                <Text style={styles.expand}>Expand</Text>
              </View>
            </View>
            <View style={[styles.mainContainerlistToday, styles.mainLayout]}>
              <View style={[styles.mainContainerlistToday1, styles.mainLayout]}>
                <View style={styles.anchorParent}>
                  <View style={styles.iconOutlinedTags}>
                    <Text style={styles.receipt}>receipt</Text>
                  </View>
                  <View style={styles.shipmentWorkflowWrapper}>
                    <Text style={[styles.shipmentWorkflow, styles.labelTypo]}>
                      Shipment Workflow
                    </Text>
                  </View>
                </View>
                <BookingConfirmationContainer
                  statusMessage="Arrived at PoL"
                  bookingDetailsText="Estimated : "
                  propPaddingHorizontal="unset"
                  propPaddingVertical="unset"
                  propBorderStyle="solid"
                  propBorderColor="#f0f0f0"
                  propBorderWidth={1.5}
                  propPadding={5}
                />
                <View style={styles.step}>
                  <View style={styles.labelParent}>
                    <Text style={[styles.label, styles.labelLayout]}>
                      Arrived at PoL
                    </Text>
                    <View style={styles.frameWrapper3}>
                      <View style={styles.anchorParent}>
                        {/* <Image
                          style={styles.uuserCircleIcon}
                          contentFit="cover"
                          source={require('../assets/uusercircle1.png')}
                        /> */}
                        <Text style={styles.lastUpdatedBy}>
                          Shubham Pachori
                        </Text>
                      </View>
                    </View>
                    <View style={styles.frameWrapper3}>
                      <View style={styles.anchorParent}>
                        {/* <Image
                          style={styles.uuserCircleIcon}
                          contentFit="cover"
                          source={require('../assets/uusercircle1.png')}
                        /> */}
                        <Text
                          style={styles.lastUpdatedBy}>{`Estimated : `}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.dataInputDateWrapper}>
                    <View style={[styles.dataInputDate1, styles.dataFlexBox]}>
                      <Text style={[styles.text, styles.labelTypo]}>
                        Mark Complete
                      </Text>
                    </View>
                  </View>
                </View>
                <BookingConfirmationContainer
                  statusMessage="Arrived at PoL"
                  bookingDetailsText="Estimated : "
                  propPaddingHorizontal="unset"
                  propPaddingVertical="unset"
                  propBorderStyle="solid"
                  propBorderColor="#f0f0f0"
                  propBorderWidth={1.5}
                  propPadding={5}
                />
                <BookingConfirmationContainer
                  statusMessage="Arrived at PoL"
                  bookingDetailsText="Estimated : "
                  propPaddingHorizontal="unset"
                  propPaddingVertical="unset"
                  propBorderStyle="solid"
                  propBorderColor="#f0f0f0"
                  propBorderWidth={1.5}
                  propPadding={5}
                />
                <BookingConfirmationContainer
                  statusMessage="Arrived at PoL"
                  bookingDetailsText="Estimated : "
                  propPaddingHorizontal="unset"
                  propPaddingVertical="unset"
                  propBorderStyle="solid"
                  propBorderColor="#f0f0f0"
                  propBorderWidth={1.5}
                  propPadding={5}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  houseTypo: {
    color: Color.shadesBlack,
    letterSpacing: 0,
    fontSize: FontSize.textXlSemibold_size,
    textAlign: 'center',
    fontFamily: FontFamily.robotoRegular,
  },
  locationDotTypo: {
    textTransform: 'uppercase',
    lineHeight: 16,
    textAlign: 'left',
    color: Color.colorSlategray_200,
    fontSize: FontSize.size_xs,
  },
  labelTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
  labelLayout: {
    lineHeight: 20,
    textAlign: 'left',
  },
  dataFlexBox: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorHoneydew_100,
    borderRadius: Border.br_9xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainLayout: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
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
    fontFamily: FontFamily.robotoRegular,
  },
  reachingIn5: {
    marginTop: 5,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
  },
  text: {
    lineHeight: 18,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_sm,
    textAlign: 'center',
  },
  dataInputDate: {
    marginLeft: 15,
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
    fontSize: FontSize.size_base,
    color: Color.secondaryGrey400,
    textAlign: 'center',
    fontFamily: FontFamily.robotoRegular,
  },
  frameChild: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.secondaryGrey400,
    width: 100,
    height: 2,
    marginLeft: 10,
  },
  anchorParent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameWrapper: {
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
    marginTop: 10,
    overflow: 'hidden',
  },
  receipt: {
    top: '5.56%',
    left: '0%',
    fontSize: FontSize.size_base,
    color: Color.colorSlategray_200,
    textAlign: 'center',
    fontFamily: FontFamily.robotoRegular,
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
  label: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    color: Color.colorSlategray_200,
  },
  uuserCircleIcon: {
    width: 14,
    height: 14,
    display: 'none',
    overflow: 'hidden',
  },
  lastUpdatedBy: {
    lineHeight: 14,
    marginLeft: 6,
    textAlign: 'left',
    color: Color.colorSlategray_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  frameWrapper3: {
    marginTop: 5,
    flexDirection: 'row',
  },
  labelParent: {
    borderColor: '#005317',
    borderRightWidth: 1,
    width: 257,
    borderStyle: 'solid',
  },
  dataInputDate1: {
    alignSelf: 'stretch',
    flex: 1,
  },
  dataInputDateWrapper: {
    width: 108,
    alignSelf: 'stretch',
  },
  step: {
    borderColor: Color.colorWhitesmoke_400,
    borderWidth: 1.5,
    width: 370,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    marginTop: 2,
    alignItems: 'center',
    flexDirection: 'row',
    borderStyle: 'solid',
    overflow: 'hidden',
  },
  mainContainerlistToday1: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
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
    width: '100%',
    height: 926,
    overflow: 'hidden',
    flex: 1,
  },
});

export default TaskSwipeScreen1;
