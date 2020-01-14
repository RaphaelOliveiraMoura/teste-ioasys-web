import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck } from 'react-icons/md';

import { Container } from './styles';

export default function Input({
  className,
  icon,
  placeholder,
  name,
  ...props
}) {
  return (
    <Container className={className}>
      {icon}
      <input
        type="text"
        id={name}
        name={name}
        autoComplete="off"
        required
        {...props}
      />
      {placeholder && <label htmlFor={name}>{placeholder}</label>}
    </Container>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: '',
  icon: <MdCheck size={20} />,
  placeholder: '',
};
