import React, { useState } from 'react';
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
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);
  const rowStyle = css(
    isHeader ? styles.tableHeader : styles.tableRow,
    !isHeader && isChecked ? styles.rowChecked : null
  );
  const firstCellStyle = css(styles.firstCell);
  const secondCellStyle = css(styles.secondCell);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(`Checkbox is now ${!isChecked ? 'checked' : 'unchecked'}`);
  };

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
        <td className={firstCellStyle}>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          {textFirstCell}
        </td>
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
