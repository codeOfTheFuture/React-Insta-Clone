import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = ({
  post: { username, thumbnailUrl, imageUrl, likes, timestamp, comments }
}) => (
  <Card className="postContainer">
    <div className="post">
      <div className="postHeading">
        <img className="thumbnail" src={`${thumbnailUrl}`} alt="thumbnail" />
        <h2 className="userName">{username}</h2>
      </div>
      <img src={`${imageUrl}`} alt="" />
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faComment} />
      <div className="likes">{`${likes} likes`}</div>
    </div>
    <div className="timestamp">{timestamp}</div>
    <CommentSection comments={comments} />
  </Card>
);

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
