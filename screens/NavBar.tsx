import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color, FontFamily, FontSize, Padding} from '../GlobalStyles';
// import {useNavigation} from '@react-navigation/core';
import {Link} from 'react-router-native';
import {useNavigation} from '@react-navigation/core';

const NavigationBar = (props: any) => {
  const navigation = useNavigation();

  const renderNavItem = (iconSource, text, screenName) => (
    <TouchableOpacity
      style={styles.parentSpaceBlock}
      onPress={() => navigation.navigate(screenName)}>
      <Image style={styles.icon} source={iconSource} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.navigationCard}>
      <View>
        {renderNavItem(
          require('../assets/frame-1171276488.png'),
          'Home',
          'HomeScreen',
        )}
      </View>
      <View>
        {renderNavItem(
          require('../assets/noun-clipboard-1968622-2.png'),
          'Shipments',
          'ShipmentListViewTopNavigat',
        )}
      </View>
      <View>
        {renderNavItem(
          require('../assets/noun-clipboard-1968622-21.png'),
          'Companies',
          'companies',
        )}
      </View>
      <View>
        {renderNavItem(
          require('../assets/vector.png'),
          'Preferences',
          'WidgetSubscription',
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.white,
    width: 390,
    height: 100, // Adjusted height
    padding: Padding.p_3xs,
    shadowColor: 'rgba(25, 29, 49, 0.08)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: 'hidden',
  },
  parentSpaceBlock: {
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: Padding.p_12xs,
  },
  icon: {
    width: 28,
    height: 28,
    overflow: 'hidden',
  },
  text: {
    color: Color.shadesBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    height: 20, // Adjusted height
    lineHeight: 20, // Adjusted lineHeight
    textAlign: 'left',
  },
});

export default NavigationBar;
