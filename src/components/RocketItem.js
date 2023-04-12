import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reservation, reservationCancel } from '../redux/rockets/rocketsSlice';



const RocketItem = ( {rocket} ) => {
   const dispatch = useDispatch  ();
    return (
    <div className='flex rocketsContent'><li className='flex'>
    <div className='rocket-image'><img alt = "image" src = {rocket.flickr_images}></img></div>
<div className='flex rocketsText'>
<div className='heading'>{rocket.name} </div>
<p>{rocket.reserved ? <button className='reserved'>Reserved</button> : ""}{rocket.description}</p>
    {!rocket.reserved && <button onClick = {()=> dispatch(reservation(rocket.id))} className='btn reservation-btn'>Reserve Rocket</button>
}
    {rocket.reserved && (
    <button onClick = {()=> dispatch(reservationCancel(rocket.id))} className='btn reservationCancel-btn'>Cancel Reservation</button>
)}
    
    </div>
    
  </li></div>
  )
}

export default RocketItem