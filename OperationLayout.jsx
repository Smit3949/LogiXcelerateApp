import {useQuery} from '@apollo/client';
import React from 'react';
import ShipmentListViewTopNavigat from './screens/ShipmentListViewTopNavigat';
import {GET_USER_PROFILE} from './utils/graphql/user';
import {NativeRouter, Route, Routes} from 'react-router-native';
import TaskSwipeScreen from './screens/TaskSwipeScreen';
import {NativeBaseProvider} from 'native-base';

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
      <NativeRouter>
        <Routes>
          <Route path="/shipment" element={<TaskSwipeScreen />} />
          <Route path="/" element={<ShipmentListViewTopNavigat />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
}
