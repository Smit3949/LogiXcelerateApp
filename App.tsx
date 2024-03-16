/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import {PermissionsAndroid} from 'react-native';
import messaging, {firebase} from '@react-native-firebase/messaging';
import BaseLayout from './BaseLayout';
import {useEffect} from 'react';
import {getFcmToken, registerListenerWithFCM} from './utils/pushnotification';
import {useMutation} from '@apollo/client';
import {ADD_ACTIVITY_NOTIFICATION_TOKEN} from './utils/graphql/activity';

function App(): React.JSX.Element {
  // const [addToken, {error}] = useMutation(ADD_ACTIVITY_NOTIFICATION_TOKEN);

  // useEffect(() => {
  //   console.error(error);
  // }, [error]);
  useEffect(() => {
    firebase.initializeApp({
      apiKey: 'AIzaSyAPB3QDi4x3M3yF_Sr1w1bDaVbO4E4rqME',
      authDomain: 'shipmnts-hub-development.firebaseapp.com',
      projectId: 'shipmnts-hub-development',
      storageBucket: 'shipmnts-hub-development.appspot.com',
      messagingSenderId: '133601729978',
      appId: '1:133601729978:web:85fe8e99f99238b8085183',
      measurementId: 'G-H3LLEXZYSG',
    });
  }, []);

  // useEffect(() => {
  //   const token = getFcmToken();
  //   addToken({variables: {token}});
  // }, []);

  useEffect(() => {
    const unsubscribe = registerListenerWithFCM();
    return unsubscribe;
  }, []);
  return (
    <Auth0Provider
      domain={'shipmnts-staging.au.auth0.com'}
      clientId={'YiZRTwRbyGXkGwF4n2iuWNcr0sUuVM53'}>
      <BaseLayout />
    </Auth0Provider>
  );
}

export default App;
