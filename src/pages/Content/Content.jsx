import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ContentPage = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Container maxWidth="sm"></Container>
            </Box>
        </React.Fragment>
    );
};

export default ContentPage;
