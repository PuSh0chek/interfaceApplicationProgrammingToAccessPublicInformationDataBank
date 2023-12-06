import React from 'react';
import HeaderNavBar from '../../Components/HeaderNavBar/HeaderNavBar';
import Box from '@mui/material/Box';

const Registration = () => {
    return (
        <Box
            sx={{
                bgcolor: '#cfe8fc',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <header>
                <HeaderNavBar />
            </header>
        </Box>
    );
};

export default Registration;
