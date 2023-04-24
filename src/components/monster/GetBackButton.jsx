import React from 'react';
import { NavLink } from 'react-router-dom';

import { KeyboardArrowLeft } from '@mui/icons-material';
import Button from '@mui/joy/Button';
import s from './Monster.module.css';

export default function GetBackButton() {
    return (
        <div className={s.mainInfo}>
            <Button
                variant="plain"
                endDecorator={<KeyboardArrowLeft />}
                color="success"
            >
                <NavLink className={s.nav} to="/">Get Back</NavLink>
            </Button>
        </div>
    );
}
