import React from 'react';
import { CircularProgress, Container } from '@mui/material';
import s from './Partials.module.css';

function Preloader() {
    return (
        <Container className={s.padding}>
            <CircularProgress color="success" />
        </Container>
    );
}

export default Preloader;
