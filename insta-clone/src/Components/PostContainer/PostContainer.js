import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import Username from '../Styles/Reusables';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import './PostContainer.css';

const Post = styled.div`
  max-width: 75%;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2.5rem;
  margin: 3rem 0;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

const Thumbnail = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  border-radius: 50%;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%
  margin: auto;
  border-radius: 5px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Likes = styled.div`
  text-align: left;
  font-size: 1.2rem;
  padding: 1rem 0;
`;

const PostContainer = ({
  post: {
    username,
    thumbnailUrl,
    imageUrl,
    likes,
    liked,
    timestamp,
    comments,
    id
  },
  toggleLike: toggleLike
}) => (
  <Post>
    <div>
      <PostHeader>
        <Thumbnail src={`${thumbnailUrl}`} alt="thumbnail" />
        <Username>{username}</Username>
      </PostHeader>

      <PostContent>
        <ContentImg src={`${imageUrl}`} alt="" />

        <Icons>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => toggleLike(id)}
            className={`like${liked === true ? ' liked' : ''}`}
          />

          <FontAwesomeIcon icon={faComment} className="comments" />
        </Icons>

        <Likes>{`${likes} likes`}</Likes>
      </PostContent>

      <CommentSection comments={comments} timestamp={timestamp} />
    </div>
  </Post>
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
