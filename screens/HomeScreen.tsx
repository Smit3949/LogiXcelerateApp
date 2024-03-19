import * as React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import {Color, FontFamily, Padding, Border, FontSize} from '../GlobalStyles';
import ProgressBar from 'react-native-progress/Bar';

const HomeScreenDashboardV = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.homeScreenDashboardV2}>
        <View style={styles.frameParent}>
          <View style={styles.statusBarParent}>
            <View style={styles.frameWrapper}>
              <View>
                <View style={styles.brightnessLowParent}>
                  <Image
                    style={styles.cellularConnectionIcon}
                    resizeMode="cover"
                    source={require('../assets/icons8-home-50.png')}
                  />
                  <Text style={[styles.homeScreen, styles.textSpaceBlock]}>
                    Home Screen
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.goodMorningAnshulWrapper}>
            <Text style={[styles.goodMorningAnshul, styles.text11Typo]}>
              Good Morning, Anshul
            </Text>
          </View>
          <View style={styles.frameGroup}>
            <View
              style={[styles.openTasksWrapper, styles.xCircleParentSpaceBlock]}>
              <Text style={styles.openTasks}>Open Tasks</Text>
            </View>
            <View style={styles.cardTask}>
              <View style={styles.cardTaskInner}>
                <View
                  style={[
                    styles.xCircleParent,
                    styles.xCircleParentSpaceBlock,
                  ]}>
                  <Image
                    style={styles.xCircleIcon}
                    resizeMode="cover"
                    source={require('../assets/check.png')}
                  />
                  <Text style={[styles.text, styles.textLayout]}>
                    Send email
                  </Text>
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={[styles.mediumWrapper, styles.wrapperBorder]}>
                  <Text style={[styles.medium, styles.mediumTypo]}>Medium</Text>
                </View>
                <View style={[styles.meetingWrapper, styles.wrapperFlexBox]}>
                  <Text style={[styles.meeting, styles.mediumTypo]}>
                    Meeting
                  </Text>
                </View>
                <View style={styles.wrapperFlexBox}>
                  <Text style={[styles.dueOn12, styles.text11Layout]}>
                    Due on 12 Feb
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.cardTask}>
              <View style={styles.cardTaskInner}>
                <View
                  style={[
                    styles.xCircleParent,
                    styles.xCircleParentSpaceBlock,
                  ]}>
                  <Image
                    style={styles.xCircleIcon}
                    resizeMode="cover"
                    source={require('../assets/check.png')}
                  />
                  <Text style={[styles.text, styles.textLayout]}>
                    Send email
                  </Text>
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={[styles.mediumWrapper, styles.wrapperBorder]}>
                  <Text style={[styles.medium, styles.mediumTypo]}>Medium</Text>
                </View>
                <View style={[styles.meetingWrapper, styles.wrapperFlexBox]}>
                  <Text style={[styles.meeting, styles.mediumTypo]}>
                    Meeting
                  </Text>
                </View>
                <View style={styles.wrapperFlexBox}>
                  <Text style={[styles.dueOn12, styles.text11Layout]}>
                    Due on 12 Feb
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.cardTask}>
              <View style={styles.cardTaskInner}>
                <View
                  style={[
                    styles.xCircleParent,
                    styles.xCircleParentSpaceBlock,
                  ]}>
                  <Image
                    style={styles.xCircleIcon}
                    resizeMode="cover"
                    source={require('../assets/check.png')}
                  />
                  <Text style={[styles.text, styles.textLayout]}>
                    Send email
                  </Text>
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={[styles.mediumWrapper, styles.wrapperBorder]}>
                  <Text style={[styles.medium, styles.mediumTypo]}>Medium</Text>
                </View>
                <View style={[styles.meetingWrapper, styles.wrapperFlexBox]}>
                  <Text style={[styles.meeting, styles.mediumTypo]}>
                    Meeting
                  </Text>
                </View>
                <View style={styles.wrapperFlexBox}>
                  <Text style={[styles.dueOn12, styles.text11Layout]}>
                    Due on 12 Feb
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent3, styles.frameParentSpaceBlock]}>
            <View style={styles.exportOperationsWrapper}>
              <Text style={styles.openTasks}>Export Operations</Text>
            </View>
            <View style={styles.nounCargoTruck132798111Parent}>
              <Image
                style={styles.nounCargoTruck132798111}
                resizeMode="cover"
                source={require('../assets/pickup.png')}
              />
              <Text style={[styles.pickupPending, styles.pendingTypo]}>
                Pickup Pending
              </Text>
              <Text style={[styles.text3, styles.textTypo]}>1</Text>
            </View>
            <View style={styles.calendarCardParent}>
              <View style={styles.calendarCardShadowBox1}>
                <View style={styles.parent}>
                  <Text style={[styles.text4, styles.textTypo]}>456789113</Text>
                  <Text
                    style={[styles.vipraInternationalPrivate, styles.mscTypo1]}>
                    Vipra International Private Limited
                  </Text>
                </View>
                <View style={styles.frame}>
                  <View style={styles.shippingLineParent}>
                    <Text style={[styles.shippingLine, styles.mscTypo]}>
                      Shipping Line
                    </Text>
                    <Text style={[styles.msc, styles.mscTypo]}>MSC</Text>
                  </View>
                  <View style={[styles.polParent, styles.parentSpaceBlock]}>
                    <Text style={[styles.shippingLine, styles.mscTypo]}>
                      PoL
                    </Text>
                    <Text style={[styles.msc, styles.mscTypo]}>
                      Nhava Sheva
                    </Text>
                  </View>
                  <View
                    style={[styles.pickedAtParent, styles.parentSpaceBlock]}>
                    <Text style={[styles.shippingLine, styles.mscTypo]}>
                      Picked at:
                    </Text>
                    <Text style={[styles.msc, styles.mscTypo]}>
                      24th Mar 24
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.groupParent}>
              <Image
                style={styles.nounCargoTruck132798111}
                resizeMode="cover"
                source={require('../assets/pickup.png')}
              />
              <Text style={[styles.loadingPending, styles.text7Position]}>
                Loading Pending
              </Text>
              <Text style={[styles.text7, styles.text7Position]}>1</Text>
            </View>
            <View style={styles.calendarCardParent}>
              <View style={styles.calendarCardShadowBox1}>
                <View style={styles.parent}>
                  <Text style={[styles.text4, styles.textTypo]}>456789113</Text>
                  <Text
                    style={[styles.vipraInternationalPrivate, styles.mscTypo1]}>
                    Vipra International Private Limited
                  </Text>
                </View>
                <View style={styles.frame}>
                  <View style={styles.shippingLineParent}>
                    <Text style={[styles.shippingLine, styles.mscTypo]}>
                      Shipping Line
                    </Text>
                    <Text style={[styles.msc, styles.mscTypo]}>MSC</Text>
                  </View>
                  <View style={[styles.polParent, styles.parentSpaceBlock]}>
                    <Text style={[styles.shippingLine, styles.mscTypo]}>
                      PoL
                    </Text>
                    <Text style={[styles.msc, styles.mscTypo]}>
                      Nhava Sheva
                    </Text>
                  </View>
                  <View
                    style={[styles.pickedAtParent, styles.parentSpaceBlock]}>
                    <Text style={[styles.shippingLine, styles.mscTypo]}>
                      Picked at:
                    </Text>
                    <Text style={[styles.msc, styles.mscTypo]}>
                      24th Mar 24
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParentSpaceBlock}>
            <View style={styles.exportOperationsWrapper}>
              <Text style={styles.openTasks}>Export Operations</Text>
            </View>
            <View style={styles.completedMarkerParent}>
              <View style={styles.completedLayout}>
                <Text style={[styles.topicName, styles.text11Layout]}>
                  Loadings Today
                </Text>
                <ProgressBar progress={0.75} width={200} color="#7fdd53" />
                <Text style={[styles.text11, styles.text11Layout]}>
                  <Text style={styles.completed}>Completed</Text>
                </Text>
              </View>
              <View style={[styles.completedMarker1, styles.completedLayout]}>
                <Text style={[styles.topicName, styles.text11Layout]}>
                  Gate Ins Today
                </Text>
                <ProgressBar progress={0.75} width={200} color="#7fdd53" />
                <Text style={[styles.text11, styles.text11Layout]}>
                  <Text style={styles.completed}>Completed</Text>
                </Text>
              </View>
              <View style={[styles.completedMarker1, styles.completedLayout]}>
                <Text style={[styles.topicName, styles.text11Layout]}>
                  SI Filings Today
                </Text>
                <ProgressBar progress={0.75} width={200} color="#7fdd53" />
                <Text style={[styles.text11, styles.text11Layout]}>
                  <Text style={styles.completed}>Completed</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  timePosition: {
    color: Color.baseShade100,
    top: '50%',
    left: 0,
    position: 'absolute',
  },
  textSpaceBlock: {
    marginLeft: 4,
    fontFamily: FontFamily.circularStd,
  },
  text11Typo: {
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: '600',
  },
  xCircleParentSpaceBlock: {
    paddingHorizontal: 0,
    flexDirection: 'row',
  },
  textLayout: {
    lineHeight: 16,
    textAlign: 'left',
  },
  wrapperBorder: {
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.colorGainsboro_300,
    borderRadius: Border.br_11xs,
    justifyContent: 'center',
    paddingVertical: Padding.p_11xs,
    height: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: Color.white,
  },
  mediumTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.circularStd,
  },
  wrapperFlexBox: {
    marginLeft: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text11Layout: {
    lineHeight: 18,
    textAlign: 'left',
  },
  frameParentSpaceBlock: {
    height: 352,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    alignSelf: 'stretch',
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
  pendingTypo: {
    color: Color.secondaryGrey400,
    fontFamily: FontFamily.interMedium,
    fontWeight: '900',
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  mscTypo1: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: '900',
  },
  mscTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
  },
  parentSpaceBlock: {
    marginLeft: 10,
    height: 27,
  },
  text7Position: {
    top: 7,
    lineHeight: 22,
    fontSize: FontSize.sectionSubtitleFontSize4Default_size,
    textAlign: 'left',
    position: 'absolute',
  },
  progressBg: {
    backgroundColor: Color.gradientFlubber,
    borderRadius: Border.br_81xl,
  },
  progressPosition: {
    height: 10,
    width: 259,
    top: '50%',
    left: 0,
    position: 'absolute',
  },
  completedLayout: {
    marginTop: 10,
    width: 461,
    height: 37,
  },
  border: {
    width: '90.29%',
    right: '9.71%',
    borderRadius: 3,
    borderColor: Color.baseShade100,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: 'solid',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
  },
  capIcon: {
    height: '35.4%',
    width: '5.4%',
    top: '32.74%',
    bottom: '31.86%',
    left: '94.6%',
    opacity: 0.4,
    right: '0%',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  capacity: {
    height: '64.6%',
    width: '73.74%',
    top: '17.7%',
    right: '17.99%',
    bottom: '17.7%',
    left: '8.27%',
    borderRadius: 1,
    backgroundColor: Color.baseShade100,
    position: 'absolute',
  },
  battery: {
    height: '25.68%',
    width: '6.5%',
    top: '39.32%',
    right: '3.81%',
    bottom: '35%',
    left: '89.7%',
    position: 'absolute',
  },
  wifiIcon: {
    width: 18,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    textAlign: 'center',
    width: 62,
    fontWeight: '600',
    color: Color.baseShade100,
    letterSpacing: 0,
  },
  timeStyle: {
    height: '47.73%',
    width: '14.39%',
    top: '15.91%',
    right: '80%',
    bottom: '36.36%',
    left: '5.61%',
    position: 'absolute',
  },
  statusBar1: {
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  statusBar: {
    height: 44,
    width: 428,
  },
  brightnessLowIcon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  homeScreen: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.primaryBlue500,
    textAlign: 'left',
    fontWeight: '500',
  },
  brightnessLowParent: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameWrapper: {
    padding: Padding.p_3xs,
    alignItems: 'center',
    flexDirection: 'row',
    width: 428,
  },
  statusBarParent: {
    backgroundColor: Color.white,
  },
  goodMorningAnshul: {
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 26,
    color: '#515b6a',
    display: 'flex',
    width: 294,
    height: 48,
    textAlign: 'left',
    alignItems: 'center',
    letterSpacing: 0,
    fontFamily: FontFamily.textXlSemibold,
  },
  goodMorningAnshulWrapper: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_11xs,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.white,
    overflow: 'hidden',
    fontWeight: '900',
  },
  openTasks: {
    color: '#4169e1',
    fontFamily: FontFamily.interMedium,
    lineHeight: 22,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
  },
  openTasksWrapper: {
    height: 39,
    paddingVertical: Padding.p_3xs,
    alignSelf: 'stretch',
    paddingHorizontal: 0,
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
  xCircleIcon: {
    width: 16,
    height: 16,
    overflow: 'hidden',
  },
  text: {
    color: Color.colorGray_500,
    fontSize: FontSize.sectionSubtitleFontSize4Default_size,
    marginLeft: 4,
    fontFamily: FontFamily.circularStd,
  },
  xCircleParent: {
    paddingVertical: Padding.p_9xs,
    alignItems: 'center',
  },
  cardTaskInner: {
    width: 140,
    alignItems: 'center',
    flexDirection: 'row',
  },
  medium: {
    color: '#F99245',
    lineHeight: 16,
    textAlign: 'left',
    fontWeight: '500',
  },
  mediumWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    color: '#F99245',
  },
  meeting: {
    color: Color.colorDarkslategray_500,
    lineHeight: 16,
    textAlign: 'left',
  },
  meetingWrapper: {
    paddingHorizontal: Padding.p_5xs,
    borderColor: Color.colorGainsboro_300,
    borderRadius: Border.br_11xs,
    justifyContent: 'center',
    paddingVertical: Padding.p_11xs,
    height: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: Color.white,
  },
  dueOn12: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.circularStd,
    fontWeight: '500',
  },
  frameView: {
    marginLeft: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardTask: {
    borderRadius: Border.br_9xs,
    backgroundColor: '#F5F5F5',
    paddingVertical: Padding.p_xs,
    marginTop: 2,
    paddingHorizontal: Padding.p_11xs,
    width: 421,
    flexDirection: 'row',
  },
  frameGroup: {
    padding: Padding.p_11xs,
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
  exportOperationsWrapper: {
    width: 345,
    alignItems: 'flex-end',
    height: 27,
    flexDirection: 'row',
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
  nounCargoTruck132798111: {
    top: 4,
    left: 10,
    width: 15,
    height: 15,
    position: 'absolute',
    overflow: 'hidden',
  },
  pickupPending: {
    marginTop: -13.5,
    left: '21.79%',
    lineHeight: 22,
    fontSize: 14,
    textAlign: 'left',
    position: 'absolute',
    top: '50%',
    fontWeight: '900',
  },
  text3: {
    left: 157,
    color: '#0055f1',
    lineHeight: 22,
    fontSize: FontSize.sectionSubtitleFontSize4Default_size,
    textAlign: 'left',
    position: 'absolute',
    top: 0,
  },
  nounCargoTruck132798111Parent: {
    width: 179,
    marginTop: 10,
    height: 27,
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
  text4: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_200,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
    top: 0,
  },
  vipraInternationalPrivate: {
    top: 17,
    fontSize: 10,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
  },
  parent: {
    width: 148,
    height: 28,
  },
  shippingLine: {
    fontFamily: FontFamily.sectionSubtitleFontSize4Default,
    color: Color.colorSlategray_200,
    top: 0,
  },
  msc: {
    top: 15,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: '600',
  },
  shippingLineParent: {
    width: 64,
    height: 27,
  },
  polParent: {
    width: 63,
  },
  pickedAtParent: {
    width: 60,
  },
  frame: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
    marginTop: 3,
    flexDirection: 'row',
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
  calendarCardShadowBox1: {
    height: 85,
    width: 310,
    borderColor: Color.colorWhitesmoke_600,
    borderRadius: Border.br_xl,
    padding: Padding.p_3xs,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    fontSize: 16,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
  },
  calendarCardShadowBox: {
    marginLeft: 15,
    height: 77,
    width: 258,
    borderColor: Color.colorWhitesmoke_600,
    borderRadius: Border.br_xl,
    padding: Padding.p_3xs,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: Color.white,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
  },
  calendarCardParent: {
    padding: Padding.p_8xs,
    borderRadius: Border.br_xl,
    marginTop: 10,
    width: 421,
    flexDirection: 'row',
  },
  groupIcon: {
    height: '40.54%',
    width: '7.81%',
    top: '28.38%',
    right: '87.5%',
    bottom: '31.08%',
    left: '4.69%',
  },
  loadingPending: {
    left: 38,
    color: Color.secondaryGrey400,
    fontFamily: FontFamily.interMedium,
    fontWeight: '900',
    fontSize: 28,
  },
  text7: {
    left: 164,
    color: '#f1d900',
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  groupParent: {
    width: 192,
    height: 37,
    marginTop: 10,
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
  frameParent3: {
    justifyContent: 'center',
    height: 352,
  },
  topicName: {
    marginTop: -38.5,
    width: 152,
    fontSize: 14,
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: '900',
    color: Color.baseShade100,
    top: '50%',
    left: 0,
    position: 'absolute',
  },
  adjustableProgressBar: {
    height: '27.03%',
    width: '75.84%',
    top: '70.27%',
    right: '24.14%',
    bottom: '2.7%',
    left: '0.02%',
    opacity: 0.2,
    position: 'absolute',
    overflow: 'hidden',
  },
  progress: {
    marginTop: -5,
    backgroundColor: Color.gradientFlubber,
    borderRadius: Border.br_81xl,
  },
  progressWrapper: {
    marginTop: 7.5,
  },
  text12: {
    color: Color.colorGray_600,
  },
  completed: {
    color: Color.colorGray_700,
  },
  text11: {
    marginTop: 0.5,
    right: -22,
    width: 108,
    fontSize: FontSize.sectionSubtitleFontSize4Default_size,
    fontFamily: FontFamily.textXlSemibold,
    fontWeight: '600',
    top: '50%',
    position: 'absolute',
  },
  completedMarker1: {
    marginTop: 10,
  },
  completedMarkerParent: {
    width: 389,
    height: 179,
    paddingVertical: Padding.p_8xs,
    marginTop: 10,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
  frameParent: {
    width: 428,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    left: 0,
    top: 0,
    position: 'absolute',
    height: 926,
  },
  homeScreenDashboardV2: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    overflow: 'hidden',
    height: 926,
    width: '100%',
  },
});

export default HomeScreenDashboardV;
