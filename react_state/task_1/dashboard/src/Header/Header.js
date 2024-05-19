import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holberton_logo from '../assets/holberton_logo.png';

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
});

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <img src={holberton_logo} className={css(styles.holbertonLogo)} alt="logo" />
      <h1 className={css(styles.headerH1)}>School dashboard</h1>
    </header>
  );
};

export default Header;
