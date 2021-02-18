import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Title from './Title';

export default function Layout({ children, pageProps }) {
  return (
    <>
      <Header>
        <Title pageProps={pageProps}>title</Title>
      </Header>
      <main>
        {children}
      </main>
    </>
  );
}

Layout.defaultProps = {
  pageProps: {},
  children: {},
};

Layout.propTypes = {
  children: PropTypes.shape(PropTypes.any),
  pageProps: PropTypes.shape(PropTypes.any),
};
