import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import iconIoasys from '~/assets/icon-ioasys.png';

export default function Loader({ loading }) {
  return (
    <Container isLoading={loading}>
      <div className="loader">
        <img src={iconIoasys} alt="Ioasys" />
      </div>
      <h1>Carregando...</h1>
    </Container>
  );
}

Loader.propTypes = {
  loading: PropTypes.bool,
};

Loader.defaultProps = {
  loading: false,
};
