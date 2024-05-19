import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Notifications component', () => {
  // it('should call markAsRead with the right message when calling the function', () => {
  //   const wrapper = shallow(<Notifications />);
  //   const instance = wrapper.instance();
  //   const markAsReadSpy = jest.spyOn(console, 'log');
  //   instance.markAsRead(1);
  //   expect(markAsReadSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  //   markAsReadSpy.mockRestore();
  // });

  // it('should not rerender when updating the props with the same list', () => {
  //   const listNotifications = [
  //     { id: 1, type: 'default', value: 'New course available' },
  //     { id: 2, type: 'urgent', value: 'New resume available' },
  //   ];
  //   const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
  //   const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
  //   wrapper.setProps({ listNotifications });
  //   expect(shouldComponentUpdate).toHaveBeenCalled();
  //   expect(shouldComponentUpdate).toHaveReturnedWith(false);
  // });

  // it('should rerender when updating the props with a longer list', () => {
  //   const listNotifications = [
  //     { id: 1, type: 'default', value: 'New course available' },
  //     { id: 2, type: 'urgent', value: 'New resume available' },
  //   ];
  //   const longerListNotifications = [
  //     { id: 1, type: 'default', value: 'New course available' },
  //     { id: 2, type: 'urgent', value: 'New resume available' },
  //     { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  //   ];
  //   const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
  //   const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
  //   wrapper.setProps({ listNotifications: longerListNotifications });
  //   expect(shouldComponentUpdate).toHaveBeenCalled();
  //   expect(shouldComponentUpdate).toHaveReturnedWith(true);
  // });

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
});
