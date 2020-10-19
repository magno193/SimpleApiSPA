import React from 'react'
import { FiBook } from 'react-icons/fi';
import { Container } from './styles';

interface IProps {
  setOpenForm: (value: boolean) => void;
}

const NavBar: React.FC<IProps> = ({ setOpenForm }) => {
  return (
    <Container>
      <div>
        <FiBook size={30} />
        <span>Biblioteca</span>
      </div>
      <div>
        <button onClick={() => setOpenForm(true)}>Adicionar</button>
      </div>
    </Container>
  );
};

export default NavBar;
