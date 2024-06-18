import { useState } from "react";

const EditUser = (props) => {
  const [idState, setIdState] = useState("");
  const [nameState, setNameState] = useState("");
  const [ageState, setAgeState] = useState("");
  const [genderState, setGenderState] = useState("");

  const submitToBackend = async () => {
    const req = await fetch("http://localhost:8080", {
      method: "PUT",
      body: JSON.stringify({
        id: idState,
        name: nameState,
        age: ageState,
        gender: genderState,
      }),
    });
    const res = await req.json();

    props.updateUserState(res); //!Props Lifting
  };

  return (
    <>
      <input
        value={idState}
        onChange={(e) => setIdState(Number(e.target.value))}
        placeholder="id"
      />
      <input
        value={nameState}
        onChange={(e) => setNameState(e.target.value)}
        placeholder="name"
      />
      <input
        value={ageState}
        onChange={(e) => setAgeState(Number(e.target.value))}
        placeholder="age"
      />
      <input
        value={genderState}
        onChange={(e) => setGenderState(e.target.value)}
        placeholder="gender"
      />

      <button onClick={submitToBackend}>Edit User</button>
    </>
  );
};

export default EditUser;
