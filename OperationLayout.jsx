import {useQuery} from '@apollo/client';
import React from 'react';
import ShipmentListViewTopNavigat from './screens/ShipmentListViewTopNavigat';
import {GET_USER_PROFILE} from './utils/graphql/user';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
    <>
      {/* <Stack.Screen
        name="ShipmentListViewTopNavigat"
        component={ShipmentListViewTopNavigat}
        options={{headerShown: false}}
      /> */}
      <ShipmentListViewTopNavigat />
    </>
  );
}
