// import React from 'react';
// import { Container, Box, TextField, Button, FormControlLabel, Checkbox, Typography, Link, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import { theme1, theme2 } from '../theme';
// import { ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';

// function BasicSelect({ theme, handleChange }) {
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
//       <FormControl sx={{ minWidth: 120 }}>
//         <InputLabel id="theme-select-label">Theme</InputLabel>
//         <Select
//           labelId="theme-select-label"
//           id="theme-select"
//           value={theme}
//           label="Theme"
//           onChange={handleChange}
//         >
//           <MenuItem value="theme1">Theme 1</MenuItem>
//           <MenuItem value="theme2">Theme 2</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

// const LoginPage = () => {
//   const [themeName, setThemeName] = React.useState('theme1');
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [error, setError] = React.useState('');

//   const handleChange = (event) => {
//     setThemeName(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3001/login', { email, password });
//       const { token } = response.data;

//       // Save the token to localStorage
//       localStorage.setItem('token', token);

//       // Login successful
//       alert('Signed in successfully!');
//     } catch (error) {
//       setError('Credentials are wrong.');
//     }
//   };

//   const theme = themeName === 'theme1' ? theme1 : theme2;

//   return (
//     <ThemeProvider theme={theme}>
//       <BasicSelect theme={themeName} handleChange={handleChange} />
//       <Container component="main" maxWidth="xs">
//         <Box
//           sx={{
//             marginTop: 20,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             border: '1px solid #e0e0e0',
//             padding: 4,
//             borderRadius: 4,
//             boxShadow: 2,
//             backgroundColor: '#fafafa',
//           }}
//         >
//           <Typography component="h1" variant="h4">
//             Sign in
//           </Typography>
//           <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               size='small'
//               sx={{ mb: 2 }}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               size='small'
//               sx={{ mb: 2 }}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {error && <Typography color="error">{error}</Typography>}
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label={
//                   <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#555' }}>
//                     Remember me
//                   </Typography>
//                 }
//               />
//               <Link
//                 href="#"
//                 variant="body2"
//                 sx={{
//                   fontSize: '0.75rem',
//                   textDecoration: 'none',
//                   '&:hover': {
//                     textDecoration: 'underline',
//                   },
//                 }}
//               >
//                 Forgot your password?
//               </Link>
//             </Box>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ my: 2, textTransform: 'none' }}
//             >
//               Sign In
//             </Button>
//             <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
//               <Link
//                 href="#"
//                 variant="body2"
//                 sx={{
//                   fontSize: '0.75rem',
//                   textDecoration: 'none',
//                   '&:hover': {
//                     textDecoration: 'underline',
//                   },
//                 }}
//               >
//                 Don’t have an account? Sign up.
//               </Link>
//             </Box>
//             <Box sx={{ my: 2 }}>
//               <hr />
//             </Box>
//             <Box sx={{ gap: '8px' }}>
//               <Button
//                 type="button"
//                 fullWidth
//                 variant="outlined"
//                 sx={{
//                   mt: 2,
//                   textTransform: 'none',
//                 }}
//               >
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
//                   alt="Google Logo"
//                   style={{ width: 20, height: 20, marginRight: 8 }}
//                 />
//                 Sign in with Google
//               </Button>
//               <Button
//                 type="button"
//                 fullWidth
//                 variant="outlined"
//                 sx={{
//                   mt: 2,
//                   textTransform: 'none',
//                 }}
//               >
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
//                   alt="GitHub Logo"
//                   style={{ width: 20, height: 20, marginRight: 8 }}
//                 />
//                 Sign in with GitHub
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default LoginPage;

import React from "react";
import {
    Container,
    Box,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
    Typography,
    Link,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { theme1, theme2 } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // React Router'dan useNavigate'i import ettik
import axios from "axios";

function BasicSelect({ theme, handleChange }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: { xs: 1, md: 4 }, marginRight: { xs: 1, md: 4 } }}>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="theme-select-label">Theme</InputLabel>
                <Select
                    labelId="theme-select-label"
                    id="theme-select"
                    value={theme}
                    label="Theme"
                    onChange={handleChange}
                >
                    <MenuItem value="theme1">Theme 1</MenuItem>
                    <MenuItem value="theme2">Theme 2</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

const LoginPage = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [themeName, setThemeName] = React.useState("theme1");

    const navigate = useNavigate();

    const handleChange = (event) => {
        setThemeName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/login", {
                email,
                password,
            });
            const { token } = response.data;

            localStorage.setItem("token", token);

            navigate("/user");
        } catch (error) {
            setError("Invalid password.");
        }
    };

    const theme = themeName === "theme1" ? theme1 : theme2;

    return (
        <ThemeProvider theme={theme}>
            <BasicSelect theme={themeName} handleChange={handleChange} />
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: { xs: 5, md: 20 },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        border: "1px solid #e0e0e0",
                        padding: 4,
                        borderRadius: 4,
                        boxShadow: 2,
                        backgroundColor: "#fafafa",
                    }}
                >

                    <Typography component="h1" variant="h4">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 1 }}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            size="small"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            size="small"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        {error && <Typography color="error">{error}</Typography>}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label={
                                    <Typography
                                        variant="body2"
                                        sx={{ fontSize: "0.75rem", color: "#555" }}
                                    >
                                        Remember me
                                    </Typography>
                                }
                            />
                            <Link
                                href="#"
                                variant="body2"
                                sx={{
                                    fontSize: "0.75rem",
                                    textDecoration: "none",
                                    "&:hover": {
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                Forgot your password?
                            </Link>
                        </Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ my: 2, textTransform: "none" }}
                        >
                            Sign In
                        </Button>
                        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                            <Link
                                href="#"
                                variant="body2"
                                sx={{
                                    fontSize: "0.75rem",
                                    textDecoration: "none",
                                    "&:hover": {
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                Don’t have an account? Sign up.
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default LoginPage;
