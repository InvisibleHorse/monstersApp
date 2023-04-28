import React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import s from './Partials.module.css';
import style from '../components/monsters/Monsters.module.css';

export default function Header() {
    return (
        <Container className={`${s.header} ${style.textStyle}`} maxWidth="fixed">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 2">
                    <h1>Aliens</h1>
                    <p>A small collection</p>
                </Box>
                <Box gridColumn="span 8" />
            </Box>
        </Container>
    );
}
