import React from 'react';
import { useDispatch } from 'react-redux';
import renderer, { act } from 'react-test-renderer';
import 'jest-styled-components';

import Header from '~/components/Header';

import { singOut } from '~/store/modules/auth/actions';

jest.mock('react-redux');

describe('Header component', () => {
  it('should transform input opacity when click in search icon', async () => {
    const tree = renderer.create(<Header />);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    expect(tree.toJSON()).toHaveStyleRule('opacity', '0', {
      modifier: '.header-container input',
    });

    act(() => {
      tree.root.findAllByType('svg')[1].props.onClick();
    });

    expect(tree.toJSON()).toHaveStyleRule('opacity', '1', {
      modifier: '.header-container input',
    });
  });

  it('should sign out', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const tree = renderer.create(<Header />);

    act(() => {
      tree.root.findAllByType('svg')[0].props.onClick();
    });

    expect(dispatch).toHaveBeenCalledWith(singOut());
  });
});
