import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import { Container, Grid } from '@mui/material';
import SingleMonsterContainer from '../../containers/monsters/SingleMonsterContainer';

function Monsters(props) {
    console.log(props);
    return (
        <Container sx={{ py: 3 }} maxWidth="md">
            <Grid container>
                <SingleMonsterContainer monsters={props.monsters} />
            </Grid>
        </Container>
    );
}

Monsters.propTypes = {
    monsters: PropTypes.instanceOf(Array).isRequired,
};
export default Monsters;
