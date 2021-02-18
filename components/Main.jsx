import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

function Main({ children }) {
  return (
    <Container maxWidth="sm">
      {children}
    </Container>
  );
}

Main.propTypes = {
  children: {},
};

Main.defaultProps = {
  children: PropTypes.shape(PropTypes.any),

};

export default Main;
