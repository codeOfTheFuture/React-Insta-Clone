import React from 'react';

const withAuthenticate = Component =>
  class extends React.Component {
    render() {
      return <Component />;
    }
  };

export default withAuthenticate;
