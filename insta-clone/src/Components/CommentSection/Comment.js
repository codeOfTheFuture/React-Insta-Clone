import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const Comment = ({ comment: { username, text } }) => (
  <div className="comment">
    <h4 className="commentUser">{username}</h4>
    <p className="commentText">{text}</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
