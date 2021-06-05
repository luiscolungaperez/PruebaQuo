import React from 'react';
import FavoriteList from '../components/FavoriteList';
import Container from '@material-ui/core/Container';
import '../styles/pages/Favorites.css';

const Favorites = () => {
  return (
    <Container maxWidth='md'>
      <h2 className='section__title'>Mis climas favoritos</h2>
      <section className='position__section'>
        <FavoriteList />    
      </section>
    </Container>
  );
}

export default Favorites;