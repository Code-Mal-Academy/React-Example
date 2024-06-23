import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./routes/RegisterPage";
import LoginPage from "./routes/LoginPage";
import ToDoPage from "./routes/ToDoPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello There</div>,
    },
    {
      path: "/todo",
      element: <ToDoPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
