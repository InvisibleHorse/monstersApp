import React from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

export default function Search({ search, setSearch }) {
    const handleChange = e => {
        setSearch(e.target.value);
    };

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
                value={search}
                onChange={handleChange}
            />
            <SearchIcon color="success" />
        </Box>
    );
}
Search.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
};
