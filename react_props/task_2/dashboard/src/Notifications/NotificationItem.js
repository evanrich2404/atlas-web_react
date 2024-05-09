import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type}>
      {html ? <div dangerouslySetInnerHTML={html}></div> : value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: '',
  html: null,
  value: '',
};

export default NotificationItem;
