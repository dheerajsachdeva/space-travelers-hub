import React from 'react';
import { useSelector } from 'react-redux';
import './styles/JoinedMissions.css';

const JoinedMissions = () => {
  const joinedMissions = useSelector((state) => {
    const missions = state.mission.missions;
    const joinMission = state.mission.joinMission;
    return missions.filter(
      (mission) => joinMission[mission.mission_id] === true
    );
  });

  return (
    <div className="missions">
      <h2>My Missions</h2>
      <ul className="joined-missions-list">
        {joinedMissions.map((mission) => (
          <li className="list-item" key={mission.mission_id}>
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinedMissions;
