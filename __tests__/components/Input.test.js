import React from 'react';
import renderer, { act } from 'react-test-renderer';
import 'jest-styled-components';

import Input from '~/components/Input';

describe('Input component', () => {
  it('should change label position when focus in input', async () => {
    const tree = renderer.create(<Input name="test" />);

    expect(tree.toJSON()).toHaveStyleRule('top', '50%', {
      modifier: '.input-container label',
    });

    act(() => {
      tree.root.findByType('input').props.onChange({
        target: {
          value: 'teste.example',
          validity: { valid: true },
        },
      });
    });

    expect(tree.toJSON()).toHaveStyleRule('top', '0', {
      modifier: '.input-container label',
    });
  });
});
