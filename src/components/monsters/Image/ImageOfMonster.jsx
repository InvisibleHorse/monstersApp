import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';

export default function ImageOfMonster(props) {
    return (
        <CardMedia
            component="img"
            height="200"
            image={`https://robohash.org/${props.id}RU.png?set=set2`}
            alt="green iguana"
        />
    );
}
ImageOfMonster.propTypes = {
    id: PropTypes.number.isRequired,
};
