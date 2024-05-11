import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import './CourseShape';

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      <thead>
        {/* ... */}
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        ) : (
          listCourses.map(course => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default CourseList;
