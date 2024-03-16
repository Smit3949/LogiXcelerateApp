import * as React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
// import {Image} from 'expo-image';
import StatusBar1 from '../components/StatusBar1';
import HouseSection1 from '../components/HouseSection1';
import SectionInvoicesStatus from '../components/SectionInvoicesStatus';
import BookingConfirmationContainer from '../components/BookingConfirmationContainer';
import ContainerStep from '../components/ContainerStep';
import {Color, FontSize, FontFamily, Border, Padding} from '../GlobalStyles';
import {Pressable, Box, HStack, VStack, Spacer, Icon} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';

function Basic() {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Booking Confirmed',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Gated in at PoL',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Loaded on Vessel',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Vessel Departed',
      timeStamp: '8:56 PM',
      recentText: 'All the best',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Arrived at PoD',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];
  const [listData, setListData] = React.useState<any>(data);

  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap: any, rowKey: any) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item: any) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey: any) => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <Box>
      <Pressable
        onPress={() => console.log('You touched me')}
        _dark={{
          bg: 'coolGray.800',
        }}
        _light={{
          bg: 'white',
        }}>
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={3}>
            <VStack>
              <Text
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}
                bold>
                {item.fullName}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                {item.recentText}
              </Text>
            </VStack>
            <Spacer />
            <Text
              fontSize="xs"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
              alignSelf="flex-start">
              {item.timeStamp}
            </Text>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = (data: any, rowMap: any) => (
    <HStack flex="1" pl="2">
      <Pressable
        w="70"
        cursor="pointer"
        bg="#c7ebd1"
        justifyContent="center"
        onPress={() => deleteRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2}>
          {/* <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" /> */}
          <Text color="white" fontSize="xs" fontWeight="medium">
            Mark Complete
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  return (
    <Box bg="white" safeArea flex="1">
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </Box>
  );
}

const TaskSwipeScreen = () => {
  return (
    // <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              <View style={styles.locationDotParent}>
                <View>
                  <View>
                    <View style={styles.anchorParent}>
                      <Text
                        style={[
                          styles.anchor,
                          styles.anchorTypo,
                          styles.fontSizeSmall,
                        ]}>
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
                      <Text
                        style={[
                          styles.anchor,
                          styles.anchorTypo,
                          styles.fontSizeSmall,
                        ]}>
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
                    <Text
                      style={[
                        styles.anchor,
                        styles.anchorTypo,
                        ,
                        styles.fontSizeSmall,
                      ]}>
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
            </View>

            <View style={[styles.mainContainerlistToday, styles.mainLayout]}>
              <View style={[styles.mainContainerlistToday1, styles.mainLayout]}>
                <View style={styles.anchorParent}>
                  <View style={styles.shipmentWorkflowWrapper}>
                    <Text style={[styles.shipmentWorkflow, styles.textTypo]}>
                      Shipment Workflow
                    </Text>
                    <View style={styles.lineBreak}></View>
                    <Basic />
                  </View>
                </View>

                <View style={styles.mainContainerlistTodayChild} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
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
    textAlign: 'left',
    color: Color.colorSlategray_200,
    textTransform: 'uppercase',
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  locationDotParent: {
    flexDirection: 'row',
    marginTop: 10,
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
    fontSize: FontSize.size_base,
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
    marginLeft: 10,
    borderRadius: Border.br_9xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: 340,
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
    height: 100,
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
