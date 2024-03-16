import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Section2 = () => {
  return (
    <View style={[styles.frameParent, styles.frameFlexBox]}>
      <View style={styles.frame}>
        <Text style={styles.bars}>Shipmnts</Text>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Image
          style={styles.vuesaxlinearnotificationBinIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearnotificationbing.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  bars: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.textXlSemibold_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.dark,
    textAlign: "left",
  },
  frame: {
    flex: 1,
    height: 22,
    overflow: "hidden",
  },
  vuesaxlinearnotificationBinIcon: {
    width: 24,
    height: 24,
  },
  frameChild: {
    width: 32,
    marginLeft: 6,
    height: 32,
  },
  frame1: {
    justifyContent: "flex-end",
    height: 32,
    overflow: "hidden",
  },
  frameParent: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    shadowColor: "rgba(25, 29, 49, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_mini,
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_smi,
  },
});

export default Section2;
