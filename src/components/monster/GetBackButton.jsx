import React from 'react';
import { NavLink } from 'react-router-dom';

import { KeyboardArrowLeft } from '@mui/icons-material';
import Button from '@mui/joy/Button';
import s from './Monster.module.css';
import style from '../monsters/Monsters.module.css';

export default function GetBackButton() {
    return (
        <div className={s.mainInfo}>
            <NavLink className={s.nav} to="/">
                <Button
                    variant="plain"
                    endDecorator={<KeyboardArrowLeft />}
                    color="success"
                    className={style.textStyle}
                >
                    Get Back
                </Button>
            </NavLink>
        </div>
    );
}
