import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 35;
  background: #222d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${props => (props.isLoading ? '1' : '0')};
  transform: ${props =>
    props.isLoading ? 'translateY(0px)' : 'translateY(-100vh)'};
  transition: all 0.2s;

  .loader {
    background: #fff;
    width: 200px;
    height: 200px;
    border-radius: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 180px;
      animation: rotation 2s infinite;

      @keyframes rotation {
        to {
          transform: rotate(0deg);
        }
        from {
          transform: rotate(360deg);
        }
      }
    }
  }

  h1 {
    font-size: 32px;
    color: #ddd;
  }
`;
