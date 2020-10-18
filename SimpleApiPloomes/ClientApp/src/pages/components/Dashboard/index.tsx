import React, { useState } from 'react'
import { IBooks } from '../../layout/models/books';
import DetailsData from '../DetailsData';
import ListData from '../ListData';
import { Container } from './styles';

interface IProps {
  books: IBooks[];
}

const Dashboard: React.FC<IProps> = ({ books }) => {
  const [book, setBook] = useState<IBooks | null>(null);
  const passBookData = (id: string) => {
    const bookResult = books.find(book => book.id === id);
    setBook(bookResult!);
  }
  return (
    <Container>
      <ListData books={books} passBookData={passBookData} setBook={setBook} />
      {book && <DetailsData book={book} />}
    </Container>
  );
};

export default Dashboard;
