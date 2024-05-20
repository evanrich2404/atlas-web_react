import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Notifications component', () => {
  it('should call handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawerSpy = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawerSpy} />
    );
    wrapper.find('[onClick]').simulate('click');
    expect(handleDisplayDrawerSpy).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawerSpy = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer handleHideDrawer={handleHideDrawerSpy} />
    );
    wrapper.find('[data-testid="notifications-close-button"]').simulate('click');
    expect(handleHideDrawerSpy).toHaveBeenCalled();
  });

  it('should call markNotificationAsRead with the right id when clicking on a NotificationItem', () => {
    const markNotificationAsReadSpy = jest.fn();
    const wrapper = mount(
      <Notifications
        displayDrawer={true}
        listNotifications={[
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
        ]}
        markNotificationAsRead={markNotificationAsReadSpy}
      />
    );
    wrapper.find(NotificationItem).first().simulate('click');
    expect(markNotificationAsReadSpy).toHaveBeenCalledWith(1);
  });
});
