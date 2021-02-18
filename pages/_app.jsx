/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';

const Noop = ({ children }) => <>{children}</>;

Noop.propTypes = {
  children: PropTypes.func,
};

Noop.defaultProps = {
  children: () => {},
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.defaultProps = {
  pageProps: {},
  Component: () => {},

};

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape(PropTypes.any),
};

export default MyApp;
