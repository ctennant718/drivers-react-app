import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function DogsList() {
  const dogs = [
    {
      _id: 1,
      name: "Golden Retriever",
      playfulness: 4,
      image_link:
        "https://www.lombardvet.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info_0.jpg?itok=sYARdO3q",
    },
    {
      _id: 2,
      name: "Cocker Spaniel",
      playfulness: 6,
      image_link:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Spaniel%20%28Cocker%291.jpg?h=ccdd1b23&itok=rtpOkLHY",
    },
  ];
  return (
    <>
      <Typography variant="h2" component="h2" mb="0.5em">
        Dogs
      </Typography>
      <Typography paragraph={true}>
        Add some doggo friends to your collection:
      </Typography>
      <List>
        {dogs.map(({ name, playfulness, image_link, _id }, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar alt="" src={image_link} />
            </ListItemAvatar>
            <ListItemText>
              {name} (Playfulness: {playfulness})
            </ListItemText>
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

export default DogsList;
