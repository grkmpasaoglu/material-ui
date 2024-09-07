import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Register = () => {
  const [tip, setTip] = React.useState("");

  const handleChange = (event) => {
    setTip(event.target.value);
  };

  return (
    <div>
      <Typography sx={{ fontWeight: "bold", mb: "10px" }}>Kayıt</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-basic"
            label="Kayıt Adı"
            variant="outlined"
            sx={{ width: "100%", bgcolor: "white", borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-basic"
            label="Kayıt No"
            variant="outlined"
            sx={{ width: "100%", bgcolor: "white", borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-basic"
            label="Miktar"
            variant="outlined"
            sx={{ width: "100%", bgcolor: "white", borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth sx={{ bgcolor: "white", borderRadius: 1 }}>
            <InputLabel id="select-label-1" sx={{ color: "text.primary" }}>
              Tip
            </InputLabel>
            <Select
              labelId="select-label-1"
              id="select-1"
              value={tip}
              label="Tip"
              onChange={handleChange}
              sx={{ color: "text.primary" }}
            >
              <MenuItem value={10}>Tip 1</MenuItem>
              <MenuItem value={20}>Tip 2</MenuItem>
              <MenuItem value={30}>Tip 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth sx={{ bgcolor: "white", borderRadius: 1 }}>
            <InputLabel id="select-label-2" sx={{ color: "text.primary" }}>
              Tür
            </InputLabel>
            <Select
              labelId="select-label-2"
              id="select-2"
              value={tip}
              label="Tur"
              onChange={handleChange}
              sx={{ color: "text.primary" }}
            >
              <MenuItem value={10}>Tür 1</MenuItem>
              <MenuItem value={20}>Tür 2</MenuItem>
              <MenuItem value={30}>Tür 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth sx={{ bgcolor: "white", borderRadius: 1 }}>
            <InputLabel id="select-label-2" sx={{ color: "text.primary" }}>
              Grup
            </InputLabel>
            <Select
              labelId="select-label-2"
              id="select-2"
              value={tip}
              label="Tur"
              onChange={handleChange}
              sx={{ color: "text.primary" }}
            >
              <MenuItem value={10}>Grup 1</MenuItem>
              <MenuItem value={20}>Grup 2</MenuItem>
              <MenuItem value={30}>Grup 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth sx={{ bgcolor: "white", borderRadius: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Başlangıç Tarihi"
                renderInput={(params) => (
                  <fullWidth sx={{ bgcolor: "white", borderRadius: 1 }} />
                )}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth sx={{ bgcolor: "white", borderRadius: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Bitiş Tarihi"
                renderInput={(params) => (
                  <fullWidth sx={{ bgcolor: "white", borderRadius: 1 }} />
                )}
              />
            </LocalizationProvider>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          container
          spacing={1}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item>
            <Button variant="contained" color="error" sx={{ borderRadius: 1 }}>
              İptal
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              sx={{ borderRadius: 1 }}
            >
              Kayıt
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
