import React from 'react';
import HeaderNavBar from '../../Components/HeaderNavBar/HeaderNavBar';
import Box from '@mui/material/Box';

const Authorization = () => {
    return (
        <Box
            sx={{
                bgcolor: '#cfe8fc',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <HeaderNavBar />
        </Box>
    );
};

export default Authorization;
