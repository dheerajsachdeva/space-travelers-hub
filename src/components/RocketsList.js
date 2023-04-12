import { fetchRockets } from "../redux/rockets/rocketsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import RocketItem from "./RocketItem";


export default function Rockets() {
    const { rockets, isLoading, isError, fetched
      } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  const {reserved} = useSelector((store) => store.rockets.rockets)

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchRockets());
    }
  }, [dispatch, fetched]);

  if(isLoading){
    return (
      <h3>Loading...</h3>
    );
  }else if(isError){
    return (
      <h3>{isError}</h3>
    );
  }else{
    return (
      <div data-testid="rocketid">
         {rockets.map((rocket) => {
          return (
            < RocketItem key = {rocket.id} rocket = {rocket} reserved = {rocket.reserved} />
          );
        })}
      </div>
    );
  }
}