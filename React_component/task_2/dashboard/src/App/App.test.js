import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should call logOut function and display alert when ctrl+h is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallow(<App logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);
    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    alertMock.mockRestore();
  });
});
