import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notificationsLi: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    padding: '0.5rem',
    margin: '0',
  },
  notificationsLiDefault: {
    color: 'blue',
  },
  notificationsLiUrgent: {
    color: 'red',
  },
  responsiveNotificationsItem: {
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
});

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;

    const liStyle = css(
      styles.notificationsLi,
      type === 'default' ? styles.notificationsLiDefault : styles.notificationsLiUrgent
    );

    const liResponsiveStyle = css(styles.responsiveNotificationsItem)

    return (
      <li className={(liStyle, liResponsiveStyle)} data-notification-type={type} onClick={() => markAsRead(id)}>
        {html ? <div dangerouslySetInnerHTML={html}></div> : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
