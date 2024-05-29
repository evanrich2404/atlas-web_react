import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = fromJS({
    notifications: {
      '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    },
    filter: 'DEFAULT'
  });

  it('should select the filter type', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('should select the notifications', () => {
    const expectedNotifications = fromJS({
      '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    });
    expect(getNotifications(state).toJS()).toEqual(expectedNotifications.toJS());
  });

  it('should select the unread notifications', () => {
    const expectedUnreadNotifications = fromJS({
      '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
      '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    });
    expect(getUnreadNotifications(state).toJS()).toEqual(expectedUnreadNotifications.toJS());
  });
});
