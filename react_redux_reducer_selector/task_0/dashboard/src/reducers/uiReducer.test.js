import uiReducer from "./uiReducer";

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATON_DRAWER', () => {
    const action = { type: 'DISPLAY_NOTIFICATON_DRAWER' };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true
    };
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: 'HIDE_NOTIFICATION_DRAWER' };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: false
    };
    expect(uiReducer({ ...initialState, isNotificationDrawerVisible: true }, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: 'LOGIN_SUCCESS' };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: true
    };
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_FAILURE', () => {
    const action = { type: 'LOGIN_FAILURE' };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false
    };
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const action = { type: 'LOGOUT' };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false
    };
    expect(uiReducer({ ...initialState, isUserLoggedIn: true }, action)).toEqual(expectedState);
  });
});
