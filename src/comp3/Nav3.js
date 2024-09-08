import {
  Box,
  Divider,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { TextField, InputAdornment } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const Nav3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        px: "30px",
        display: { xs: "none", lg: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #EEEFEE",
        height: { xs: "70px", md: "100px" },
        flexDirection: { xs: "column", md: "row" }, // Mobilde dikey düzen
        mt: { xs: "10px", md: "0px" },
      }}
    >
      {/* Sol taraftaki TextField */}
      <TextField
        id="filled-basic"
        label="Search..."
        variant="filled"
        sx={{
          width: { xs: "100%", md: "350px" }, // Mobilde tam genişlik
          borderRadius: "8px",
          backgroundColor: "#F4F6FA",
          "& .MuiInputBase-root": {
            borderRadius: "8px",
          },
          "& .MuiFilledInput-root": {
            backgroundColor: "#F4F6FA",
            borderRadius: "8px",
            "&:before": {
              display: "none",
            },
            "&:hover:before": {
              display: "none",
            },
            "&.Mui-focused:before": {
              display: "none",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* Menü ve Sağ taraftaki bileşenler */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexGrow: 1,
          justifyContent: { xs: "space-between", md: "flex-end" },
        }}
      >
        {/* Sağ taraftaki bileşenler */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "16px",
          }}
        >
          <NotificationsNoneIcon sx={{ color: "#979FA8" }} />
          <AddCircleOutlineIcon sx={{ color: "#979FA8" }} />
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "#979FA8", height: "50px" }}
          />
          <Box
            sx={{
              width: "50px",
              height: "50px",
              overflow: "hidden",
              borderRadius: "50%",
              bgcolor: "#F7F6FC",
            }}
          >
            <img
              src="https://attic.sh/2gxbjoet3yc1c283ozaafs0fm627"
              alt="icon"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Görkem Paşaoğlu</Typography>
            <Typography sx={{ color: "#979FA8" }}>Premium Plan</Typography>
          </Box>
          <LogoutIcon sx={{ color: "#979FA8" }} />
        </Box>
      </Box>

      {/* Hamburger Menü Açılır Menüsü */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <MenuItem onClick={handleClose}>
          <NotificationsNoneIcon sx={{ marginRight: "8px" }} /> Notifications
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AddCircleOutlineIcon sx={{ marginRight: "8px" }} /> Add
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LogoutIcon sx={{ marginRight: "8px" }} /> Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Nav3;
