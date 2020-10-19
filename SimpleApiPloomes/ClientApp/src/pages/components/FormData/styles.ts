import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 15px;
    background-color: #eee;
    box-shadow: 1px 1px 2px 0px rgba(50,50,50,0.41);
    border-radius: 8px;

    input, textarea {
      padding: 10px;
      background-color: #fff;
      border: 0;
      box-shadow: 1px 1px 2px 0px rgba(50,50,50,0.41);
      border-radius: 4px;
      margin-bottom: 10px;
    }

    textarea {
      resize: vertical;
    }

    div {
      margin-top: 10px;
      align-self: flex-start !important;
    }

    button:first-child {
      background-color: #68ad6b;
      color: #e9ecf2;

      &:hover {
        background-color: #4caf50;
        color: #fff;
      }
    }
  }
`;
