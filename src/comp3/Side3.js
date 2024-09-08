// import React from 'react';
// import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import SettingsIcon from '@mui/icons-material/Settings';
// import HelpIcon from '@mui/icons-material/Help';
// import LogoDevIcon from '@mui/icons-material/LogoDev';

// const Side3 = () => {
//     return (
//         <Box
//             sx={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 borderRight: '1px solid #EEEFEE',
//                 width: { xs: '100%', md: '300px' },
//                 height: '100vh', // Yüksekliği viewport yüksekliğine ayarla
//                 display: { xs: 'none', sm: 'block' },
//                 flexDirection: 'column',
//                 backgroundColor: '#fff' // Arka plan rengi ekleyin
//             }}
//         >
//             {/* Logo Bölümü */}
//             <Box
//                 sx={{
//                     px: '30px',
//                     display: 'flex',
//                     justifyContent: 'start',
//                     alignItems: 'center',
//                     borderBottom: '1px solid #EEEFEE',
//                     height: { xs: '70px', md: '100px' },
//                     mt: { xs: '10px', md: '0px' }
//                 }}
//             >
//                 <LogoDevIcon sx={{ color: '#0467FF', width: '70px', height: '70px' }} />
//                 <Typography variant='h4' sx={{ fontWeight: '600', ml: 1 }}>İŞLEM</Typography>
//             </Box>

//             {/* Sidebar Maddeleri */}
//             <Box sx={{ px: '5px', py: '5px', flexGrow: 1 }}>
//                 <Typography variant="subtitle2" sx={{ px: '16px', mt: '16px' }}>MAIN</Typography>
//                 <List sx={{ borderBottom: '1px solid #EEEFEE' }}>
//                     <ListItem
//                         button
//                         sx={{
//                             borderRadius: '8px',
//                             '&:hover': {
//                                 bgcolor: '#F4F6FA',
//                                 borderLeft: '4px solid #0467FF',
//                             },
//                             '&:hover .MuiListItemText-primary': {
//                                 color: '#0467FF',
//                             },
//                             '&:hover .MuiListItemIcon-root': {
//                                 color: '#0467FF',
//                             }
//                         }}
//                     >
//                         <ListItemIcon sx={{ color: '#979FA8' }}>
//                             <HomeIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Dashboard" />
//                     </ListItem>
//                     <ListItem
//                         button
//                         sx={{
//                             borderRadius: '8px',
//                             '&:hover': {
//                                 bgcolor: '#F4F6FA',
//                                 borderLeft: '4px solid #0467FF',
//                             },
//                             '&:hover .MuiListItemText-primary': {
//                                 color: '#0467FF',
//                             },
//                             '&:hover .MuiListItemIcon-root': {
//                                 color: '#0467FF',
//                             }
//                         }}
//                     >
//                         <ListItemIcon sx={{ color: '#979FA8' }}>
//                             <InfoIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Inbox" />
//                     </ListItem>
//                     <ListItem
//                         button
//                         sx={{
//                             borderRadius: '8px',
//                             '&:hover': {
//                                 bgcolor: '#F4F6FA',
//                                 borderLeft: '4px solid #0467FF',
//                             },
//                             '&:hover .MuiListItemText-primary': {
//                                 color: '#0467FF',
//                             },
//                             '&:hover .MuiListItemIcon-root': {
//                                 color: '#0467FF',
//                             }
//                         }}
//                     >
//                         <ListItemIcon sx={{ color: '#979FA8' }}>
//                             <ContactMailIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Customer" />
//                     </ListItem>
//                 </List>

