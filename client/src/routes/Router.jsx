import { createBrowserRouter } from "react-router";
import Add from "../pages/Add";
import Update from "../pages/Update";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Search from "../pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },

  {
    path: "register",
    element: <Register />,
  },
 {
    path: "login",
    element: <Login />,
  },
   {
    path: "search",
    element: <Search />,
  },


]);
export default router;
