import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import { useContext } from "react";
import { userContext } from "../context";

const UserPage = () => {
  const [userState, setUserState] = useState();
  let param = useParams();

  const user = useContext(userContext);

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(`http://localhost:8080/${param.id}`);
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

      <p>The Context Is: {user}</p>
    </>
  );
};

export default UserPage;
