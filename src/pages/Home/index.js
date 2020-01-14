import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Header from '~/components/Header';
import Loader from '~/components/Loader';

import { Container } from './styles';

import logoEnterprise from '~/assets/logo-enterprise.png';

import api from '~/services/api';

export default function Home() {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function loadEnterprises() {
      try {
        setLoading(true);
        const response = await api.get('/enterprises', {
          params: { name: filter },
        });
        setEnterprises(response.data.enterprises);
      } catch (error) {
        toast.error('Erro ao listar empresas');
      } finally {
        setLoading(false);
      }
    }

    loadEnterprises();
  }, [filter]);

  return (
    <>
      <Header filter={filter} setFilter={setFilter} />
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
      <Loader loading={loading} />
    </>
  );
}
