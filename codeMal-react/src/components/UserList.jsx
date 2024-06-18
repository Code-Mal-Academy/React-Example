const UserList = (props) => {
  return (
    <>
      {props.initialState?.map((person) => (
        <div key={person.id}>
          <p>
            Name: {person.name}, Age: {person.age}, Gender: {person.gender}
          </p>
        </div>
      ))}
    </>
  );
};

export default UserList;
