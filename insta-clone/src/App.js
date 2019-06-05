import React, { Component } from 'react';
import PostsPage from './Components/PostContainer/PostsPage';
import WithAuthenticate from './Authentication/WithAuthenticate';
import './App.css';
import withAuthenticate from './Authentication/WithAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
