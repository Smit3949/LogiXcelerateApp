import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  from,
} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {useAuth0} from 'react-native-auth0';
import OperationLayout from './OperationLayout';
import {BatchHttpLink} from '@apollo/client/link/batch-http';
import {setContext} from '@apollo/client/link/context';
import NavigationBar from './screens/NavBar';
import {NavigationContainer} from '@react-navigation/native';
import {Route, Router} from 'react-router-native';
import {SendbirdCalls} from '@sendbird/calls-react-native';

export default function BaseLayout() {
  const [apolloClient, setApolloClient] = useState();
  const {authorize, getCredentials} = useAuth0();

  const httpLink = new BatchHttpLink({
    uri: 'http://192.168.1.24:3500/graphql',
    credentials: 'same-origin',
    batchMax: 5,
    batchInterval: 30,
    batchDebounce: true,
  });

  useEffect(() => {
    const login = async () => {
      try {
        console.log('authorize');
        await authorize();
      } catch (e) {
        console.log(e);
      }
    };
    login();
  }, []);

  useEffect(() => {
    const setClient = async () => {
      setApolloClient(
        await new ApolloClient({
          link: from([authMiddleware, httpLink]),
          cache: new InMemoryCache(),
          defaultOptions: {
            watchQuery: {
              fetchPolicy: 'cache-and-network',
              errorPolicy: 'all',
            },
            query: {
              fetchPolicy: 'cache-first',
              errorPolicy: 'all',
            },
            mutate: {
              errorPolicy: 'all',
            },
          },
          connectToDevTools: true,
        }),
      );
    };
    // if (isAuthenticated) {
    setClient();
    // }
  }, []);

  const authMiddleware = setContext(async (req, {headers}) => {
    const credentials = await getCredentials();
    const token = credentials['idToken'];
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  // console.log(apolloClient, ' printing_apolloca');
  if (!apolloClient) {
    return <></>;
  }
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <OperationLayout />
      </NavigationContainer>
    </ApolloProvider>
  );
}
