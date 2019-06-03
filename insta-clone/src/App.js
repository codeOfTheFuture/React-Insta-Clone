import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <Container className="App">
        <Navbar>
          <Navbar.Brand>Insta Clone</Navbar.Brand>
          <SearchBar />
        </Navbar>
        {this.state.data.map(post => {
          return <PostContainer key={post.id} post={post} />;
        })}
      </Container>
    );
  }
}

export default App;
