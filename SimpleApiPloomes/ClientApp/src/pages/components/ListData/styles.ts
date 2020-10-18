import styled from 'styled-components';

export const Container = styled.main`
`;

export const Item = styled.div`
  display: grid;
  padding: 5px;
  grid-template-columns: 60px 2fr 1fr;
  grid-gap: 5px;
  box-shadow: 1px 1px 2px 0px rgba(50,50,50,0.41);
  background-color: #EEE;

  button {
    max-width: 120px;
    min-width: 60px;
    margin: auto 10px auto auto;

    font-family: 'Roboto Slab',serif;
    font-weight: 500;
    padding: 10px;
    border: transparent;
    border-radius: 4px;
    background-color: #6581b5;
    color: #e9ecf2;
    cursor: pointer;
    box-shadow: 1px 1px 2px 0px rgba(50,50,50,0.41);
    transition: .2s;

    &:hover{
      background-color: #486396;
      color: #fff;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: auto;
  }
`;

export const Content = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  strong {
    font-family: 'Roboto Slab',serif;
    font-weight: 700;
  }

  > span {
    font-size: 12px;
    color: #fff;
    background-color: #666
  }

  p {
    margin-top: 10px;
    color: #68ad6b;
    font-weight: 500;
    align-self: flex-end;

    span {
      color: #333;
    }
  }
`;

