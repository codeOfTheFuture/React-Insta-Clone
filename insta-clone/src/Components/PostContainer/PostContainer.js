import React, { Component } from 'react';
import { Jumbotron, InputGroup, FormControl } from 'react-bootstrap';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
  render() {
    const {
      username,
      thumbnailUrl,
      imageUrl,
      likes,
      timestamp,
      comments
    } = this.props.post;

    return (
      <Jumbotron className="postContainer">
        <div className="post">
          <div className="postHeading">
            <img
              className="thumbnail"
              src={`${thumbnailUrl}`}
              alt="thumbnail"
            />
            <h2 className="userName">{username}</h2>
          </div>
          <img src={`${imageUrl}`} alt="" />
          <div className="likes">{`${likes} likes`}</div>
        </div>
        <CommentSection comments={comments} />
        <div className="timestamp">{timestamp}</div>
        <FormControl
          className="addComment"
          type="text"
          placeholder="Add a comment..."
        />
      </Jumbotron>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.object),
    timestamp: PropTypes.string
  })
};

export default PostContainer;
