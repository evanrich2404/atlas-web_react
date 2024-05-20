import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseList component tests', () => {
  let courseList;

  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  describe('With empty listCourses', () => {
    beforeEach(() => {
      courseList = shallow(<CourseList listCourses={[]} />);
    });

    it('renders correctly when listCourses is empty or not passed', () => {
      expect(courseList.find('CourseListRow').at(2).prop('textFirstCell')).toEqual('No course available yet');
    });
  });

  describe('With listCourses containing elements', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    beforeEach(() => {
      courseList = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders correctly when listCourses contains elements', () => {
      expect(courseList.find('CourseListRow')).toHaveLength(listCourses.length +2);
    });
  });
});
