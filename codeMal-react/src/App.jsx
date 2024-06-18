import "./App.css";
import { useState, useEffect } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";

const App = () => {
  const [initialState, setInitialState] = useState();

  const [urlState, setUrlState] = useState();
  const [inputState, setInputState] = useState("");

  const getData = async (name) => {
    if (!name) {
      const request = await fetch(`http://localhost:8080`);
      const data = await request.json();
      setInitialState(data);
    } else {
      const request = await fetch(`http://localhost:8080/?name=${name}`);
      const data = await request.json();
      setInitialState(data);
    }
  };

  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const nameQuery = url.get("name");

    if (nameQuery) setInputState(nameQuery);

    getData(nameQuery);
  }, []);

  useEffect(() => {
    console.log(inputState, urlState);
    setUrlState(`${window.location.origin}/?name=${inputState}`);
  }, [inputState]);

  const changeRoute = () => {
    window.location.replace(urlState);
  };

  const updateUserState = (user) => {
    initialState.forEach((state, index) => {
      if (state.id === Number(user.id)) {
        state.id = Number(user.id);
        setInitialState(initialState);
      }
    });
  };

  return (
    <>
      <input
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />

      <button onClick={changeRoute}>Search</button>

      <UserList initialState={initialState} />

      <AddUser setInitialState={setInitialState} />

      <EditUser updateUserState={updateUserState} />
    </>
  );
};

export default App;
