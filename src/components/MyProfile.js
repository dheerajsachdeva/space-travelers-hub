import React from 'react';
import JoinedMissions from './JoinedMissions';
import ReservedRockets from './ReserverdRockets';
import './styles/MyProfile.css';

const MyProfile = () => (
  <div className="main-container">
    <JoinedMissions />
    <ReservedRockets />
  </div>
);

export default MyProfile;
