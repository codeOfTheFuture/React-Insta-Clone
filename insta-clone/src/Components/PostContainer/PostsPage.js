import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import '../../App.css';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    if (!localStorage.getItem('posts')) {
      const posts = [...dummyData];

      this.setState({
        data: posts
      });

      localStorage.setItem('posts', JSON.stringify(posts));
    } else {
      this.setState({
        data: JSON.parse(localStorage.getItem('posts'))
      });
    }
  };

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

    localStorage.setItem('posts', JSON.stringify(updateData));

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

    localStorage.setItem('posts', JSON.stringify(filterData));
  };

  showAllPosts = () => {
    const posts = [...dummyData];

    this.setState({
      data: posts
    });

    localStorage.setItem('posts', JSON.stringify(posts));
  };

  render() {
    return (
      <div>
        <SearchBar
          filterSearch={this.filterSearch}
          showAllPosts={this.showAllPosts}
        />
        <Container className="App">
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
      </div>
    );
  }
}

export default PostsPage;
