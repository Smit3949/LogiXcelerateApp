import * as React from 'react';
// import {Image} from 'expo-image';
import {StyleSheet, Text, View} from 'react-native';
import Typetimestamp from './Typetimestamp';
import {Color, Padding} from '../GlobalStyles';

const DomainNotificationCard = () => {
  return (
    <View style={styles.domainNotificationCard}>
      {/* <Image
        style={styles.nounClipboard19686221Icon}
        contentFit="cover"
        source={require('../assets/noun-clipboard-1968622-1.png')}
      />
      <Image
        style={styles.contentIcon}
        contentFit="cover"
        source={require('../assets/content.png')}
      /> */}
      <Typetimestamp
        timestampNextLine="14h"
        ellipsis
        typetimestampPosition="unset"
        typetimestampTop="unset"
        typetimestampLeft="unset"
        typetimestampMarginLeft={12}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nounClipboard19686221Icon: {
    width: 28,
    height: 28,
    overflow: 'hidden',
  },
  contentIcon: {
    alignSelf: 'stretch',
    flex: 1,
    maxWidth: '100%',
    height: 48,
    width: '100%',
    marginLeft: 12,
    overflow: 'hidden',
  },
  domainNotificationCard: {
    backgroundColor: Color.white,
    width: 440,
    flexDirection: 'row',
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_8xs,
  },
});

export default DomainNotificationCard;
