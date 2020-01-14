import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebe9d7;

  .card {
    max-width: 450px;
    background: #fffd;
    border: 1px solid #ddd;
    padding: 26px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 46px;
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
        background: #57bbbc;
        color: #fff;
        font-weight: bold;
        height: 46px;
        border-radius: 2px;
        margin-top: 16px;
      }
    }
  }
`;
