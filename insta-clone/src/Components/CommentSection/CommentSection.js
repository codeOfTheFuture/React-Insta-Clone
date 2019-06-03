import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentSection = props => {
  return props.comments.map(comment => {
    return (
      <div className="commentSection">
        <Comment key={comment.id} comment={comment} />
      </div>
    );
  });
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
