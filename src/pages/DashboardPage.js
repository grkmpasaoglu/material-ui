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
  Typography,
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
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const menuItems = [
  { text: "Ana Sayfa", icon: <HomeOutlinedIcon /> },
  { text: "Parça takip", icon: <GpsFixedIcon /> },
  { text: "Stok Takip", icon: <FormatListBulletedIcon /> },
  { text: "Kargo", icon: <TableRowsOutlinedIcon /> },
  { text: "Kayıtlar", icon: <AccountBoxIcon /> },
  { text: "Raporlar", icon: <BarChartOutlinedIcon /> },
  { text: "Kullanıcılar", icon: <PersonIcon /> },
  { text: "Arızalı Parçalar", icon: <ErrorIcon /> },
  { text: "Genel Parçalar", icon: <ContactPageIcon /> },
  { text: "Kılavuz", icon: <ArticleIcon /> },
];

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerClose = () => setMobileOpen(false);

  const drawer = (
    <Box sx={{ bgcolor: "#131621", height: "100vh", display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ fontSize: "40px",fontWeight:'bold', color: "#A059FF", mb: "22px",mt:'12px', display:'flex', justifyContent:'center', alignContent:'center', }}>
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
      <Box sx={{ marginTop: 'auto' }}>
        <ListItem disablePadding>
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
              }}
            >
              <ListItemText primary="Ayarlar" sx={{ color: "white" }} />
              <ListItemIcon sx={{ color: "#A059FF" }}>
                <SettingsIcon />
              </ListItemIcon>
            </Box>
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarComponent onMenuClick={() => setMobileOpen(!mobileOpen)} />
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
              bgcolor: "#131621", // Set the background color
              overflowY: "auto", // Allow vertical scrolling
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#A059FF",
                borderRadius: "4px",
              },
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
              bgcolor: "#131621", // Set the background color
              overflowY: "auto", // Allow vertical scrolling
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#A059FF",
                borderRadius: "4px",
              },
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
          <Typography sx={{ fontWeight: "bold", mb: "10px" }}>Stok Takip</Typography>
          <EnhancedTable /> {/* ENHANCED TABLE */}
        </Container>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
