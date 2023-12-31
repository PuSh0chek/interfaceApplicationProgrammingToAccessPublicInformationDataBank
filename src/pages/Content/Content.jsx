import React from 'react';
import Box from '@mui/material/Box';
import StickyHeadTable from '../../Components/StickyHeadTable/StickyHeadTable';
import HeaderNavBar from '../../Components/HeaderNavBar/HeaderNavBar';
import './Content.css';

const Content = () => {
    return (
        <Box
            sx={{
                bgcolor: '#cfe8fc',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <section>
                <HeaderNavBar />
            </section>
            <section>
                <StickyHeadTable />
            </section>
        </Box>
    );
};

export default Content;