//                 <Typography variant="subtitle2" sx={{ px: '16px', mt: '16px' }}>TOOLS</Typography>
//                 <List sx={{ borderBottom: '1px solid #EEEFEE' }}>
//                     <ListItem
//                         button
//                         sx={{
//                             borderRadius: '8px',
//                             '&:hover': {
//                                 bgcolor: '#F4F6FA',
//                                 borderLeft: '4px solid #0467FF',
//                             },
//                             '&:hover .MuiListItemText-primary': {
//                                 color: '#0467FF',
//                             },
//                             '&:hover .MuiListItemIcon-root': {
//                                 color: '#0467FF',
//                             }
//                         }}
//                     >
//                         <ListItemIcon sx={{ color: '#979FA8' }}>
//                             <HomeIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Insight" />
//                     </ListItem>
//                     <ListItem
//                         button
//                         sx={{
//                             borderRadius: '8px',
//                             '&:hover': {
//                                 bgcolor: '#F4F6FA',
//                                 borderLeft: '4px solid #0467FF',
//                             },
//                             '&:hover .MuiListItemText-primary': {
//                                 color: '#0467FF',
//                             },
//                             '&:hover .MuiListItemIcon-root': {
//                                 color: '#0467FF',
//                             }
//                         }}
//                     >
//                         <ListItemIcon sx={{ color: '#979FA8' }}>
//                             <InfoIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Forum" />
//                     </ListItem>
//                     <ListItem
//                         button
//                         sx={{
//                             borderRadius: '8px',
//                             '&:hover': {
//                                 bgcolor: '#F4F6FA',
//                                 borderLeft: '4px solid #0467FF',
//                             },
//                             '&:hover .MuiListItemText-primary': {
//                                 color: '#0467FF',
//                             },
//                             '&:hover .MuiListItemIcon-root': {
//                                 color: '#0467FF',
//                             }
//                         }}
//                     >
//                         <ListItemIcon sx={{ color: '#979FA8' }}>
//                             <ContactMailIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Reports" />
//                     </ListItem>
//                 </List>
//             </Box>

//             {/* Footer Bölümü */}
//             <Box sx={{ borderTop: '1px solid #EEEFEE', mt: 'auto', px: '5px', py: '5px' }}>
//                 <List>
//                     <ListItem
//                         button
//                         sx={{
//                             borderRadius: '8px',
//                             '&:hover': {
//                                 bgcolor: '#F4F6FA',
//                                 borderLeft: '4px solid #0467FF',
//                             },
//                             '&:hover .MuiListItemText-primary': {
//                                 color: '#0467FF',
//                             },
//                             '&:hover .MuiListItemIcon-root': {
//                                 color: '#0467FF',
//                             }
//                         }}
//                     >
//                         <ListItemIcon sx={{ color: '#979FA8' }}>
//                             <SettingsIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Settings" />
//                     </ListItem>
//                     <ListItem
//                         button
//                         sx={{
//                             borderRadius: '8px',
//                             '&:hover': {
//                                 bgcolor: '#F4F6FA',
//                                 borderLeft: '4px solid #0467FF',
//                             },
//                             '&:hover .MuiListItemText-primary': {
//                                 color: '#0467FF',
//                             },
//                             '&:hover .MuiListItemIcon-root': {
//                                 color: '#0467FF',
//                             }
//                         }}
//                     >
//                         <ListItemIcon sx={{ color: '#979FA8' }}>
//                             <HelpIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Help & Support" />
//                     </ListItem>
//                 </List>
//             </Box>
//         </Box>
//     );
// };

// export default Side3;

import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import MenuIcon from "@mui/icons-material/Menu";

