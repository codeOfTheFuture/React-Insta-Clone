import React, { Component } from 'react';
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
      <div className="PostContainer">
        <img src={`${thumbnailUrl}`} alt="" />
        <h2 style={{ color: 'blue' }}>{username}</h2>
        <img src={`${imageUrl}`} alt="" />
        <div>{`${likes} likes`}</div>
        <CommentSection comments={comments} />
        <div>{timestamp}</div>
      </div>
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
