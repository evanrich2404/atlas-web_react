import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';

const bounceKeyFrames = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const opacityKeyFrames = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  notifications: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    border: '5px dotted #db0909',
    backgroundColor: '#f5f5f5',
    padding: '0.5rem',
  },
  menuItem: {
    textAlign: 'right',
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    padding: '10px',
    backgroundColor: 'white',
    cursor: 'pointer',
    float: 'right',
    ':hover': {
      animationName: [bounceKeyFrames, opacityKeyFrames],
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3',
    },
  },
  notificationsButton: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0.5rem',
    cursor: 'pointer',
  },
  notificationsP: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    fontWeight: '400',
    padding: '0.5rem',
    margin: '0',
  },
  img: {
    width: '10px',
    height: '10px',
  },
  hide: {
    display: 'none',
  },
  responsiveNotifications: {
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      zIndex: '9999',
      padding: '0',
      fontSize: '20px',
    },
  },
});

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.listNotifications.length > this.props.listNotifications.length;
  // }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    console.log('listNotifications', listNotifications);

    return (
      <div>
        <div className={css(styles.menuItem)}>
          <div onClick={handleDisplayDrawer}>Your notifications</div>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications, styles.responsiveNotifications)}>
            <div
              className={css(styles.notificationsButton)}
              aria-label="Close"
              data-testid="notifications-close-button"
              onClick={handleHideDrawer}
            >
              <img className={css(styles.img)} src={closeIcon} alt="Close" />
            </div>
            <ul>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  markAsRead={this.markAsRead}
                  {...notification}
                />
              ))}
            </ul>
            {listNotifications.length === 0 && (
              <p className={css(styles.notificationsP)}>No new notification for now</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
