import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../../img/instagram-logo.png';
import ShowAllPosts from '../../img/showAllPosts.png';
import ShowAllLiked from '../../img/showAllLiked.png';
import User from '../../img/user.png';
import './SearchBar.css';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5rem;
  height: 5rem;
`;

const HeaderLogo = styled.img`
  height: 100%;
  margin-top: 0.8rem;
`;

const HeaderSearch = styled.input`
  text-align: center;
  margin-top: 1rem;
  padding: 0.2rem 2.5rem;
  border: 1px solid grey;
  border-radius: 5px;
`;

const HeaderIcon = styled.img`
  cursor: pointer;
`;

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

  signout = () => {
    localStorage.removeItem('loggedIn');

    window.location.reload(true);
  };

  render() {
    return (
      <Header className="header">
        <HeaderLogo src={`${Logo}`} alt="Logo" />
        <Form onSubmit={this.filterSearch}>
          <HeaderSearch
            onChange={this.handleChanges}
            value={this.state.search}
            name="search"
            type="text"
            placeholder="Search"
            className="search"
          />
        </Form>
        <div>
          <HeaderIcon
            onClick={this.props.showAllPosts}
            src={`${ShowAllPosts}`}
            alt="Show All Posts"
          />
          <HeaderIcon src={`${ShowAllLiked}`} alt="Show All Liked" />
          <HeaderIcon src={`${User}`} alt="User" onClick={this.signout} />
        </div>
      </Header>
    );
  }
}

export default SearchBar;
