import React, { Component } from 'react';
import PostsPage from './Components/PostContainer/PostsPage';
import withAuthenticate from './Authentication/WithAuthenticate';
import Login from './Components/Login/Login';
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
