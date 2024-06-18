import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./routes/RegisterPage";
import LoginPage from "./routes/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello There</div>,
    },
    {
      path: "/todo",
      element: <div>ToDo</div>,
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
