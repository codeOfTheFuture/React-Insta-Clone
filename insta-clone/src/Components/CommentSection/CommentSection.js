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
    this.setState({
      comments: this.props.comments
    });
  }

  addNewComment = text => {
    const newComment = {
      id: Date.now(),
      username: 'Jeff Oliver',
      text: text
    };

    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment]
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
