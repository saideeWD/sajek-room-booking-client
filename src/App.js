
import "./App.css";
import { router } from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import { createContext, useState } from "react";
export const UserContaxt = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
   <UserContaxt.Provider value={[loggedInUser,setLoggedInUser]}>
    <p>Name : {loggedInUser.name}</p>
    <RouterProvider router={router} >
      <Layout></Layout>
    </RouterProvider>
    </UserContaxt.Provider>
  );
}

export default App;
