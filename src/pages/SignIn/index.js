import React, { useState } from 'react';
import { FiUnlock, FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Input from '~/components/Input';
import Loader from '~/components/Loader';

import { Container } from './styles';

import logoIoasys from '~/assets/logo-ioasys-pink.png';

import api from '~/services/api';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post('/users/auth/sign_in', {
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      toast.error('Erro na autenticação, verifique suas credenciais');
    } finally {
      setLoading(false);
    }
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
