import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function DriversList() {
  const drivers = [
    {
      _id: 1,
      firstname: "Joel",
      lastname: "Tennant",
      age: 40,
      email: "joel@test.com",
    },
    {
      _id: 1,
      firstname: "Charlotte",
      lastname: "Tennant",
      age: 27,
      email: "charlotte@test.com",
    },
  ];
  return (
    <>
      <Typography variant="h2" component="h2" mb="0.5em">
        Drivers
      </Typography>
      <Typography paragraph={true}>
        Add your name to take part in the race of a lifetime!
      </Typography>
      <List>
        {drivers.map(({ firstname, lastname, age, email, _id }, i) => (
          <ListItem key={i}>
            <ListItemText
              primary={`${firstname} ${lastname}`}
              secondary={`Email: ${email}`}
            />
            <ListItemText>Age: {age}</ListItemText>
            <IconButton
              aria-label="update"
              to={`/update/${_id}`}
              component={Link}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => console.log(`Delete ${_id}`)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default DriversList;
