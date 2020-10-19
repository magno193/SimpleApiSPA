import React from 'react'
import { IBooks } from '../../layout/models/books';
import { FiBookOpen } from 'react-icons/fi';
import {
  Container,
  Item,
  Image,
  Title,
  Tags,
  Content,
  ButtonGroup,
} from './styles';

interface IProps {
  book: IBooks;
}

const DetailsData: React.FC<IProps> = ({ book }) => {
  return (
    <Container>
      <Item>
        {/* {book.imageUrl ?
          <Image src={`${book.imageUrl}`} /> :
          <FiBookOpen size={80} />
        } */}
        <FiBookOpen size={140} style={{ alignSelf: "center" }} />
        <Title>
          <strong>{book.title}</strong>
          <span>{book.author}</span>
        </Title>
        <Tags>
          <span>{book.category}</span>
          <span>{book.publisher}</span>
        </Tags>
        <Content>
          {book.description}
        </Content>
        {/* <ButtonGroup>
          <button onClick={() => { }}>Editar</button>
          <button>Cancelar</button>
        </ButtonGroup> */}
      </Item>
    </Container>
  );
};

export default DetailsData;
