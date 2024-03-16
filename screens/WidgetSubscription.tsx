import * as React from "react";
import { Text, StyleSheet, View , ScrollView} from "react-native";
import HouseSection1 from "../components/HouseSection1";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import {Switch} from "native-base"

const WidgetSubscription = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.widgetSubscription}>
      <View style={[styles.frameParent, styles.shipmentsShadowBox]}>
        <HouseSection1 />
        <View style={[styles.shipmentsWrapper, styles.shipmentsFlexBox]}>
          <View style={[styles.shipments, styles.shipmentsSpaceBlock]}>
            <View style={[styles.shipmentsInner, styles.switchFlexBox]}>
              <View>
                <View style={styles.switchFlexBox}>
                  <Text
                    style={styles.selectUpto2}
                  >{`Select upto 2 Widgets `}</Text>
                </View>
                <Text style={[styles.inSelected, styles.inSelectedTypo]}>
                  1/2 in Selected
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={[styles.shipmentsParent, styles.shipmentsFlexBox]}>
            <View style={[styles.shipments1, styles.shipmentsSpaceBlock]}>
              <View style={[styles.shipmentsInner, styles.switchFlexBox]}>
                <View>
                  <View style={styles.switchFlexBox}>
                    <Text
                      style={[styles.oceanExport, styles.oceanExportTypo]}
                    >{`Ocean Export `}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.shipments1, styles.shipmentsSpaceBlock]}>
              <View style={[styles.shipmentsInner, styles.switchFlexBox]}>
                <View>
                  <View style={styles.switchFlexBox}>
                    <Text
                      style={[styles.polGateCutOff, styles.oceanExportTypo]}
                    >
                      PoL Gate Cut-off Today
                    </Text>
                  </View>
                  <Text
                    style={[styles.showsAllShipments, styles.inSelectedTypo]}
                  >
                    Shows all shipments where Gate Cut-Off is today
                  </Text>
                </View>
                <View style={[styles.switch, styles.switchFlexBox]}>
                  <View style={styles.halo} />
                  <View style={styles.switchShadowBox}>
                    <View style={styles.switchNobdefaultChild} />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.shipments1, styles.shipmentsSpaceBlock]}>
              <View style={[styles.shipmentsInner, styles.switchFlexBox]}>
                <View>
                  <View style={styles.switchFlexBox}>
                    <Text
                      style={[styles.polGateCutOff, styles.oceanExportTypo]}
                    >
                      SI Cut-off Today
                    </Text>
                  </View>
                  <Text
                    style={[styles.showsAllShipments, styles.inSelectedTypo]}
                  >
                    Shows all shipments where Gate Cut-Off is today
                  </Text>
                </View>
                <View style={[styles.switch, styles.switchFlexBox]}>
                  <View style={styles.halo} />
                  <View style={styles.switchShadowBox}>
                    <View style={styles.switchNobdefaultChild} />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.shipments1, styles.shipmentsSpaceBlock]}>
              <View style={[styles.shipmentsInner, styles.switchFlexBox]}>
                <View>
                  <View style={styles.switchFlexBox}>
                    <Text
                      style={[styles.polGateCutOff, styles.oceanExportTypo]}
                    >
                      Loading Today
                    </Text>
                  </View>
                  <Text
                    style={[styles.showsAllShipments, styles.inSelectedTypo]}
                  >
                    Shows all shipments where Gate Cut-Off is today
                  </Text>
                </View>
                <View style={[styles.switch, styles.switchFlexBox]}>
                  <View style={styles.halo} />
                  <View style={styles.switchShadowBox}>
                    <View style={styles.switchNobdefaultChild} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={[styles.shipmentsParent, styles.shipmentsFlexBox]}>
            <View style={[styles.shipments1, styles.shipmentsSpaceBlock]}>
              <View style={[styles.shipmentsInner, styles.switchFlexBox]}>
                <View>
                  <View style={styles.switchFlexBox}>
                    <Text style={[styles.oceanExport, styles.oceanExportTypo]}>
                      Ocean Import
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.shipments1, styles.shipmentsSpaceBlock]}>
              <View style={[styles.shipmentsInner, styles.switchFlexBox]}>
                <View>
                  <View style={styles.switchFlexBox}>
                    <Text
                      style={[styles.polGateCutOff, styles.oceanExportTypo]}
                    >
                      Shipments Loading Today
                    </Text>
                  </View>
                  <Text
                    style={[styles.showsAllShipments, styles.inSelectedTypo]}
                  >
                    Shows all shipments where Gate Cut-Off is today
                  </Text>
                </View>
                <View style={[styles.switch, styles.switchFlexBox]}>
                  <View style={styles.halo} />
                  <View style={styles.switchShadowBox}>
                    <View style={styles.switchNobdefaultChild} />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.shipments1, styles.shipmentsSpaceBlock]}>
              <View style={[styles.shipmentsInner, styles.switchFlexBox]}>
                <View>
                  <View style={styles.switchFlexBox}>
                    <Text
                      style={[styles.polGateCutOff, styles.oceanExportTypo]}
                    >
                      Shipments Arriving Today
                    </Text>
                  </View>
                  <Text
                    style={[styles.showsAllShipments, styles.inSelectedTypo]}
                  >
                    Shows all shipments where Gate Cut-Off is today
                  </Text>
                </View>
                <View style={[styles.switch, styles.switchFlexBox]}>
                  <View style={styles.halo} />
                  <View style={styles.switchShadowBox}>
                    <View style={styles.switchNobdefaultChild} />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.shipments1, styles.shipmentsSpaceBlock]}>
              <View style={[styles.shipmentsInner, styles.switchFlexBox]}>
                <View>
                  <View style={styles.switchFlexBox}>
                    <Text
                      style={[styles.polGateCutOff, styles.oceanExportTypo]}
                    >
                      CAN Pending
                    </Text>
                  </View>
                  <Text
                    style={[styles.showsAllShipments, styles.inSelectedTypo]}
                  >
                    Shows all shipments where Gate Cut-Off is today
                  </Text>
                </View>
                <View style={[styles.switch, styles.switchFlexBox]}>
                  <View style={styles.halo} />
                  <View style={styles.switchShadowBox}>
                    <View style={styles.switchNobdefaultChild} />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.shipments1, styles.shipmentsSpaceBlock]}>
              <View style={[styles.shipmentsInner, styles.switchFlexBox]}>
                <View>
                  <View style={styles.switchFlexBox}>
                    <Text
                      style={[styles.polGateCutOff, styles.oceanExportTypo]}
                    >{`DO Release Pending `}</Text>
                  </View>
                  <Text
                    style={[styles.showsAllShipments, styles.inSelectedTypo]}
                  >
                    Shows all shipments where Gate Cut-Off is today
                  </Text>
                </View>
                <View style={[styles.switch, styles.switchFlexBox]}>
                  <View style={styles.halo} />
                  <View style={styles.switchShadowBox}>
                    <View style={styles.switchNobdefaultChild} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  shipmentsShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  shipmentsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  shipmentsSpaceBlock: {
    padding: Padding.p_3xs,
    backgroundColor: Color.white,
  },
  switchFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  inSelectedTypo: {
    height: 18,
    display: "flex",
    color: Color.secondaryGrey400,
    lineHeight: 28,
    fontSize: 10,
    textAlign: "left",
    fontWeight: "500",
    alignItems: "center",
  },
  oceanExportTypo: {
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: "left",
  },
  selectUpto2: {
    lineHeight: 20,
    textAlign: "left",
    fontWeight: "500",
    color: Color.primaryBlue500,
  },
  inSelected: {
    width: 238,
  },
  shipmentsInner: {
    width: 390,
  },
  shipments: {
    borderRadius: Border.br_9xs,
    shadowColor: "rgba(25, 29, 49, 0.25)",
    alignSelf: "stretch",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  shipmentsWrapper: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  oceanExport: {
    fontSize: FontSize.size_base,
    color: Color.primaryBlue500,
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0,
  },
  shipments1: {
    borderRadius: Border.br_3xs,
  },
  polGateCutOff: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0,
  },
  showsAllShipments: {
    width: 318,
  },
  halo: {
    marginTop: -15,
    marginLeft: -26,
    top: "50%",
    left: "50%",
    borderRadius: 20,
    backgroundColor: Color.primaryBlue500,
    width: 52,
    height: 30,
    opacity: 0,
    zIndex: 0,
    position: "absolute",
  },
  switchNobdefaultChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 50,
    backgroundColor: Color.white,
    position: "absolute",
    width: "100%",
  },
  switchShadowBox: {
    zIndex: 1,
    width: 18,
    shadowColor: "rgba(0, 35, 11, 0.2)",
    borderRadius: 12,
    height: 18,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: "hidden",
  },
  switch: {
    backgroundColor: "#2e70e8",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_11xs,
    paddingRight: Padding.p_11xs,
    paddingBottom: Padding.p_11xs,
    marginLeft: 10,
    borderRadius: 10,
  },
  shipmentsParent: {
    borderRadius: Border.br_3xs,
    width: 428,
  },
  frameWrapper: {
    width: 421,
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    backgroundColor: Color.white,
    marginTop: 10,
    overflow: "hidden",
  },
  frameParent: {
    top: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 428,
    position: "absolute",
    height: 926,
  },
  widgetSubscription: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
  },
});

export default WidgetSubscription;
