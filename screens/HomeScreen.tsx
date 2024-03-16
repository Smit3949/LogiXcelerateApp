import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Color, FontFamily, Padding, Border, FontSize} from '../GlobalStyles';
import homescreenImage from '../components/homescreen.png';
const HomeScreenDashboardV = () => {
  return (
    <View style={styles.container}>
      <Image source={homescreenImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 600, // Adjust width as needed
    height: 750, // Adjust height as needed
    resizeMode: 'contain', // Adjust resizeMode as needed
  },
});

export default HomeScreenDashboardV;
