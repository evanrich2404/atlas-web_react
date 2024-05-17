import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  tableRow: {
    backgroundColor: '#f5f5f5ab',
    textAlign: 'left',
  },
  tableHeader: {
    backgroundColor: '#deb5b545',
    textAlign: 'left',
  },
  firstCell: {
    fontWeight: 'bold',
  },
  secondCell: {
    fontStyle: 'italic',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = css(isHeader ? styles.tableHeader : styles.tableRow);
  const firstCellStyle = css(styles.firstCell);
  const secondCellStyle = css(styles.secondCell);

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={rowStyle}>
          <th colSpan={2} className={firstCellStyle}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={rowStyle}>
          <th className={firstCellStyle}>{textFirstCell}</th>
          <th className={secondCellStyle}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={rowStyle}>
        <td className={firstCellStyle}>{textFirstCell}</td>
        <td className={secondCellStyle}>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
