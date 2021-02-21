import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { atypes } from "./actiontypes";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: atypes.FETCH_USERS_DB });
  }, [dispatch]);

  const red = useSelector((store) => store.reducer);
  // const { users } = useSelector((store) => store.reducer.users);
  console.log("hello", red);
  console.log(red?.users[0]);
  return (
    <div className="home">
      <h2>{red.counter}</h2>
      <div className="preview">
        {red.users?.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
      <button onClick={() => dispatch({ type: "INC" })}>Increase</button>
    </div>
  );
};

export default Home;
