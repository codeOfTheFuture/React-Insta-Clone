import React, { Component } from 'react';
import LogoText from '../../img/logo-text.png';
import ProfilePicture from '../../img/profile-picture.jpg';
import AppStore from '../../img/app-store.png';
import GooglePlay from '../../img/google-play.png';
import Microsoft from '../../img/microsoft.png';
import {
  Container,
  Form,
  FormLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: {
        username: '',
        password: ''
      },
      loggedIn: true
    };
  }

  handleChanges = event => {
    this.setState({
      login: {
        ...this.state.login,
        [event.target.name]: event.target.value
      }
    });
  };

  toggleLogin = event => {
    event.preventDefault();

    if (
      this.state.login.username === 'jeffoliver' &&
      this.state.login.password === 'password'
    ) {
      if (localStorage.getItem('loggedIn')) {
        localStorage.removeItem('loggedIn');

        this.setState({
          loggedIn: false
        });
      } else {
        localStorage.setItem('loggedIn', true);

        this.setState({
          loggedIn: true
        });
      }
    } else {
      alert('Username or password incorrect');
    }

    window.location.reload(true);
    // }
  };

  render() {
    return (
      <Container className="container">
        <Form className="form">
          <div className="images">
            <img src={`${LogoText}`} alt="Instagram logo" />
            <img
              src={`${ProfilePicture}`}
              alt="Profile picture"
              className="profilePicture"
            />
          </div>
          <Form.Group>
            <FormLabel>Username</FormLabel>
            <FormControl
              onChange={this.handleChanges}
              name="username"
              value={this.state.username}
              type="text"
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group>
            <FormLabel>Password</FormLabel>
            <FormControl
              onChange={this.handleChanges}
              name="password"
              value={this.state.password}
              type="text"
              placeholder="Password"
            />
          </Form.Group>

          <Button onClick={this.toggleLogin}>Login</Button>
        </Form>
        <div>
          <div>Get the app</div>
          <div className="getApp">
            <img src={`${AppStore}`} alt="App Store" />
            <img src={`${GooglePlay}`} alt="Google Play" />
            <img src={`${Microsoft}`} alt="Microsoft" className="microsoft" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Login;
