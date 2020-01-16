import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Loader from '~/components/Loader';

describe('Loader component', () => {
  it('should hidden loader when change loading parameter', async () => {
    const tree = renderer.create(<Loader loading />);

    expect(tree.toJSON()).toHaveStyleRule('opacity', '1');

    tree.update(<Loader loading={false} />);

    expect(tree.toJSON()).toHaveStyleRule('opacity', '0');
  });
});
