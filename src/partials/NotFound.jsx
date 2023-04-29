import React from 'react';
import { Container } from '@mui/material';
import s from '../components/monsters/Monsters.module.css';
import style from './Partials.module.css';

export default function NotFound() {
    return (
        <Container max-width="md" className={style.minHeight}>
            <h1 className={s.textStyle}>Nothing was found &#128549;</h1>
        </Container>
    );
}
