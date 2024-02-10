import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Room from "../components/Room/Room";
import Booking from "../components/Booking/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { path: "/", element: <Room /> },
        { path: "/room", element: <Room /> },
        { path: "/book", element: <Booking /> },
        { path: "/login", element: <Login /> },
      
    ],
  },
]);