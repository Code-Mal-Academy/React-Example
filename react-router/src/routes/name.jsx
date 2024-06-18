import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context";

const NameSearchPage = () => {
  const [userState, setUserState] = useState();
  let [searchParams, setSearchParams] = useSearchParams();

  const user = useContext(userContext);

  const name = searchParams.get("name");

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(`http://localhost:8080/?name=${name}`);
      const res = await req.json();

      setUserState(res);
    };

    getData();
  }, [searchParams]);

  return (
    <>
      {userState?.map((user) => (
        <p key={user.id}>
          Name: {user.name}, Age: {user.age}
        </p>
      ))}

      <p>This is Context: {user}</p>
    </>
  );
};

export default NameSearchPage;
