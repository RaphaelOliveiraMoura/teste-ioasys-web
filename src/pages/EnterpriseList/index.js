/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FiRotateCcw } from 'react-icons/fi';

import Header from '~/components/Header';
import Loader from '~/components/Loader';

import { Container } from './styles';

import logoEnterprise from '~/assets/logo-enterprise.png';

import { singOut } from '~/store/modules/auth/actions';

import api from '~/services/api';
import history from '~/services/history';

export default function EnterpriseList() {
  const [enterprises, setEnterprises] = useState([]);

  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const loadEnterprises = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/enterprises', {
        params: { name: filter },
      });
      setEnterprises(response.data.enterprises);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch(singOut());
        return toast.warn('Sua sessão expirou, faça login novamente');
      }

      toast.error('Erro ao listar empresas');
    } finally {
      setLoading(false);
    }
  }, [dispatch, filter]);

  useEffect(() => {
    loadEnterprises();
  }, [loadEnterprises]);

  return (
    <>
      <Header filter={filter} setFilter={setFilter} />
      <Container>
        {enterprises.length === 0 && !loading && (
          <div className="reload">
            <FiRotateCcw size={32} color="#333" onClick={loadEnterprises} />
          </div>
        )}
        {enterprises.map(enterprise => (
          <div
            className="card"
            key={enterprise.id}
            onClick={() => history.push(`enterprises/${enterprise.id}`)}
          >
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
