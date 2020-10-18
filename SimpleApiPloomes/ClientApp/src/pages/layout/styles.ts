import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 56px 1fr;
  background-color: #e9ecf2;
  font-family: 'Roboto', sans-serif;
  font-style: 14px;

  > nav {
    padding: 0 30px;
    font-style: italic;
    font-size: 18px;
  }

  section{
    padding: 20px 30px 20px 30px;
  }
`;
