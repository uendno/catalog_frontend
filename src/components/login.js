import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import Cookies from 'universal-cookie';
 
class Login extends Component {
  responseGoogle = (response) => {
    const url = 'http://localhost:1337/gconnect';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: response.accessToken
      })
    }).then(response => response.json())
      .then(response => {
        const cookies = new Cookies();
        cookies.set('token', response, { path: '/' });
    });
  };

  render() {
    return (
      <div>
        <h2>Google Login</h2>
          <GoogleLogin 
            clientId="409205980523-pgp1b0o0hascj3n9v9h35bfn8q2ed7ba.apps.googleusercontent.com" 
            buttonText="Login" 
            onSuccess={this.responseGoogle} 
          />
      </div>
    );
  }
}
 
export default Login;
