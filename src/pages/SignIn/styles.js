import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ef5781;

  .card {
    background: #fff;
    border: 1px solid #ddd;
    padding: 26px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 46px;
      text-align: center;
    }

    p {
      text-align: center;
      color: #444;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 32px;
      width: 100%;

      & > div {
        margin-bottom: 18px;
      }

      button {
        background: #ef5781;
        color: #fff;
        font-weight: bold;
        height: 46px;
        border-radius: 2px;
        margin-top: 16px;
        transition: all 0.2s;

        &:hover {
          background: ${darken(0.03, '#ef5781')};
        }
      }
    }
  }

  @media (max-width: 450px) {
    & {
      .card {
        border-radius: 0px;
      }
    }
  }
`;