const Side3 = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#fff",
        borderRight: "1px solid #EEEFEE",
      }}
    >
      {/* Logo Bölümü */}
      <Box
        sx={{
          px: "30px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          borderBottom: "1px solid #EEEFEE",
          height: { xs: "70px", md: "100px" },
          mt: { xs: "10px", md: "0px" },
        }}
      >
        <LogoDevIcon sx={{ color: "#0467FF", width: "70px", height: "70px" }} />
        <Typography variant="h4" sx={{ fontWeight: "600", ml: 1 }}>
          İŞLEM
        </Typography>
      </Box>

      {/* Sidebar Maddeleri */}
      <Box sx={{ px: "5px", py: "5px", flexGrow: 1 }}>
        <Typography variant="subtitle2" sx={{ px: "16px", mt: "16px" }}>
          MAIN
        </Typography>
        <List sx={{ borderBottom: "1px solid #EEEFEE" }}>
          <ListItem
            button
            sx={{
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#F4F6FA",
                borderLeft: "4px solid #0467FF",
              },
              "&:hover .MuiListItemText-primary": {
                color: "#0467FF",
              },
              "&:hover .MuiListItemIcon-root": {
                color: "#0467FF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#979FA8" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            sx={{
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#F4F6FA",
                borderLeft: "4px solid #0467FF",
              },
              "&:hover .MuiListItemText-primary": {
                color: "#0467FF",
              },
              "&:hover .MuiListItemIcon-root": {
                color: "#0467FF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#979FA8" }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem
            button
            sx={{
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#F4F6FA",
                borderLeft: "4px solid #0467FF",
              },
              "&:hover .MuiListItemText-primary": {
                color: "#0467FF",
              },
              "&:hover .MuiListItemIcon-root": {
                color: "#0467FF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#979FA8" }}>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
          </ListItem>
        </List>

        <Typography variant="subtitle2" sx={{ px: "16px", mt: "16px" }}>
          TOOLS
        </Typography>
        <List sx={{ borderBottom: "1px solid #EEEFEE" }}>
          <ListItem
            button
            sx={{
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#F4F6FA",
                borderLeft: "4px solid #0467FF",
              },
              "&:hover .MuiListItemText-primary": {
                color: "#0467FF",
              },
              "&:hover .MuiListItemIcon-root": {
                color: "#0467FF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#979FA8" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Insight" />
          </ListItem>
          <ListItem
            button
            sx={{
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#F4F6FA",
                borderLeft: "4px solid #0467FF",
              },
              "&:hover .MuiListItemText-primary": {
                color: "#0467FF",
              },
              "&:hover .MuiListItemIcon-root": {
                color: "#0467FF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#979FA8" }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Forum" />
          </ListItem>
          <ListItem
            button
            sx={{
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#F4F6FA",
                borderLeft: "4px solid #0467FF",
              },
              "&:hover .MuiListItemText-primary": {
                color: "#0467FF",
              },
              "&:hover .MuiListItemIcon-root": {
                color: "#0467FF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#979FA8" }}>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Box>

      {/* Footer Bölümü */}
      <Box
        sx={{
          borderTop: "1px solid #EEEFEE",
          mt: "auto",
          px: "5px",
          py: "5px",
        }}
      >
        <List>
          <ListItem
            button
            sx={{
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#F4F6FA",
                borderLeft: "4px solid #0467FF",
              },
              "&:hover .MuiListItemText-primary": {
                color: "#0467FF",
              },
              "&:hover .MuiListItemIcon-root": {
                color: "#0467FF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#979FA8" }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem
            button
            sx={{
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#F4F6FA",
                borderLeft: "4px solid #0467FF",
              },
              "&:hover .MuiListItemText-primary": {
                color: "#0467FF",
              },
              "&:hover .MuiListItemIcon-root": {
                color: "#0467FF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#979FA8" }}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help & Support" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {/* AppBar with Hamburger Menu */}
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "block", md: "none" },
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            aria-label="menu"
          >
            <MenuIcon sx={{ color: "#0467FF" }} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#0467FF" }}>
            İŞLEM
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>

      {/* Sidebar for desktop */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          borderRight: "1px solid #EEEFEE",
          width: { xs: "100%", md: "300px" },
          height: "100vh", // Yüksekliği viewport yüksekliğine ayarla
          display: { xs: "none", md: "block" },
          flexDirection: "column",
          backgroundColor: "#fff", // Arka plan rengi ekleyin
        }}
      >
        {drawerContent}
      </Box>
    </>
  );
};

export default Side3;
