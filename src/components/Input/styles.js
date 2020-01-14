import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 8px 8px 8px 32px;
    border-bottom: 1px solid #888;
  }

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  label {
    position: absolute;
    left: 0;
    left: 34px;
    top: 50%;
    transform: translateY(-50%);
    color: #383743;
    transition: all 0.4s;
  }

  input:focus + label,
  input:valid + label {
    top: 0;
    color: #737934;
  }
`;
