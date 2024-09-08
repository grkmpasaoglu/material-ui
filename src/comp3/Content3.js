import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#006BF7",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, date, consumption, rate, total) {
  return { id, date, consumption, rate, total };
}

const rows = [
  createData("001", "2024-08-01", 120, 1.5, 180),
  createData("002", "2024-08-02", 110, 1.6, 176),
  createData("003", "2024-08-03", 130, 1.55, 201.5),
  createData("004", "2024-08-04", 125, 1.7, 212.5),
  createData("005", "2024-08-05", 140, 1.6, 224),
];

const Content3 = () => {
  return (
    <div>
      <Box sx={{ p: "30px" }}>
        {/* DASHBOARD KISMI */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #EEEFEE",
            pb: "30px",
            px: "30px",
            "@media (max-width: 600px)": {
              // Mobil görünüm için stil
              flexDirection: "column",
              mt: "40px",
              width: "100%",
              alignItems: "stretch",
              justifyContent: "flex-start",
              px: "16px", // Mobilde daha küçük padding
            },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Faturalar
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                border: "1px solid #848C94",
                borderRadius: "8px",
                padding: "8px 8px",
                marginRight: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DateRangeIcon sx={{ mr: "10px", color: "#848C94" }} />
              <Typography sx={{ color: "#848C94" }}>21 Oct - 21 Nov</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                border: "1px solid #006BF7",
                backgroundColor: "#006BF7",
                borderRadius: "8px",
                padding: "8px 8px",
              }}
            >
              <FileUploadIcon sx={{ marginRight: "8px" }} />
              Export CSV
            </Button>
          </Box>
        </Box>

        {/* ARAMA KISMI */}
        <Box
          sx={{
            borderBottom: "1px solid #EEEFEE",
            pb: "30px",
            px: "30px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "8px",
              px: "30px",
              py: "20px",
              mt: "30px",
              // Added border to match the spacing with the table and dashboard
              border: "1px solid #EEEFEE",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "550" }}>
              Fatura ara
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "16px",
                mb: "16px",
                px: "5px",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Ara..."
                sx={{ flex: 1, mr: "16px", backgroundColor: "white" }}
              />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#006BF7",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "16px 16px",
                }}
              >
                Ara
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: "space-evenly",
                mt: "16px",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Adres Üzerinden"
                sx={{ color: "#000" }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Müşteri ID Üzerinden"
                sx={{ color: "#000" }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Tüketim Üzerinden"
                sx={{ color: "#000" }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Fatura ID Üzerinden"
                sx={{ color: "#000" }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Tarih Üzerinden"
                sx={{ color: "#000" }}
              />
            </Box>
            <Box
              sx={{
                mt: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  gap: "30px",
                  flexDirection: { xs: "column", lg: "row" },
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="invoice-type-label">Fatura Türü</InputLabel>
                  <Select
                    labelId="invoice-type-label"
                    defaultValue=""
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000",
                      borderRadius: "8px",
                    }}
                  >
                    <MenuItem value="personal">Kişisel Fatura</MenuItem>
                    <MenuItem value="company">Şirket Faturası</MenuItem>
                    <MenuItem value="foreign">Yabancı Fatura</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="payment-method-label">
                    Ödeme Yöntemi
                  </InputLabel>
                  <Select
                    labelId="payment-method-label"
                    defaultValue=""
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000",
                      borderRadius: "8px",
                    }}
                  >
                    <MenuItem value="credit-card">Kredi Kartı</MenuItem>
                    <MenuItem value="bank-transfer">Banka Transferi</MenuItem>
                    <MenuItem value="paypal">PayPal</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="invoice-status-label">
                    Fatura Durumu
                  </InputLabel>
                  <Select
                    labelId="invoice-status-label"
                    defaultValue=""
                    sx={{
                      backgroundColor: "#fff",
                      color: "#000",
                      borderRadius: "8px",
                    }}
                  >
                    <MenuItem value="paid">Ödenmiş</MenuItem>
                    <MenuItem value="unpaid">Ödenmemiş</MenuItem>
                    <MenuItem value="overdue">Vadesi Geçmiş</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        backgroundColor: "#fff",
                        color: "#000",
                        borderRadius: "8px",
                      }}
                      label="Başlangıç Tarihi"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          sx={{ bgcolor: "white", borderRadius: 1 }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        backgroundColor: "#fff",
                        color: "#000",
                        borderRadius: "8px",
                      }}
                      label="Bitiş Tarihi"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          sx={{ bgcolor: "white", borderRadius: 1 }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* TABLO */}
        <Box sx={{ px: "30px", py: "30px", borderBottom: "1px solid #EEEFEE" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Fatura ID</StyledTableCell>
                  <StyledTableCell align="right">Tarih</StyledTableCell>
                  <StyledTableCell align="right">Tüketim (m³)</StyledTableCell>
                  <StyledTableCell align="right">
                    Birim Fiyat (₺/m³)
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Toplam Tutar (₺)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.consumption}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.rate}</StyledTableCell>
                    <StyledTableCell align="right">{row.total}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default Content3;
