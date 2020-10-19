import React, { useEffect, useState } from 'react';
import { IBooks } from '../../models/books';
import { api } from '../../services/api';
import Dashboard from '../components/Dashboard';
import NavBar from '../components/NavBar';
import { Container } from './styles';

const App: React.FC = () => {
  const [books, setBooks] = useState<IBooks[]>([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    api.get<IBooks[]>('/api/books').then(
      response => setBooks(response.data)
    );
  }, [])
  return (
    <Container>
      <NavBar setOpenForm={setOpenForm} />
      <Dashboard
        books={books}
        setBooks={setBooks}
        openForm={openForm}
        setOpenForm={setOpenForm}
      />
    </Container>
  );
};

export default App
