// BodySectionWithMarginBottom.test.js
import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom component', () => {
  it('should render correctly a BodySection component and pass the props correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection).exists()).toBe(true);
    expect(wrapper.find(BodySection).props().title).toBe('test title');
    expect(wrapper.find(BodySection).childAt(0).text()).toBe('test children node');
  });
});
