import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';
import SingleMonsterCover from './SingleMonsterCover';

function Monsters(props) {
    console.log(props);
    return (
        <Container sx={{ py: 3 }} maxWidth="md">
            <Grid container>
                <SingleMonsterCover monsters={props.monsters} />
            </Grid>
        </Container>
    );
}

Monsters.propTypes = {
    monsters: PropTypes.instanceOf(Array).isRequired,
};
export default Monsters;
