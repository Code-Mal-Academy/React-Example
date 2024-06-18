import { useEffect } from "react";
import { useState } from "react";
import Layout from "../layout/layout";

const Root = () => {
  const [userState, setUserState] = useState();

  useEffect(() => {
    const getData = async () => {
      const req = await fetch("http://localhost:8080/");
      const res = await req.json();
      setUserState(res);
    };

    getData();
  }, []);

  return (
    <>
      {userState?.map((user) => (
        <p key={user.id}>
          Name: {user.name}, Age: {user.age}
        </p>
      ))}
    </>
  );
};

export default Root;
