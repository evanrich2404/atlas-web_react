import * as notifData from '../../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
  return notifData.default
  .filter(notification => notification.author.id === userId)
  .map(notification => notification.context);
};
