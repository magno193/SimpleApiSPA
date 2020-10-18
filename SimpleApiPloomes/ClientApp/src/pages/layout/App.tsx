import React, { useEffect, useState } from 'react';
import { IBooks } from '../../models/books';
import { api } from '../../services/app';
import Dashboard from '../components/Dashboard';
import NavBar from '../components/NavBar';
import { Container } from './styles';

const App: React.FC = () => {
  const [books, setBooks] = useState<IBooks[]>([]);

  useEffect(() => {
    api.get<IBooks[]>('/api/books').then(
      response => setBooks(response.data)
    );
  }, [])
  return (
    <Container>
      <NavBar />
      <Dashboard books={books} />
    </Container>
  );
};

export default App
