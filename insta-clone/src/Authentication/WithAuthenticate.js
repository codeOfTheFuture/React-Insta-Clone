import React from 'react';

const withAuthenticate = PostPage => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem('loggedIn')) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    }

    render() {
      if (this.state.loggedIn === true) {
        return <PostPage />;
      } else {
        return <LoginPage />;
      }
    }
  };

export default withAuthenticate;
