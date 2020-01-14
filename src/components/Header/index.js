/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FiSearch, FiLogOut } from 'react-icons/fi';

import { Container } from './styles';

import logoIoasys from '~/assets/logo-ioasys-white.png';

export default function Header() {
  const [showInput, setShowInput] = useState(false);

  function handleUnfocusInput(e) {
    if (e.target.value.split('').length === 0) {
      setShowInput(false);
    }
  }

  return (
    <Container showInput={showInput}>
      <div className="header-container">
        <FiLogOut size={25} color="#fff" />
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
        />
      </div>
    </Container>
  );
}
