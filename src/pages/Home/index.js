import React from 'react';
import { enterprises } from './list.example.json';

import { Container } from './styles';

import logoEnterprise from '~/assets/logo-enterprise.png';

export default function Home() {
  return (
    <Container>
      {enterprises.map(enterprise => (
        <div className="card" key={enterprise.id}>
          <div className="logo">
            <img src={logoEnterprise} alt={enterprise.enterprise_name} />
          </div>
          <div className="description">
            <h1>{enterprise.enterprise_name}</h1>
            <span>{enterprise.enterprise_type.enterprise_type_name}</span>
            <p>{enterprise.country}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}
