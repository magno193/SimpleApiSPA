import React from 'react'
import { IBooks } from '../../../models/books';
import {
  Container,
  Item,
  ImageContainer,
  Content
} from './styles';
import { FiBookOpen } from 'react-icons/fi';

interface IProps {
  books: IBooks[];
}

const ListData: React.FC<IProps> = ({ books }) => {
  return (
    <Container>
      {books.map(book => (
        <Item key={book.id}>
          <ImageContainer>
            <FiBookOpen size={40} />
          </ImageContainer>
          <Content>
            <strong>{book.title}</strong>
            <span>{book.category}</span>
            <p><span>R$ </span>{book.price}</p>
          </Content>
          <button>Ver</button>
        </Item>
      ))}
    </Container>
  );
};

export default ListData;
