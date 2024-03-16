const Stack = createNativeStackNavigator();

import {useQuery} from '@apollo/client';
import React from 'react';
import ShipmentListViewTopNavigat from './screens/ShipmentListViewTopNavigat';
import {GET_USER_PROFILE} from './utils/graphql/user';
import {NativeRouter, Route, Router, Routes} from 'react-router-native';
import TaskSwipeScreen from './screens/TaskSwipeScreen';
import {NativeBaseProvider} from 'native-base';
import ActivityScreen from './screens/ActivityScreen';
import Documents from './screens/Documents';
import NavigationBar from './screens/NavBar';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WidgetSubscription from './screens/WidgetSubscription';
import TaskSwipeScreen1 from './screens/TaskSwipeScreen1';
import MyGateLikeWISMO from './screens/MyGateLikeWISMO';

export default function OperationLayout() {
  console.log('cominining_heehre');
  // const client = useApolloClient();
  // const {data} = await client.query({
  //   query: GET_USER_PROFILE,
  //   fetchPolicy: 'no-cache',
  // });
  const {loading, data, error, refetch} = useQuery(GET_USER_PROFILE);

  console.log(data, loading, error);

  return (
    <NativeBaseProvider>
      {/* <Router> */}
      {/* <NativeRouter> */}
      {/* <View> */}
      {/* <Routes>
        <Route path="/shipment" element={<TaskSwipeScreen />} />
        <Route path="/shipments" element={<ShipmentListViewTopNavigat />} />
        <Route path="/" element={<ShipmentListViewTopNavigat />} />
        <Route path="/documents" element={<Documents />} />
      </Routes> */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="ActivityScreen"
          component={ActivityScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Documents"
          component={Documents}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ShipmentListViewTopNavigat"
          component={ShipmentListViewTopNavigat}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="WidgetSubscription"
          component={WidgetSubscription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskSwipeScreen"
          component={TaskSwipeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskSwipeScreen1"
          component={TaskSwipeScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyGateLikeWISMO"
          component={MyGateLikeWISMO}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <NavigationBar />

      {/* </View> */}
      {/* </NativeRouter> */}
      {/* </Router> */}
    </NativeBaseProvider>
    // </NavigationContainer>
  );
}
