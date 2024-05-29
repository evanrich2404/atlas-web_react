import { normalize, schema } from 'normalizr';
import * as notifData from '../../../notifications.json';

// Define a user entity
const user = new schema.Entity('users');

// Define a message entity with guid as the idAttribute
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define a notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the data
const normalizedData = normalize(notifData.default, [notification]);

// Function to get all notifications by user using the normalized data
export const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  return Object.values(notifications)
    .filter(notification => notification.author === userId)
    .map(notification => messages[notification.context]);
};

// Export the normalized data
export { normalizedData };

// New function to normalize notifications for the reducer
export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};
