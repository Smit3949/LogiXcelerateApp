import {gql} from '@apollo/client';

export const ADD_ACTIVITY_NOTIFICATION_TOKEN = gql`
  mutation addActivityNotificationToken($token: String!) {
    add_activity_notification_token(token: $token) {
      token
      user
    }
  }
`;
