import {useQuery} from '@apollo/client';
import React from 'react';
import {GET_USER_PROFILE} from './utils/graphql/user';

export default function OperationLayout() {
  console.log('cominining_heehre');
  // const client = useApolloClient();
  // const {data} = await client.query({
  //   query: GET_USER_PROFILE,
  //   fetchPolicy: 'no-cache',
  // });
  const {loading, data, error, refetch} = useQuery(GET_USER_PROFILE);

  console.log(data, loading, error);

  return <></>;
}
