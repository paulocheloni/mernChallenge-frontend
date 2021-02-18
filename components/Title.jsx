import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Title({ children }) {
  return (
    <Typography>
      {children}
    </Typography>
  );
}

Title.defaultProps = {
  children: {},
};

Title.propTypes = {
  children: PropTypes.shape(PropTypes.any),

};

export default Title;
