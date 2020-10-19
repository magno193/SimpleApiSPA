import React, { useState } from 'react'
import { IBooks } from '../../layout/models/books';
import DetailsData from '../DetailsData';
import FormData from '../FormData';
import ListData from '../ListData';
import { Container } from './styles';

interface IProps {
  books: IBooks[];
  setBooks: (books: IBooks[]) => void;
  openForm: boolean;
  setOpenForm: (value: boolean) => void;
}

const Dashboard: React.FC<IProps> = ({ books, setBooks, openForm, setOpenForm }) => {
  const [book, setBook] = useState<IBooks | null>(null);
  const [editBook, setEditBook] = useState<IBooks | null>(null);
  const passBookData = (id: string) => {
    const bookResult = books.find(book => book.id === id);
    setBook(bookResult!);
    setOpenForm(false);
  }

  return (
    <Container>
      <ListData books={books} passBookData={passBookData} setBook={setBook} />
      {(book && !openForm) && <DetailsData book={book} />}
      {openForm && <FormData key={0} books={books} setBooks={setBooks} setOpenForm={setOpenForm} />}
    </Container>
  );
};

export default Dashboard;
