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
  deleteHandler = () =>
    console.log("No deleteHandler provided to Drivers List"),
}) {
  const reversedDrivers = [...drivers].reverse();
  return (
    <List>
      {reversedDrivers.map(({ firstname, lastname, age, email, _id }) => (
        <ListItem key={_id} sx={{ bgcolor: "#81c784", mb: 2, borderRadius: 2 }}>
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
          <IconButton aria-label="delete" onClick={() => deleteHandler(_id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default DriversList;
