import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

function Notifications() {
  const closeNotifications = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className='Notifications' style={{position: 'relative', padding: '1rem'}}>
      <button
        aria-label='Close'
        onClick={closeNotifications}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer'
        }}>
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
}

export default Notifications;
