import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../components/Login/Login";
import Room from "../components/Room/Room";
import Booking from "../components/Booking/Booking";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { path: "/", element: <Room /> },
        { path: "/room", element: <Room /> },
        { path: "/book", element:( <PrivateRoute>
          <Booking/>
          </PrivateRoute>) },
        { path: "/login", element: <Login /> },
      
    ],
  },
]);