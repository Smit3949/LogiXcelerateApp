/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import {PermissionsAndroid, Platform} from 'react-native';
import Permissions, {PERMISSIONS} from 'react-native-permissions';
import messaging, {firebase} from '@react-native-firebase/messaging';
import BaseLayout from './BaseLayout';
import {useEffect} from 'react';
import {getFcmToken, registerListenerWithFCM} from './utils/pushnotification';
import {useMutation} from '@apollo/client';
import {ADD_ACTIVITY_NOTIFICATION_TOKEN} from './utils/graphql/activity';
import {SendbirdCalls} from '@sendbird/calls-react-native';

SendbirdCalls.initialize('A086D1D4-60E7-4D7F-A999-827D32439147');
SendbirdCalls.authenticate({
  userId: 'sendbird_desk_agent_id_a3beaf4a-9278-4d58-927d-f36267a99ec5',
  accessToken: 'aa49899f1980fb2e84362b7e3880945e8a272e78',
})
  .then((user: any) => {
    // The user has been authenticated successfully.
  })
  .catch((error: any) => {
    // Error.
  });
SendbirdCalls.setListener({
  onRinging(callProps) {
    // Process an incoming call.
    console.log('onRinging', callProps);
  },
});

function App(): React.JSX.Element {
  // const [addToken, {error}] = useMutation(ADD_ACTIVITY_NOTIFICATION_TOKEN);

  // useEffect(() => {
  //   console.error(error);
  // }, [error]);

  const CALL_PERMISSIONS = Platform.select({
    android: [
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.RECORD_AUDIO,
      PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
    ],
    ios: [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE],
    default: [],
  });

  useEffect(() => {
    const requestPermission = async () => {
      await Permissions.requestMultiple(CALL_PERMISSIONS);
    };
    requestPermission();
  }, []);
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

  useEffect(() => {
    const token = getFcmToken();
    // addToken({variables: {token}});
  }, []);

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
