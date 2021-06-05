import React, { useState } from 'react';
import { useSnackbar } from '../hooks/useSnackbar';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Notification from './Notification';
import '../styles/components/WeatherDetail.css';

const WeatherDetail = ({ units, city, addFavorites }) => {
  const [ message, setMessage ] = useState({ message: '', type: '' });
  const { temp, temp_max, temp_min } = units;
  const [ open, handleOpen, handleClose ] = useSnackbar();

  const addWeather = () => {
    handleClose();
    const info = addFavorites(city, temp);
    if (info) {
      setMessage({
        message: 'Favorito ya existente',
        type: 'error'
      });
    } else {
      setMessage({
        message: 'Agregado correctamente',
        type: 'success'
      });
    }
    handleOpen();
  }
  
  return (
    <>
      <Card className='card' variant='outlined'>
        <CardContent className='body__card'>
          <Typography
            variant='h5'
            component='h2'
            className='title'
          >{city}</Typography>
          <Typography variant='body2' component='p'>
            Temperatura: {temp} C. <br/>
            Minima: {temp_min} C. <br/>
            Maxima: {temp_max} C.
          </Typography>
        </CardContent>
        <CardActions className='footer__content'>
          <Button 
            size='small'
            variant='outlined'
            onClick={addWeather}
            className='footer__favorite'
          ><AddCircleOutlineIcon className='footer__favorite--icon' />Añadir a favoritos</Button>
        </CardActions>
      </Card>
      <Notification open={open} handleClose={handleClose} data={message} />
    </>
  );
};

export default WeatherDetail;

WeatherDetail.propTypes = {
  units: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  addFavorites: PropTypes.func.isRequired
}
