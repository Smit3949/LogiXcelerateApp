import {useEffect} from 'react';
import RNCallKeep from 'react-native-callkeep';
import {View} from 'react-native';

function handleIncomingCallEvent() {
  console.log('cominignininignignignign');
  // Subscribe to call events
  RNCallKeep.addEventListener('didReceiveStartCallAction', ({handle}) => {
    // Handle incoming call event
    console.log('Received incoming call:', handle);
    // Display notification or perform any other action
  });

  // Configure call handling
  RNCallKeep.setup({
    ios: {
      appName: 'Your App Name',
    },
    android: {
      alertTitle: 'Permissions required',
      alertDescription: 'This application needs to access your phone accounts',
      cancelButton: 'Cancel',
      okButton: 'Ok',
    },
  });
}

function CallHandler() {
  useEffect(() => {
    // Call the function to handle incoming call events
    handleIncomingCallEvent();

    // Clean up event listeners
    return () => {
      RNCallKeep.removeEventListener('didReceiveStartCallAction');
    };
  }, []);

  return <View></View>;
}

export default CallHandler;
