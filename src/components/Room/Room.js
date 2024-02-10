import React, { useEffect, useState } from "react";
import { fakeData } from "./../Data/Data";
import MediaCard from "./../Card/Card";

const Room = () => {
  const frist6 = fakeData.slice(0, 6);
  const [room, setRoom] = useState(frist6);

  return (
    <div>
      {room.map((room) => (
        <MediaCard rooms={room} key={room.id}></MediaCard>
        
      ))}
    </div>
  );
};

export default Room;
