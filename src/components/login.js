import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { callCatalogApi } from '../utility';


class Login extends Component {
  responseGoogle = (response) => {
    callCatalogApi('gconnect/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_token: response.accessToken }),
    }).then(({ jsonResponse }) => {
      this.props.setLoggedIn(jsonResponse.email);
      localStorage.setItem('email', jsonResponse.email);
      localStorage.setItem('Authorization', jsonResponse.Authorization);
      this.props.history.push('/');
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
        <br />
        <br />
        <p>Login to create, edit or delete items and categories.</p>
      </React.Fragment>
    );
  }
}


export default Login;
