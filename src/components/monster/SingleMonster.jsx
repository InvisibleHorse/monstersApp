import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@mui/material';
import { Box } from '@mui/system';

import s from './Monster.module.css';
import GetBackButton from './GetBackButton';

export default function SingleMonster(props) {
    return (
        <Container maxWidth="sm">
            <Box className={s.mainBox} sx={{ fontSize: 24, fontWeight: 'medium' }}>
                <GetBackButton />
                <Box>
                    <img className={s.monstersImage} alt="monsterImage" src={`https://robohash.org/${props.monster.id}RU.png?set=set2`} />
                </Box>
                <Box>
                    <h1 className={s.h1}>{props.monster.name}</h1>
                </Box>
                <Box className={s.mainInfo}>
                    <ul className={s.list}>
                        <li>
                            <span className={s.liElement}>
                                <strong>
                                    Home planet: &nbsp;
                                </strong>
                                {props.monster.company.name}
                            </span>
                        </li>
                        <li>
                            <span className={s.liElement}>
                                <strong>
                                    Email: &nbsp;
                                </strong>
                                {props.monster.email}
                            </span>
                        </li>
                        <li>
                            <span className={s.liElement}>
                                <strong>
                                    Website: &nbsp;
                                </strong>
                                {props.monster.website}
                            </span>
                        </li>
                    </ul>
                </Box>
            </Box>
        </Container>

    );
}
SingleMonster.propTypes = {
    monster: PropTypes.instanceOf(Object).isRequired,
};
