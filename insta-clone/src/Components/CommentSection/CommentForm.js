import React, { Component } from 'react';
import { Form, FormControl } from 'react-bootstrap';
// import PropTypes from 'prop-types';

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewComment = event => {
    event.preventDefault();
    this.props.addNewComment(this.state.text);
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <Form onSubmit={this.addNewComment}>
        <FormControl
          onChange={this.handleChanges}
          value={this.state.text}
          name="text"
          className="addComment"
          type="text"
          placeholder="Add a comment..."
        />
      </Form>
    );
  }
}

// CommentSection.propTypes = {
//   comments: PropTypes.arrayOf(PropTypes.object)
// };

export default CommentForm;
