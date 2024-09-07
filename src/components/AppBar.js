import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  FormControl,
  Input,
  InputAdornment,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  NotificationsNone as NotificationsIcon,
  Logout as LogoutIcon,
  MailOutline as MailOutlineIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const AppBarComponent = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "#131621",
        zIndex: 1201,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: {
            xs: "flex-start",
            sm: "space-between",
          },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <FormControl variant="standard">
          <Input
            sx={{
              color: "white",
              borderBottom: "1px white solid",
              width: {
                xs: "80%",
                sm: "100%",
              },
            }}
            placeholder="Search"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start" sx={{ color: "white" }}>
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton sx={{ color: "white" }} component={Link} to="#">
            <MailOutlineIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }} component={Link} to="#">
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }} component={Link} to="#">
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
