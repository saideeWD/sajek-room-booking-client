import React, { useContext, useState } from "react";
import { UserContaxt } from "../../App";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import Bookings from './../Bookings/Bookings';
const Booking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContaxt);
  const [value, setValue] = React.useState(dayjs(new Date()));
  const handleBooking = async () => {
    const newBooking = { ...loggedInUser };
    await fetch("http://localhost:5003/addBooking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
console.log(loggedInUser)
  return (
    <div className="book-rom" style={{ textAlign: "center" }}>
      <h1>{loggedInUser.name} ! This is booking</h1>
      <Link to={"/"}>Diffrent to go </Link>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label="Uncontrolled picker"
            defaultValue={dayjs("2022-04-17")}
          />
          <DatePicker
            label="Controlled picker"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <br />
      <Button onClick={handleBooking} variant="contained" color="success">
        Success
      </Button>
      <Bookings/>
    </div>
  );
};

export default Booking;
