import { useState } from "react";
import "./ToDoPage.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ToDoPage = () => {
  const [taskState, setTaskState] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const req = await fetch("http://localhost:8080/todo", {
        credentials: "include",
      });

      //! Session
      if (req.status === 401) {
        navigate("/login");
      }

      const res = await req.json();

      setTaskState(res);
    };

    getData();
  }, [navigate]);

  const LogOutFunction = () => {
    const sendData = async () => {
      const req = await fetch("http://localhost:8080/auth/logout", {
        credentials: "include",
        method: "POST",
      });

      //! Session
      if (req.status === 301) {
        navigate("/login");
      }
    };

    sendData();
  };

  return (
    <div className="todo-container">
      <h1 className="title">ToDo List</h1>
      <ul className="task-list">
        {taskState?.map((task) => (
          <li key={task.id}>
            <span className="task-text">{task.task}</span>
          </li>
        ))}
      </ul>

      <button onClick={LogOutFunction}>Logout</button>
    </div>
  );
};

export default ToDoPage;
