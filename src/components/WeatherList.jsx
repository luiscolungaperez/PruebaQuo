import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APIKEY } from '../utils/vars';
import WeatherDetail from './WeatherDetail';
import '../styles/components/WeatherList.css';

const WeatherList = () => {
  const [cities, setCities] = useState({});

  useEffect(() => {
    const getWeathers = async () => {
      try{ 
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=19.4303&lon=-99.1379&zoom=10&cnt=20&appid=${APIKEY}&units=metric`);
        setCities(data);
      } catch(error) {
        console.error(error);
      }
    }
    getWeathers();
  }, []);

  const addFavorites = (city, temp) => {
    let getItems = [];
    if(localStorage.getItem('favorites')) {
      getItems = JSON.parse(localStorage.getItem('favorites'));
    }

    let isRepited = getItems.find(item => item.city === city);

    if(isRepited) {
      return 'Clima repetido';
    }

    getItems = [
      ...getItems,
      { city, temp }
    ];

    localStorage.setItem('favorites', JSON.stringify(getItems));
  }

  return (
    cities.length === 0 ?
      (
        <section className='nulo'>
          <h1>No se han cargado las ciudades</h1>
        </section>
      ) : 
      (
        <section className='weatherList'>
          {
            cities.list && 
            cities.list.map(({ id, name, main }) => (
              <WeatherDetail
                key={id}
                city={name}
                units={main} 
                addFavorites={addFavorites}
              />
              ))
            }
        </section>
      )
  );
}

export default WeatherList;