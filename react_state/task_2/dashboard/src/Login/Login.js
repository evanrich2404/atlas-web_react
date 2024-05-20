import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  loginText: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '1rem 0',
  },
  loginForm: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '400',
    fontSize: '1.2rem',
  },
  loginLabel: {
    paddingRight: '0.5rem',
  },
  loginInput: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '0.5rem',
    padding: '0.2rem',
    border: '1px solid black',
    borderRadius: '2px',
    maxWidth: 'calc(50% - 2rem)',
  },
  loginButton: {
    fontFamily: 'Galano Grotesque Alt, sans-serif',
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '0.5rem',
    padding: '0.2rem',
    border: '1px solid black',
    borderRadius: '2px',
    backgroundColor: '#00003C',
    color: 'white',
  },
  responsiveForm: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  responsiveInput: {
    '@media (max-width: 900px)': {
      marginBottom: '10px',
    },
  },
  responsiveButton: {
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
      isLoggedIn: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.checkFormValidity = this.checkFormValidity.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    console.log('Form submitted');
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const { value } = event.target;
    this.setState(
      prevState => ({
        email: value,
        enableSubmit: value !== '' && prevState.password !== '',
      }),
      this.checkFormValidity
    );
  }

  handleChangePassword(event) {
    const { value } = event.target;
    this.setState(
      prevState => ({
        password: value,
        enableSubmit: prevState.email !== '' && value !== '',
      }),
      this.checkFormValidity
    );
  }

  checkFormValidity() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  render () {
    const { email, password, enableSubmit } = this.state;
    console.log('enableSubmit:', enableSubmit);

    return (
      <div className={css(styles.loginContainer)}>
        <p className={css(styles.loginText)}>Login to access the full dashboard</p>
        <form className={css(styles.loginForm, styles.responsiveForm)} onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email" className={css(styles.loginLabel, styles.responsiveInput)}>Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.loginInput, styles.responsiveInput)}
            value={email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="password" className={css(styles.loginLabel, styles.responsiveInput)}>Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            className={css(styles.loginInput, styles.responsiveInput)}
            value={password}
            onChange={this.handleChangePassword}
          />
          <input
            type="submit"
            disabled={!enableSubmit}
            className={css(styles.loginButton, styles.responsiveButton)}
            value="OK"
          />
        </form>
      </div>
    );
  }
}

export default Login;
