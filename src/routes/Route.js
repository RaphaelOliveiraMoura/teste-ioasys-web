import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

function RouteWrapper({ component: Component, isPrivate = false, ...rest }) {
  const { signed } = { signed: false };

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      {signed && <Header />}
      <Route render={props => <Component {...props} />} {...rest} />
    </>
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
