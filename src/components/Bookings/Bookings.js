import React, { useContext, useEffect, useState } from "react";
import Booking from "../Booking/Booking";
import { UserContaxt } from "../../App";

const Bookings = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContaxt);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5003/bookings?email="+loggedInUser.email,{
      method:"get",
      headers:{
        'Content-Type':'application/json',
        authorization:`Bearer ${sessionStorage.getItem('token')}`
    }
    
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  },[]);
  return (
    <div>
      <h3>you have :{bookings.length} Booking</h3>
      {bookings.map((book) => (
        <li> 
          {book.key}
          {book.name} from:{new Date().toString('dd/MM/yyyy')} {book.email }
        </li>
      ))}
    </div>
  );
};

export default Bookings;
