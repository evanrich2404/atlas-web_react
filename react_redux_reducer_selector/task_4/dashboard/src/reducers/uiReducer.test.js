import { Map } from 'immutable';
import uiReducer from './uiReducer';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map()
});

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: 'HIDE_NOTIFICATION_DRAWER' };
    const state = initialState.set('isNotificationDrawerVisible', true);
    const expectedState = state.set('isNotificationDrawerVisible', false);
    expect(uiReducer(state, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: 'LOGIN_SUCCESS' };
    const expectedState = initialState.set('isUserLoggedIn', true);
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_FAILURE', () => {
    const action = { type: 'LOGIN_FAILURE' };
    const expectedState = initialState.set('isUserLoggedIn', false);
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const action = { type: 'LOGOUT' };
    const state = initialState.set('isUserLoggedIn', true);
    const expectedState = state.set('isUserLoggedIn', false);
    expect(uiReducer(state, action)).toEqual(expectedState);
  });
});
