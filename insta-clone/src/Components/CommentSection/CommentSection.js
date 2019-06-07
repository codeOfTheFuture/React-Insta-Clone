import React, { Component } from 'react';
import Moment from 'react-moment';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const comments = [...this.props.comments];

    if (!localStorage.getItem('comments')) {
      this.setState({
        comments: comments
      });

      localStorage.setItem('comments', JSON.stringify(comments));
    } else {
      this.setState({
        comments: JSON.parse(localStorage.getItem('comments'))
      });
    }
  };

  addNewComment = text => {
    const newComment = {
      id: Date.now(),
      username: 'Jeff Oliver',
      text: text
    };

    this.setState(prevState => {
      const updatedComments = [...prevState.comments, newComment];

      localStorage.setItem('comments', JSON.stringify(updatedComments));

      return {
        comments: updatedComments
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.comments.map(comment => {
            return (
              <div className="commentSection">
                <Comment key={comment.id} comment={comment} />
              </div>
            );
          })}
        </div>

        <div className="timestamp">
          <Moment fromNow>{`${this.props.timestamp}`}</Moment>
        </div>

        <CommentForm addNewComment={this.addNewComment} />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
