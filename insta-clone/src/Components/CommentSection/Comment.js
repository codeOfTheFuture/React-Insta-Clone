import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  const { username, text } = props.comment;

  return (
    <div>
      <h4>{username}</h4>
      <p>{text}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
