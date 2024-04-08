import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import "./Card.css";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import WcIcon from "@mui/icons-material/Wc";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import Booking from "../Booking/Booking";
import { Link } from "react-router-dom";

export default function MediaCard(props) {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const rooms = props.rooms;
  const { images, name, man, bead, doller, avatra, title } = rooms;

  return (
    <Card className="card-simple" sx={{ maxWidth: 345 }}>
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{avatra}</Avatar>
        </StyledBadge>
        <h3>{name}</h3>
      </Stack>
      <CardMedia sx={{ height: 140 }} image={images} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <LocalHotelIcon></LocalHotelIcon>:<h2>{bead}</h2>
        <WcIcon></WcIcon>:<h2>{man}</h2>
        <AttachMoneyIcon></AttachMoneyIcon>:<h2>{doller}</h2>
        <Stack direction="row" spacing={2}>
          <Link to={"/book"}>
            <Button variant="contained" color="success">
              Book
            </Button>
          </Link>
        </Stack>
      </CardActions>
    </Card>
  );
}
