import styled from 'styled-components';

export const Container = styled.div`
  padding: 26px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .card {
    background: #fff;
    margin: 8px;
    padding: 26px;
    border-radius: 8px;
    display: flex;
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
      background: #eee;
    }

    .logo {
      max-height: 80px;
      max-width: 150px;
      overflow: hidden;
      cursor: pointer;
      border-radius: 4px;

      img {
        width: 100%;
        height: 100%;
        transition: all 0.4s;
        object-fit: cover;
      }

      &:hover img {
        transform: scale(1.1);
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 24px;

      h1 {
        font-size: 22px;
        color: #333;
      }

      span {
        color: #8d8c8c;
        font-size: 16px;
      }

      p {
        color: #8d8c8c;
        font-size: 12px;
      }
    }
  }

  .reload {
    width: 100%;
    display: flex;
    min-height: 300px;
    grid-column: 1 / 3;
    justify-content: center;
    align-items: center;

    svg {
      cursor: pointer;
      transition: all 0.4s;

      &:hover {
        transform: rotate(340deg);
      }
    }
  }

  @media (max-width: 900px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 520px) {
    & {
      .logo {
        display: none;
      }
    }
  }
`;
