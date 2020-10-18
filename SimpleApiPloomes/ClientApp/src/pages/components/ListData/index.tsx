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
  passBookData: (id: string) => void;
  setBook: (book: IBooks | null) => void;
}

const ListData: React.FC<IProps> = ({ books, passBookData }) => {

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
          <button onClick={() => passBookData(book.id)}>Ver</button>
        </Item>
      ))}
    </Container>
  );
};

export default ListData;
