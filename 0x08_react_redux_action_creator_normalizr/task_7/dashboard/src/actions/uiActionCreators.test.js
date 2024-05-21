import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('uiActionCreators', () => {
  it('login should create an action to login a user', () => {
    const email = 'test@example.com';
    const password = '123456';
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout should create an action to logout a user', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer should create an action to display the notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer should create an action to hide the notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('loginRequest action', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('creates LOGIN and LOGIN_SUCCESS when login is successful', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ user: 'test' })
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: '123456' } },
      { type: LOGIN_SUCCESS }
    ];
    const store = mockStore({});

    await store.dispatch(loginRequest('test@example.com', '123456'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates LOGIN and LOGIN_FAILURE when login fails', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: '123456' } },
      { type: LOGIN_FAILURE }
    ];
    const store = mockStore({});

    await store.dispatch(loginRequest('test@example.com', '123456'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
