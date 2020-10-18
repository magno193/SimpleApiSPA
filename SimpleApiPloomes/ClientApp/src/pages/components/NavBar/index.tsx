import React from 'react'
import { FiBook } from 'react-icons/fi';
import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <div>
        <FiBook size={30} />
        <span>Biblioteca</span>
      </div>
      <div>
        <button>Adicionar</button>
      </div>
    </Container>
  );
};

export default NavBar;
