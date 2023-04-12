import React from 'react';
import JoinedMissions from './JoinedMissions';
import ReservedRockets from './ReserverdRockets';

const MyProfile = () => {
  return (
    <div className="main-container">
      <JoinedMissions />
      <ReservedRockets />
    </div>
  );
};

export default MyProfile;
