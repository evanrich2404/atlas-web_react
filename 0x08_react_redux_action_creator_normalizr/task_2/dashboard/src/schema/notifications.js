import { normalize, schema } from 'normalizr';
import * as notifData from '../../../notifications.json';

// User entity
const user = new schema.Entity('users');

// Message entity with guid as the idAttribute
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize notifData
const normalizedData = normalize(notifData.default, [notification]);

// get all of the notifications based of the user's id
const getAllNotificationsByUser = (userId) => {
  return notifData.default
  .filter(notification => notification.author.id === userId)
  .map(notification => notification.context);
};

// export ze normalized data
export { normalizedData, getAllNotificationsByUser };
