import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsAsync } from '../redux/missions/missionsSlice';
import MissionItem from './MissionItem';
import './styles/MissionTable.css';

const MissionsTable = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.mission);

  useEffect(() => {
    dispatch(getMissionsAsync());
  }, [dispatch]);

  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <th className="small-column">Mission</th>
            <th className="big-column">Description</th>
            <th className="small-column">Status</th>
            <th className="small-column"></th>
          </tr>
          {missions.map((mission) => (
            <MissionItem
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MissionsTable;
