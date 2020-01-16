import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { MdCheck } from 'react-icons/md';

import { Container, ErrorSpan } from './styles';

export default function InputComponent({
  className,
  icon,
  placeholder,
  name,
  onChange,
  error,
  ...props
}) {
  const ref = useRef();

  const [showError, setShowError] = useState(false);
  const [hasText, setHasText] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('invalid', e => {
        e.preventDefault();
        setShowError(true);
      });
    }
  }, []);

  function handleChange(e) {
    setShowError(!e.target.validity.valid);
    setHasText(e.target.value.split('').length > 0);
    onChange(e);
  }

  return (
    <>
      <Container className={className} hasText={hasText}>
        <div className="input-container">
          {icon}
          <input
            id={name}
            name={name}
            ref={ref}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            {...props}
          />
          {placeholder && <label htmlFor={name}>{placeholder}</label>}
        </div>
        <ErrorSpan visible={showError}>{error}</ErrorSpan>
      </Container>
    </>
  );
}

InputComponent.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

InputComponent.defaultProps = {
  className: '',
  icon: <MdCheck size={20} />,
  placeholder: '',
  error: 'Campo é obrigatório',
  onChange: () => {},
};
