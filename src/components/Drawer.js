import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import ErrorIcon from "@mui/icons-material/Error";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArticleIcon from "@mui/icons-material/Article";
import { FormControl, Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <HomeOutlinedIcon /> },
  { text: "UI Elements", icon: <GpsFixedIcon /> },
  { text: "Form Elements", icon: <FormatListBulletedIcon /> },
  { text: "Tables", icon: <TableRowsOutlinedIcon /> },
  { text: "Icons", icon: <AccountBoxIcon /> },
  { text: "Charts", icon: <BarChartOutlinedIcon /> },
  { text: "User Pages", icon: <PersonIcon /> },
  { text: "Error Pages", icon: <ErrorIcon /> },
  { text: "General Pages", icon: <ContactPageIcon /> },
  { text: "Documentation", icon: <ArticleIcon /> },
];

function ResponsiveDrawer(props) {
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

  const drawer = (
    <Box sx={{ bgcolor: "#131621", height: "100vh" }}>
      {" "}
      {/* Drawer yüksekliği 100vh */}
      <Toolbar sx={{ fontSize: "30px", color: "#A059FF" }}>PASAOGLU</Toolbar>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  mb: "20px",
                }}
              >
                <ListItemText primary={item.text} sx={{ color: "white" }} />
                <ListItemIcon sx={{ color: "#A059FF" }}>
                  {item.icon}
                </ListItemIcon>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#131621",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              xs: "flex-start", // Mobil görünüm için
              sm: "space-between", // Masaüstü görünüm için
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
              sx={{ color: "white", borderBottom: "1px white solid" }}
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
            <MailOutlineIcon />
            <NotificationsIcon />
            <LogoutIcon />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              border: "none",
              height: "100vh", // Mobilde drawer yüksekliği 100vh
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              border: "none",
              height: "100vh", // Masaüstünde drawer yüksekliği 100vh
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
