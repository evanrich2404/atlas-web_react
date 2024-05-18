import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';

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
    color: 'black',
    padding: '10px',
    backgroundColor: 'white',
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
    const { displayDrawer, listNotifications } = this.props;
    console.log('listNotifications', listNotifications);

    return (
      <div>
        <div className={css(styles.menuItem)}>Your notifications</div>
        <div className={css(styles.responsiveNotifications, displayDrawer ? styles.Notifications : styles.hide)}>
          {displayDrawer && (
            <button className={css(styles.notificationsButton)} aria-label="Close" OnClick={() => console.log('Close button has been clicked')}>
              <img className={css(styles.img)} src={closeIcon} alt="Close" />
            </button>
          )}
          {displayDrawer ? (
            <ul>
              {listNotifications.map((notification) => (
                <NotificationItem key={notification.id} markAsRead={this.markAsRead} {...notification} />
              ))}
            </ul>
          ) : null}
          {displayDrawer && listNotifications.length === 0 ? (
            <p className={css(styles.notificationsP)}>No new notification for now</p>
          ) : null}
        </div>
      </div>
    );
  }
}
            // <div className={css(styles.notifications, styles.responsiveNotifications)}>
            //   <p className={css(styles.notificationsP)}>Here is the list of notifications</p>
            //   <ul>
            //     {listNotifications.length === 0 ? (
            //       <NotificationItem value="No new notification for now" />
            //     ) : (
            //       listNotifications.map(notification => (
            //         <NotificationItem
            //           key={notification.id}
            //           type={notification.type}
            //           value={notification.value}
            //           html={notification.html}
            //           markAsRead={this.markAsRead}
            //           id={notification.id}
            //         />
            //       ))
            //     )}
            //   </ul>
            // </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
