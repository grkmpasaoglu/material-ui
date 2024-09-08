import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import BasicTable from "./BasicTable";
import {
  Search as SearchIcon,
  NotificationsNone as NotificationsIcon,
  Logout as LogoutIcon,
  MailOutline as MailOutlineIcon,
} from "@mui/icons-material";
import { Link } from "@mui/material";
import ActionAreaCard from "./ActionAreaCard";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
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
    <div>
      <Box>
        <img
          alt="food logo"
          src="https://purplefoods.in/wp-content/uploads/2022/08/logo2-e1669617575655.jpg"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            marginBottom: "-60px",
          }}
        />
      </Box>

      <Toolbar />
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          margin: 0,
          borderRadius: 10,
        }}
      >
        {[
          "Inbox",
          "Starred",
          "Sent mail",
          "Drafts",
          "Trash",
          "Important",
          "Junk mail",
          "Archive",
          "Promotions",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                textAlign: "center",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#5C5FEE",
                  cursor: "pointer",
                  color: "white",
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
                my: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "auto",
                  marginRight: 1,
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ color: "#5C5FEE" }} />
            </IconButton>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                color: "#5C5FEE",
                fontWeight: "700",
                fontSize: { xs: "16px", md: "20px" },
              }}
            >
              Dashboard
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton sx={{ color: "#5C5FEE" }} component={Link} to="#">
              <MailOutlineIcon />
            </IconButton>
            <IconButton sx={{ color: "#5C5FEE" }} component={Link} to="#">
              <NotificationsIcon />
            </IconButton>
            <IconButton sx={{ color: "#5C5FEE" }} component={Link} to="#">
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>

        <Divider />
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
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
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
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          bgcolor: "#EDEDEF",
          flexGrow: 1,
          p: 3,
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <BasicTable />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <TextField
              fullWidth
              id="filled-basic"
              label="Alınan Miktar"
              variant="filled"
              sx={{
                "& label.Mui-focused": {
                  color: "#5C5FEE",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottomColor: "#5C5FEE",
                },
                "& .MuiFilledInput-underline:after": {
                  borderBottomColor: "#5C5FEE",
                },
                "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#5C5FEE",
                },
              }}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Tüketilen Miktar"
              variant="filled"
              sx={{
                "& label.Mui-focused": {
                  color: "#5C5FEE",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottomColor: "#5C5FEE",
                },
                "& .MuiFilledInput-underline:after": {
                  borderBottomColor: "#5C5FEE",
                },
                "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#5C5FEE",
                },
              }}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Kalan Miktar"
              variant="filled"
              sx={{
                "& label.Mui-focused": {
                  color: "#5C5FEE",
                },
                "& .MuiFilledInput-underline:before": {
                  borderBottomColor: "#5C5FEE",
                },
                "& .MuiFilledInput-underline:after": {
                  borderBottomColor: "#5C5FEE",
                },
                "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#5C5FEE",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActionAreaCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
