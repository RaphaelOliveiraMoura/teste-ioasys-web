import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import api from '~/services/api';

import EnterpriseList from '~/pages/EnterpriseList';

const apiMock = new MockAdapter(api);

jest.mock('react-redux');

describe('EnterpriseList page', () => {
  it('should be able list enterprises', async () => {
    const responseBody = {
      enterprises: Array(10)
        .fill(0)
        .map((_, index) => ({
          id: index,
          enterprise_name: 'enterprise_name.example',
          country: 'country.example',
          enterprise_type: {
            id: 1,
            enterprise_type_name: 'enterprise_type_name.example',
          },
        })),
    };

    apiMock.onGet('/enterprises').reply(200, responseBody);

    const { getAllByTestId } = render(<EnterpriseList />);

    await waitForDomChange();

    const cards = getAllByTestId('enterprise-card');

    expect(cards.length).toBe(responseBody.enterprises.length);
  });
});
