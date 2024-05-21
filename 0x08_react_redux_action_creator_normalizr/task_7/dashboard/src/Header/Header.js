import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holberton_logo from '../assets/holberton_logo.png';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  holbertonLogo: {
    height: '15vmin',
    pointerEvents: 'none',
  },
  header: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '20px',
    paddingBottom: '20px',
    borderBottom: '4px solid black',
    fontSize: 'calc(9px + 1vmin)',
    color: 'black',
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    position: 'relative',
  },
  headerh1: {
    padding: '20px',
  },
  logoutSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10px',
    marginLeft: 'auto',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  logoutEmail: {
    marginRight: '10px',
    maxWidth: '300px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 900px)': {
      marginRight: '0',
      marginBottom: '10px',
      maxWidth: '150px',
    },
  },
});

class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.header)}>
        <img src={holberton_logo} className={css(styles.holbertonLogo)} alt="logo" />
        <h1 className={css(styles.headerH1)}>School dashboard</h1>
        {user && user.isLoggedIn && (
          <section className={css(styles.logoutSection)} id="logoutSection">
            <span className={css(styles.logoutEmail)}>Welcome {user.email}</span>
            <a href="#" onClick={logOut}>(logout)</a>
          </section>
        )}
      </header>
    );
  }
}

export default Header;
