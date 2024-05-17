import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton_logo.png';

const styles = StyleSheet.create({
  holberton_logo: {
    height: '12rem',
    pointerEvents: 'none',
  },
  header: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  headerh1: {
    fontSize: '3.5rem',
    color: '#db0909',
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '800',
  },
});

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.holbertonLogo)} alt="logo" />
      <h1 className={css(styles.headerH1)}>School dashboard</h1>
    </header>
  );
};

export default Header;
