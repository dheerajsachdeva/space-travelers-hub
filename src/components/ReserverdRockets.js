import React from 'react';
import { useSelector } from 'react-redux';
import './styles/JoinedMissions.css';

const ReservedRockets = () => {
  const { rockets } = useSelector((store) => store.rockets);

  const reserved = rockets.map((rocket) => {
    if (rocket.reserved === true)
      return (
        <li className="list-item" key={rocket.id}>
          {rocket.name}
        </li>
      );
  });
  return (
    <div className="missions">
      <h2>My Rockets</h2>
      <ul className="joined-missions-list">{reserved}</ul>
    </div>
  );
};

export default ReservedRockets;
