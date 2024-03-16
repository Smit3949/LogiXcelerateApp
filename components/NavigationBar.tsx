import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const NavigationBar = () => {
  const renderNavItem = (iconSource, text) => (
    <View style={styles.parentSpaceBlock}>
      <Image style={styles.icon} source={iconSource} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );

  return (
    <View style={styles.navigationCard}>
      {renderNavItem(require("../assets/frame-1171276488.png"), "Home")}
      {renderNavItem(
        require("../assets/noun-clipboard-1968622-2.png"),
        "Shipments"
      )}
      {renderNavItem(
        require("../assets/noun-clipboard-1968622-21.png"),
        "Companies"
      )}
      {renderNavItem(require("../assets/vector.png"), "Preferences")}
    </View>
  );
};

const styles = StyleSheet.create({
  navigationCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.white,
    width: 425,
    height: 100, // Adjusted height
    padding: Padding.p_3xs,
    shadowColor: "rgba(25, 29, 49, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: "hidden",
  },
  parentSpaceBlock: {
    alignItems: "center",
    overflow: "hidden",
    paddingHorizontal: Padding.p_12xs,
  },
  icon: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  text: {
    color: Color.shadesBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    height: 20, // Adjusted height
    lineHeight: 20, // Adjusted lineHeight
    textAlign: "left",
  },
});

export default NavigationBar;
