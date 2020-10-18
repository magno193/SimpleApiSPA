import styled from 'styled-components';

export const Container = styled.aside`
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 15px;
  box-shadow: 1px 1px 2px 0px rgba(50,50,50,0.41);
  background-color: #eee;
`;

export const Title = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: 'Roboto Slab',serif;
  font-weight: 700;
  font-size: 20px;
  span {
    color: #68ad6b;
  }
`;

export const Image = styled.img`
`;

export const Tags = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    background-color: #222;
    border-radius: 8px;
    padding: 3px 6px;
    color: #fff;
  }
`;

export const Content = styled.div`
  margin: 20px 0;
  padding: 10px;
  color: #222;
  box-shadow:  0px 2px 2px 0px rgba(51,51,51,0.22),
   0px -2px 2px 0px rgba(51,51,51,0.22);
  border-radius: 8px;
`;

export const ButtonGroup = styled.div`
  align-self: flex-end;

  button {
    max-width: 120px;
    min-width: 60px;
    margin: auto 10px auto auto;
    font-family: 'Roboto Slab',serif;
    font-weight: 500;
    padding: 10px;
    border: transparent;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 1px 1px 2px 0px rgba(50,50,50,0.41);
    transition: .2s;
  }

  button:first-child {
    background-color: #deb25f;
    color: #e9ecf2;

    &:hover {
      background-color: #c2943c;
    color: #fff;
    }
  }

  button:last-child {
    background-color: #807e7c;
    color: #e9ecf2;

    &:hover {
      background-color: #666460;
    color: #fff;
    }
  }
`;
