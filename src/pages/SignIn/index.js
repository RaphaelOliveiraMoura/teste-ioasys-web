import React from 'react';
import { FiUnlock, FiMail } from 'react-icons/fi';

import Input from '~/components/Input';
import { Container } from './styles';

import logoIoasys from '~/assets/logo-ioasys.png';

export default function SignIn() {
  return (
    <Container>
      <div className="card">
        <img src={logoIoasys} alt="Ioasys" />
        <h1>BEM VINDO AO EMPRESAS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        </p>
        <form>
          <Input
            name="email"
            placeholder="E-mail"
            icon={<FiMail size={20} color="#383743" />}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={<FiUnlock size={20} color="#383743" />}
          />
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </Container>
  );
}
