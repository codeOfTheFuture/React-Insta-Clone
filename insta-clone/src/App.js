import React, { Component } from 'react';
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
      <div className="App">
        <h1>Insta Clone</h1>
        <SearchBar />
        {this.state.data.map(post => {
          return <PostContainer key={post.id} post={post} />;
        })}
      </div>
    );
  }
}

export default App;
