import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
