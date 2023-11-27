import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import EnhancedTable from '../../Components/TableForFilters/TableSortLabel';

const Content = () => {
    return (
        <>
            <CssBaseline />
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Container maxWidth="sm">
                    <EnhancedTable />
                </Container>
            </Box>
        </>
    );
};

export default Content;
