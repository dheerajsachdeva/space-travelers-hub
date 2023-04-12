import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import RocketItem from './RocketItem';

export default function Rockets() {
  const {
    rockets, isLoading, isError, fetched,
  } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchRockets());
    }
  }, [dispatch, fetched]);

  if (isLoading) {
    return (
      <h3>Loading...</h3>
    );
  } if (isError) {
    return (
      <h3>{isError}</h3>
    );
  }
  return (
    <div data-testid="rocketid">
      {rockets.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} reserved={rocket.reserved} />
      ))}
    </div>
  );
}
