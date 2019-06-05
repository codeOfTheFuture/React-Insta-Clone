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
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  toggleLike = id => {
    const updateData = this.state.data.map(post => {
      if (post.id === id) {
        if (post.liked === true) {
          post.likes -= 1;
          post.liked = false;
          return post;
        } else {
          post.likes += 1;
          post.liked = true;
          return post;
        }
      } else {
        return post;
      }
    });

    this.setState({
      data: updateData
    });

    console.log(this.state.data);
  };

  filterSearch = search => {
    const filterData = this.state.data.filter(post => {
      if (post.username === search) {
        return post;
      }
    });

    this.setState({
      data: filterData
    });
  };

  render() {
    return (
      <Container className="App">
        <Navbar>
          <SearchBar filterSearch={this.filterSearch} />
        </Navbar>
        {this.state.data.map(post => {
          return (
            <PostContainer
              key={post.id}
              post={post}
              toggleLike={this.toggleLike}
            />
          );
        })}
      </Container>
    );
  }
}

export default App;
