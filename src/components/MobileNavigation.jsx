import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

function MobileNavigation({
  mobileOpen = false,
  handleDrawerToggle = () =>
    console.log("No handleDrawerToggle function provided."),
  drawerWidth = 240,
}) {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Race Sign-Up
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemButton
                sx={{ textAlign: "left" }}
                component={NavLink}
                to="/"
              >
                <ListItemText primary={"Drivers's List"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                sx={{ textAlign: "left" }}
                component={NavLink}
                to="/add"
              >
                <ListItemText primary={"Add a Driver"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default MobileNavigation;
