import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reservation, reservationCancel } from '../redux/rockets/rocketsSlice';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex rocketsContent">
      <li className="wraping-div">
        <div className="rocket-image">
          <img
            alt={rocket.name}
            src={rocket.flickr_images}
            className="rocket-image"
          />
        </div>
        <div className="flex rocketsText">
          <p className="heading">
            {rocket.name}
            {' '}
          </p>
          <p>
            {rocket.reserved ? (
              <button type="button" className="reserved">
                Reserved
              </button>
            ) : (
              ''
            )}
            {rocket.description}
          </p>
          {!rocket.reserved && (
            <button
              type="button"
              onClick={() => dispatch(reservation(rocket.id))}
              className="btn reservation-btn"
            >
              Reserve Rocket
            </button>
          )}
          {rocket.reserved && (
            <button
              type="button"
              onClick={() => dispatch(reservationCancel(rocket.id))}
              className="btn reservationCancel-btn"
            >
              Cancel Reservation
            </button>
          )}
        </div>
      </li>
    </div>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};
