import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Header from '~/components/Header';
import Loader from '~/components/Loader';
import { Container } from './styles';

import logoEnterprise from '~/assets/logo-enterprise.png';

import api from '~/services/api';

import { singOut } from '~/store/modules/auth/actions';

export default function EnterpriseInfo({ match }) {
  const { id } = match.params;

  const [enterprise, setEnterprise] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadEnterprise() {
      try {
        setLoading(true);
        const response = await api.get(`/enterprises/${id}`);
        setEnterprise(response.data.enterprise);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          dispatch(singOut());
          return toast.warn('Sua sessão expirou, faça login novamente');
        }

        toast.error('Erro ao buscar dados da empresa');
      } finally {
        setLoading(false);
      }
    }

    loadEnterprise();
  }, [dispatch, id]);

  return (
    <>
      <Header reversable />
      <Container isLoading={loading}>
        <img src={logoEnterprise} alt={enterprise.enterprise_name} />
        <h1>{enterprise.enterprise_name}</h1>
        <p>{enterprise.description}</p>
        {enterprise.city && enterprise.country && (
          <span>{`${enterprise.city}, ${enterprise.country}`}</span>
        )}
      </Container>
      <Loader loading={loading} />
    </>
  );
}

EnterpriseInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

EnterpriseInfo.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
