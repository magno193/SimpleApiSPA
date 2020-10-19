import React, { ChangeEvent, useState } from 'react'
import { v4 as uuid } from 'uuid';
import { IBooks } from '../../../models/books';
import { api } from '../../../services/api';
import { ButtonGroup } from '../DetailsData/styles';
import { Container } from './styles';

interface IProps {
  setOpenForm: (value: boolean) => void;
  books: IBooks[];
  setBooks: (books: IBooks[]) => void;
}

const FormData: React.FC<IProps> = ({ setOpenForm, books, setBooks }) => {
  const initializeForm = (): IBooks => {
    return {
      id: '',
      title: '',
      description: '',
      category: '',
      author: '',
      publisher: '',
    };
  };
  const [createBook, setCreateBook] = useState<IBooks>(initializeForm);

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBook = {
      ...createBook,
      id: uuid(),
    }

    setBooks([...books, newBook])
    try {
      await api.post<IBooks>('/api/books', newBook);
    } catch (error) {
      console.log(error);
    }

    setCreateBook(initializeForm);
    setOpenForm(false);
  }

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setCreateBook({ ...createBook, [name]: value });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} >
        <input
          name="title"
          type="text"
          required
          placeholder="Título"
          value={createBook.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          rows={3}
          required
          cols={50}
          placeholder="Descrição"
          value={createBook.description}
          onChange={handleInputChange}
        />
        <input
          name="publisher"
          type="text"
          required
          placeholder="Editora"
          value={createBook.publisher}
          onChange={handleInputChange}
        />
        <input
          name="category"
          type="text"
          required
          placeholder="Categoria"
          value={createBook.category}
          onChange={handleInputChange}
        />
        <input
          name="author"
          type="text"
          required
          placeholder="Autor/Autora"
          value={createBook.author}
          onChange={handleInputChange}
        />
        <ButtonGroup>
          <button type="submit">Criar</button>
          <button onClick={() => setOpenForm(false)}>Cancelar</button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default FormData;
