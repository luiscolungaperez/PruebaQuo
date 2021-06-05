import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import '../styles/components/FavoriteItem.css';

const FavoriteItem = ({ city, temp, deleteAction }) => {
  return (
    <section className='main'>
      <div>
        <h3>{city}</h3>
        <p>{temp}°</p>
      </div>
      <Button variant='outlined' color='secondary' onClick={() => deleteAction(city)}>Delete</Button>
    </section>
  );
}

export default FavoriteItem;

FavoriteItem.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  deleteAction: PropTypes.func.isRequired
}
