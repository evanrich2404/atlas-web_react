import { fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = fromJS({
    notifications: {},
    filter: 'DEFAULT'
  });

  it('should return the initial state when no action is passed', () => {
    expect(notificationReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' }
      ]
    };
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      }
    });
    expect(notificationReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      }
    });
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      }
    });
    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      }
    });
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = fromJS({
      filter: 'URGENT',
      notifications: {
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      }
    });
    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });
});
