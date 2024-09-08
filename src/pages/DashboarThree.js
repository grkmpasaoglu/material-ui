import React from 'react';
import { Box } from '@mui/material';
import Nav3 from '../comp3/Nav3';
import Side3 from '../comp3/Side3';
import Content3 from '../comp3/Content3';

const DashboardThree = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh', flexDirection: { xs: 'column', md: 'row' }, marginLeft: { md: '300px' } }}>
            {/* Sidebar */}
            <Side3 />

            {/* Main Content Area */}
            <Box sx={{ flexGrow: 1 }}>
                {/* Navbar */}
                <Nav3 />

                {/* Content */}
                <Content3 />
            </Box>
        </Box>
    );
};

export default DashboardThree;
