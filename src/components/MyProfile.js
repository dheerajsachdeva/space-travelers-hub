import React from 'react'
import { useSelector } from 'react-redux';



const MyProfile = () => {
    const {rockets} = useSelector((store) => store.rockets);

    const reserved  = rockets.map((rocket) => {
if (rocket.reserved === true)
return <li>{rocket.name}</li>
    })
    return (
    <div className='reserved-rockets'>
        <h2>My Rockets</h2>
        <div className='flex reserved-list'>{reserved}</div>

   </div>
    )
    }    

export default MyProfile;