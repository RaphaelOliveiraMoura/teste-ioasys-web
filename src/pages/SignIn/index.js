import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiUnlock, FiMail } from 'react-icons/fi';

import Input from '~/components/Input';
import Loader from '~/components/Loader';

import { Container } from './styles';

import logoIoasys from '~/assets/logo-ioasys-pink.png';

import { singInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch(singInRequest(email, password));
  }

  return (
    <>
      <Container>
        <div className="card">
          <img src={logoIoasys} alt="Ioasys" />
          <h1>BEM VINDO AO EMPRESAS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="E-mail"
              error="digite um email válido"
              icon={<FiMail size={20} color="#383743" />}
              required
            />
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Senha"
              error="digite uma senha válida"
              icon={<FiUnlock size={20} color="#383743" />}
              required
            />
            <button type="submit">ENTRAR</button>
          </form>
        </div>
      </Container>
      <Loader loading={loading} />
    </>
  );
}
