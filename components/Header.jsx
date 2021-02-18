import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Container } from '@material-ui/core';

function Header({ children }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        {children}
      </Container>
    </>
  );
}

Header.propTypes = {
  children: PropTypes.shape(PropTypes.any),
};

Header.defaultProps = {
  children: {},
};

export default Header;
