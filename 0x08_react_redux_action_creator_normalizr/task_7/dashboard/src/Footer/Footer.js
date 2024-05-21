import React from 'react';
import { AppContext } from '../App/AppContext';
import { StyleSheet, css } from 'aphrodite';
import { getFooterCopy, getFullYear } from '../utils/utils';

const styles = StyleSheet.create({
  footer: {
    borderTop: 'black 4px solid',
    backgroundColor: 'white',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    color: 'black'
  },
  contactLink: {
    color: 'black',
    textDecoration: 'underline',
  },
});

const Footer = () => {
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <footer className={css(styles.footer)}>
          <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
          {user.isLoggedIn && (
            <p>
              <a href="#" className={css(styles.contactLink)}>Contact us</a>
            </p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
};

export default Footer;
