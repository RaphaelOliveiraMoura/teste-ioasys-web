/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiSearch, FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';

import { Container } from './styles';

import logoIoasys from '~/assets/logo-ioasys-white.png';

import { singOut } from '~/store/modules/auth/actions';

export default function Header({ filter, setFilter }) {
  const [showInput, setShowInput] = useState(false);

  const dispatch = useDispatch();

  function handleUnfocusInput(e) {
    if (e.target.value.split('').length === 0) {
      setShowInput(false);
    }
  }

  function handleSignOut() {
    dispatch(singOut());
  }

  return (
    <Container showInput={showInput}>
      <div className="header-container">
        <FiLogOut size={25} color="#fff" onClick={handleSignOut} />
        <img src={logoIoasys} alt="Ioasys" />
        <FiSearch
          size={25}
          color="#fff"
          onClick={() => setShowInput(!showInput)}
        />
        <input
          type="text"
          onBlur={handleUnfocusInput}
          placeholder="Pesquisar"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>
    </Container>
  );
}

Header.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

Header.defaultProps = {
  filter: '',
  setFilter: () => {},
};
