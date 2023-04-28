import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

import s from './Monsters.module.css';
import ImageOfMonster from './Image/ImageOfMonster';

export default function Monster(props) {
    const onClickMoreInfo = () => {
        props.onClickMoreInfo(props.id);
    };

    return (
        <div className={s.zoom}>
            <Card className={s.card}>
                <ImageOfMonster id={props.id} />
                <CardContent className={s.cardContent}>
                    <Typography
                        className={s.textStyle}
                        gutterBottom variant="h5"
                        component="div"
                    >
                        <span>{props.name}</span>
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={s.textStyle}
                    >
                        <span className={s.span}>Home Planet: </span>{props.company}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        className={s.textStyle}
                        size="small"
                        color="success"
                        onClick={onClickMoreInfo}
                    >
                        More info
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

Monster.propTypes = {
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onClickMoreInfo: PropTypes.func.isRequired,
};
