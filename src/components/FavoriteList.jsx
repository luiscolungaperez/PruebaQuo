import React, { useState, useEffect, useMemo } from 'react';
import { useSnackbar } from '../hooks/useSnackbar';
import FavoriteItem from './FavoriteItem';
import TextField from '@material-ui/core/TextField';
import Notification from './Notification';
import '../styles/components/FavoriteList.css';

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState('');
  const [ open, handleOpen, handleClose ] = useSnackbar();

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')))
  }, []);

  const cities = useMemo(() => {
    if(search === '') return favorites;

    return favorites.filter((city) => {
      return (
        city.city.toLowerCase().includes(search.toLowerCase())
      );
    });

  }, [search, favorites]);

  const deleteFavorite = (city) => {
    handleClose();

    let getItems = JSON.parse(localStorage.getItem('favorites'));
    getItems = getItems.filter(item => item.city !== city);

    localStorage.setItem('favorites', JSON.stringify(getItems));
    setFavorites(getItems);

    handleOpen();
  }

  const handlechange = (event) => {
    setSearch(event.target.value);
  }

  return (
    favorites.length === 0 ?
      (
        <section className='nulo'>
          <h2>No hay favoritos</h2>
        </section>
      ) :
      (
        <>
          <section className='search'>
            <TextField
              size='medium'
              id="search"
              label="Buscar"
              onChange={handlechange}
            />
          </section>
          <section className='favoriteList'>
            {
              cities &&
                cities.map(({ city, temp }) => (
                  <FavoriteItem key={city} city={city} temp={temp} deleteAction={deleteFavorite} />
                ))
            }
          </section>
          <Notification open={open} handleClose={handleClose} />
        </>
      )
  );
}

export default FavoriteList;
