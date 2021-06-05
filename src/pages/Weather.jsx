import React from 'react';
import WeatherList from '../components/WeatherList';
import Container from '@material-ui/core/Container';
import '../styles/pages/Weather.css';

const Weather = () => {

  return (
    <Container maxWidth='md'>
      <h2 className='section__title'>Climas en México</h2>
      <section className='position__section'>
        <WeatherList />
      </section>
    </Container>
  );
}

export default Weather;
