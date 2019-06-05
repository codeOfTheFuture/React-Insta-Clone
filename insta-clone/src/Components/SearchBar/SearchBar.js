import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import LogoText from '../../img/logo-text.png';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  filterSearch = event => {
    event.preventDefault();
    this.props.filterSearch(this.state.search);
    this.setState({
      search: ''
    });
  };

  render() {
    return (
      <header className="header">
        <img src={`${LogoText}`} alt="Instagram" className="logoText" />
        <Form onSubmit={this.filterSearch}>
          <input
            onChange={this.handleChanges}
            value={this.state.search}
            name="search"
            type="text"
            placeholder="Search"
            className="search"
          />
        </Form>
      </header>
    );
  }
}

export default SearchBar;
