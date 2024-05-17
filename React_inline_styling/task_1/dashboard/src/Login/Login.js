import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    borderTop: '5px solid #db0909',
    borderBottom: '5px solid #db0909',
  },
  appBodyP: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '1rem 2rem 1rem 4rem',
  },
  appBodyForm: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '400',
    fontSize: '1.2rem',
    margin: '0.5rem 2rem 1rem 4rem',
  },
  appBodyLabel: {
    paddingRight: '0.5rem',
  },
  appBodyInput: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '0.5rem',
    padding: '0.2rem',
    border: '1px solid #00003C',
    borderRadius: '2px',
    maxWidth: 'calc(50% - 2rem)',
  },
  appBodyButton: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '0.5rem',
    padding: '0.2rem',
    border: '1px solid #00003C',
    borderRadius: '2px',
    backgroundColor: '#00003C',
    color: 'white',
  },
});

const Login = () => {
  return (
    <React.Fragment>
      <div className={css(styles.appBody)}>
        <p className={css(styles.appBodyP)}>Login to access the full dashboard</p>
        <form className={css(styles.appBodyForm)}>
          <label htmlFor="email" className={css(styles.appBodyLabel)}>Email: </label>
          <input type="email" id="email" name="email" className={css(styles.appBodyInput)} />
          <label htmlFor="password" className={css(styles.appBodyLabel)}>Password: </label>
          <input type="password" id="password" name="password" className={css(styles.appBodyInput)} />
          <button className={css(styles.appBodyButton)}>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
