import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function DriversList({
  drivers = [],
  deleteHandler = () => console.log("No deleteHandler provided to Drivers List"),
}) {
  return (
    <List>
      {drivers.map(({ firstname, lastname, age, email, _id }, i) => (
        <ListItem key={i}>
          <ListItemText
            primary={`${firstname} ${lastname} (Age: ${age})`}
            secondary={`Email: ${email}`}
          />
          <IconButton
            aria-label="update"
            to={`/update/${_id}`}
            component={Link}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => deleteHandler(_id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default DriversList;
