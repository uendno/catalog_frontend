import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import callCatalogApi from '../utility';


class Login extends Component {
  responseGoogle = (response) => {
    callCatalogApi('gconnect/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_token: response.accessToken }),
    }).then((response) => {
      this.props.setLoggedIn(response.email);
      localStorage.setItem('email', response.email);
      localStorage.setItem('Authorization', response.Authorization);
      this.props.history.push("/");
    });
  };


  render() {
    return (
      <React.Fragment>
        <h2>Google Login</h2>
        <GoogleLogin
          clientId="409205980523-pgp1b0o0hascj3n9v9h35bfn8q2ed7ba.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
        />
      </React.Fragment>
    );
  }
}


Login.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default Login;
