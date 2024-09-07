import * as React from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Container,
} from "@mui/material";
import {
  HomeOutlined as HomeOutlinedIcon,
  BarChartOutlined as BarChartOutlinedIcon,
  TableRowsOutlined as TableRowsOutlinedIcon,
  GpsFixed as GpsFixedIcon,
  FormatListBulleted as FormatListBulletedIcon,
  AccountBox as AccountBoxIcon,
  Person as PersonIcon,
  Error as ErrorIcon,
  ContactPage as ContactPageIcon,
  Article as ArticleIcon,
} from "@mui/icons-material";
import EnhancedTable from "../components/EnhancedTable";
import Register from "../components/Register";
import AppBarComponent from "../components/AppBar";

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

  const handleDrawerClose = () => setMobileOpen(false);

  const drawer = (
    <Box sx={{ bgcolor: "#131621", height: "100vh" }}>
      <Toolbar sx={{ fontSize: "30px", color: "#A059FF", mb: "22px" }}>
        LOGO
      </Toolbar>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  transform: "translateY(-4px)",
                  transition: "transform 0.3s ease",
                },
                transition: "transform 0.3s ease",
              }}
            >
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
      <AppBarComponent /> {/* APP BAR */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              border: "none",
              height: "100vh",
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
              height: "100vh",
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
          bgcolor: "#222A41",
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflowX: "auto",
        }}
      >
        <Toolbar />
        <Container
          sx={{
            width: "100%",
            maxWidth: "100%",
            mt: 2,
            px: 2,
            bgcolor: "#DADCE2",
            p: "20px",
            borderRadius: "10px",
            overflowX: "auto",
          }}
        >
          <Register />
        </Container>

        <Container
          sx={{
            width: "100%",
            maxWidth: "100%",
            mt: 2,
            px: 2,
            bgcolor: "#DADCE2",
            p: "20px",
            borderRadius: "10px",
            overflowX: "auto",
          }}
        >
          <EnhancedTable /> {/* ENHANCED TABLE */}
        </Container>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
