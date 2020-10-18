import React from 'react'
import { IBooks } from '../../layout/models/books';
import ListData from '../ListData';
import { Container } from './styles';

interface IProps {
  books: IBooks[];
}

const Dashboard: React.FC<IProps> = ({ books }) => {
  return (
    <Container>
      <ListData books={books} />
    </Container>
  );
};

export default Dashboard;
