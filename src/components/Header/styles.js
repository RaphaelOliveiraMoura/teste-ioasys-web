import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background: #ef5781;
    position: relative;
    padding: 16px;

    img {
      width: 200px;
    }

    svg {
      cursor: pointer;
    }

    svg:first-of-type {
      position: absolute;
      left: 16px;
      transition: all 0.6s;

      &:hover {
        transform: rotate(180deg);
      }
    }

    svg:last-of-type {
      position: absolute;
      right: 16px;
      z-index: 10;
      transition: all 0.4s;
      transform: ${props =>
        props.showInput ? 'rotate(90deg)' : 'rotate(0deg)'};
    }

    input {
      position: absolute;
      right: 16px;
      z-index: 5;
      background: #fff0;
      border-bottom: 1px solid #fff;
      transition: all 0.4s;
      color: #fff;
      width: ${props => (props.showInput ? '300px' : '0px')};
      opacity: ${props => (props.showInput ? '1' : '0')};
      padding-right: ${props => (props.showInput ? '36px' : '0px')};
      padding-left: 10px;
      padding-top: 20px;
      padding-bottom: 4px;

      &::placeholder {
        color: #dddd;
      }
    }
  }

  @media (max-width: 850px) {
    & {
      .header-container {
        justify-content: start;

        img {
          width: 120px;
          float: left;
          display: none;
        }

        input {
          width: ${props => (props.showInput ? '250px' : '0px')};
        }
      }
    }
  }
`;
