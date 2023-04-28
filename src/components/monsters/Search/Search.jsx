import React from 'react';
import { IconButton, Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800 }}
        >
            <TextField
                fullWidth
                label="Search for an alien"
                variant="standard"
                color="success"
            />
            <IconButton
                type="button"
                sx={{ p: '10px' }}
                color="success"
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Box>
    );
}
