import styled from 'styled-components';

export const Container = styled.nav`
  display: grid;
  grid-template-columns: 140px 1fr;
  background-color: #93a4c4;
  color: #e9ecf2;

  div:first-child {
    display: flex;
    box-shadow: 3px 0 4px -3px #e9ecf2;

    svg, span {
      margin: auto 0;
    }
    span {
      margin-left: 10px;
    }
  }

  div:last-child{
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
      flex-basis: 120px;
      padding: 10px;
      border: transparent;
      border-radius: 4px;
      background-color: #68ad6b;
      color: #e9ecf2;
      cursor: pointer;
      box-shadow: 1px 1px 2px 0px rgba(50, 50, 50, 0.41);
      transition: .2s;

      &:hover{
        background-color: #4caf50;
        color: #fff;
      }
    }
  }
`;
