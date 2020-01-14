import styled, { css } from 'styled-components';

export const Container = styled.div`
  .input-container {
    position: relative;

    svg {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    input {
      width: 100%;
      padding: 16px 8px 8px 32px;
      border-bottom: 1px solid #888;
    }

    label {
      position: absolute;
      left: 0;
      left: 34px;
      top: 50%;
      transform: translateY(-50%);
      color: #383743;
      transition: all 0.4s;

      ${props =>
        props.hasText
          ? css`
              top: 0;
              left: 0px;
              color: #737934;
            `
          : null}
    }

    input:focus + label {
      top: 0;
      left: 0px;
      color: #737934;
    }
  }
`;

export const ErrorSpan = styled.span`
  display: block;
  color: #ef5781;
  font-size: 12px;
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: all 0.4s;
  transform: ${props =>
    props.visible ? 'translateX(0px)' : 'translateX(-20px)'};
`;
