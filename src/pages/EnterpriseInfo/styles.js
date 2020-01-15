import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 250px;
    transition: all 0.4s;
    object-fit: cover;
    margin-top: 26px;
    opacity: ${props => (props.isLoading ? '0' : '1')};
  }

  h1 {
    margin-top: 16px;
  }

  p {
    max-width: 80%;
    text-align: justify;
    color: #444;
    margin-top: 4px;
  }

  span {
    width: 80%;
    text-align: right;
  }
`;
