import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
// import {Image} from 'expo-image';
import TypeCircle from './TypeCircle';
import Typetimestamp from './Typetimestamp';
import DividerTypeHalfWidth from './DividerTypeHalfWidth';
import {FontFamily, FontSize, Padding, Border, Color} from '../GlobalStyles';

const ActivityCard = () => {
  return (
    <View>
      <View style={styles.lightModenotificationRow}>
        <View style={[styles.unreadNotification, styles.quoteFlexBox]}>
          <TypeCircle
            nK="AB"
            lightModeAvatarImage={require('../assets/lightmodeavatar-image.png')}
            badge={false}
            image
            typeCirclePosition="relative"
            typeCircleTop="unset"
            typeCircleLeft="unset"
          />
          <View style={styles.content}>
            <Text style={[styles.subtext, styles.subtextTypo]}>Subtext</Text>
            <Text style={[styles.title, styles.titleLayout]}>Title</Text>
            <Text style={[styles.content1, styles.buttonLayout]}>
              <Text style={styles.subtextTypo}>{`Patrick `}</Text>
              <Text style={styles.addedAComment}>added a comment on</Text>
              <Text style={styles.subtextTypo}>
                {' '}
                Design Assets - Smart Tags file:
              </Text>
            </Text>
            <View style={[styles.quote, styles.quoteFlexBox]}>
              <View style={styles.quoteChild} />
              <Text
                style={[styles.finalTestingForContainer, styles.buttonLayout]}
                numberOfLines={2}>
                <Text style={styles.anshul}>@anshul</Text>
                <Text style={styles.canYouPlease}>
                  {' '}
                  can you please tell me why is the shipment delayed
                </Text>
              </Text>
            </View>
            <View style={[styles.attachment, styles.attachmentFlexBox]}>
              {/* <Image
                style={styles.lightModeattachmentIcon}
                contentFit="cover"
                source={require('../assets/lightmodeattachment-icon.png')}
              /> */}
              <View style={styles.textAndSupportingText}>
                <Text style={[styles.text, styles.buttonTypo]}>
                  Design brief and ideas.txt
                </Text>
                <Text style={[styles.supportingText, styles.textLayout]}>
                  2.2 MB
                </Text>
              </View>
            </View>
            {/* <Image
              style={styles.lightModethumbnailIcon}
              contentFit="cover"
              source={require('../assets/lightmodethumbnail.png')}
            /> */}
            <View style={styles.lightModeactionButtons}>
              <View style={[styles.primary, styles.primaryFlexBox]}>
                {/* <Image
                  style={[styles.lightModebuttonIcons, styles.lightLayout]}
                  contentFit="cover"
                  source={require('../assets/lightmodebutton-icons.png')}
                /> */}
                <View style={[styles.buttonWrapper, styles.attachmentFlexBox]}>
                  <Text style={[styles.button, styles.buttonTypo]}>
                    Apply now
                  </Text>
                </View>
                {/* <Image
                  style={[styles.lightModebuttonIcons, styles.lightLayout]}
                  contentFit="cover"
                  source={require('../assets/lightmodebutton-icons1.png')}
                /> */}
              </View>
              <View style={[styles.secondary, styles.primaryFlexBox]}>
                {/* <Image
                  style={styles.lightLayout}
                  contentFit="cover"
                  source={require('../assets/lightmodebutton-icons2.png')}
                /> */}
                <View style={[styles.buttonWrapper, styles.attachmentFlexBox]}>
                  <Text style={[styles.button1, styles.buttonTypo]}>
                    Button
                  </Text>
                </View>
                {/* <Image
                  style={styles.lightLayout}
                  contentFit="cover"
                  source={require('../assets/lightmodebutton-icons3.png')}
                /> */}
              </View>
            </View>
            <Text style={[styles.timestampNextLine, styles.titleLayout]}>
              2 mins ago
            </Text>
          </View>
          <Typetimestamp
            timestampNextLine="8h"
            ellipsis
            typetimestampPosition="unset"
            typetimestampTop="unset"
            typetimestampLeft="unset"
            typetimestampMarginLeft={12}
          />
        </View>
        <DividerTypeHalfWidth dividerTypeHalfWidthPosition="unset" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteFlexBox: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  subtextTypo: {
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: '600',
  },
  titleLayout: {
    lineHeight: 18,
    marginTop: 8,
    display: 'none',
    textAlign: 'left',
  },
  buttonLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  attachmentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    textAlign: 'left',
  },
  textLayout: {
    lineHeight: 18,
    fontSize: FontSize.size_xs,
  },
  primaryFlexBox: {
    paddingHorizontal: Padding.p_xs,
    height: 32,
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_9xs,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  lightLayout: {
    height: 16,
    width: 16,
    overflow: 'hidden',
  },
  subtext: {
    letterSpacing: 0.4,
    lineHeight: 17,
    display: 'none',
    textAlign: 'left',
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
    alignSelf: 'stretch',
  },
  title: {
    marginTop: 8,
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: '600',
  },
  addedAComment: {
    fontFamily: FontFamily.interRegular,
  },
  content1: {
    color: Color.colorDarkslategray_200,
    marginTop: 8,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  quoteChild: {
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorAliceblue_400,
    width: 4,
    alignSelf: 'stretch',
  },
  anshul: {
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
    color: '#c61f33',
  },
  canYouPlease: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslategray_100,
  },
  finalTestingForContainer: {
    marginLeft: 10,
    overflow: 'hidden',
    height: 40,
    textAlign: 'left',
    flex: 1,
  },
  quote: {
    height: 40,
    marginTop: 8,
  },
  lightModeattachmentIcon: {
    width: 20,
    height: 20,
    overflow: 'hidden',
  },
  text: {
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
  },
  supportingText: {
    color: Color.colorSlategray_100,
    fontFamily: FontFamily.interRegular,
    textAlign: 'left',
  },
  textAndSupportingText: {
    marginLeft: 6,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
  attachment: {
    marginTop: 8,
    display: 'none',
    alignSelf: 'stretch',
  },
  lightModethumbnailIcon: {
    borderRadius: Border.br_5xs,
    maxWidth: '100%',
    height: 164,
    width: '100%',
    overflow: 'hidden',
    marginTop: 8,
    display: 'none',
    alignSelf: 'stretch',
  },
  lightModebuttonIcons: {
    display: 'none',
  },
  button: {
    color: Color.white,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  buttonWrapper: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: Color.colorRoyalblue_100,
  },
  button1: {
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
  },
  secondary: {
    borderStyle: 'solid',
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    display: 'none',
    backgroundColor: Color.white,
  },
  lightModeactionButtons: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    justifyContent: 'space-between',
    marginTop: 8,
    display: 'none',
    flexDirection: 'row',
  },
  timestampNextLine: {
    fontFamily: FontFamily.interRegular,
    marginTop: 8,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
  },
  content: {
    marginLeft: 12,
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'stretch',
  },
  unreadNotification: {
    padding: Padding.p_5xl,
    backgroundColor: Color.white,
  },
  lightModenotificationRow: {
    width: 428,
  },
});

export default ActivityCard;
