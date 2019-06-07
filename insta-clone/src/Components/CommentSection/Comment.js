import React from 'react';
import styled from 'styled-components';
import Username from '../Styles/Reusables';
import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const CommentText = styled.p`
  padding: 0 1rem;
`;

const Comment = ({ comment: { username, text } }) => (
  <CommentContainer>
    <Username>{username}</Username>
    <CommentText>{text}</CommentText>
  </CommentContainer>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
