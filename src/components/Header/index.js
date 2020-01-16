/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FiSearch, FiLogOut, FiArrowLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';

import { Container } from './styles';

import logoIoasys from '~/assets/logo-ioasys-white.png';

import { singOut } from '~/store/modules/auth/actions';

import history from '~/services/history';

export default function Header({ filter, setFilter, reversable }) {
  const [showInput, setShowInput] = useState(false);

  const inputRef = useRef();

  const dispatch = useDispatch();

  function handleUnfocusInput(e) {
    if (e.target.value.split('').length === 0) {
      setShowInput(false);
    }
  }

  function handleSignOut() {
    dispatch(singOut());
  }

  function handleClickIcon() {
    if (!showInput && inputRef.current) {
      inputRef.current.focus();
    }
    setShowInput(!showInput);
  }

  return (
    <Container showInput={showInput}>
      <div className="header-container">
        <FiLogOut size={25} color="#fff" onClick={handleSignOut} />

        <img src={logoIoasys} alt="Ioasys" />

        {reversable ? (
          <FiArrowLeft
            size={25}
            color="#fff"
            onClick={() => history.push('/enterprises')}
          />
        ) : (
          <FiSearch
            size={25}
            color="#fff"
            onClick={handleClickIcon}
            data-testid="search-icon"
          />
        )}

        <input
          type="text"
          onBlur={handleUnfocusInput}
          placeholder="Pesquisar"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          ref={inputRef}
          data-testid="search-input"
        />
      </div>
    </Container>
  );
}

Header.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  reversable: PropTypes.bool,
};

Header.defaultProps = {
  filter: '',
  setFilter: () => {},
  reversable: false,
};
