import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@mui/material';
import { Box } from '@mui/system';

import s from './Monster.module.css';
import GetBackButton from './GetBackButton';

export default function SingleMonster(props) {
    return (
        <Container maxWidth="sm">
            <Box className={s.mainBox} sx={{ color: 'text.primary', fontSize: 24, fontWeight: 'medium' }}>
                <GetBackButton />
                <Box>
                    <img className={s.monstersImage} alt="monsterImage" src={`https://robohash.org/${5}RU.png?set=set2`} />
                </Box>
                <Box>
                    <h1 className={s.h1}>Monster&apos;s name: {props.name}</h1>
                </Box>
                <Box className={s.mainInfo}>
                    <ul className={s.list}>
                        <li><span className={s.liElement}>Monster&apos;s home planet</span></li>
                        <li><span className={s.liElement}>Monste&apos;s email address</span></li>
                        <li><span className={s.liElement}>Monste&apos;s website</span></li>
                    </ul>
                </Box>
            </Box>
        </Container>

    );
}
SingleMonster.propTypes = {
    name: PropTypes.string.isRequired,
};
