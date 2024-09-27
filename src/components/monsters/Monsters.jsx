import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';
import Monster from './Monster';
import Search from './Search/Search';

function Monsters(props) {
    return (
        <Container sx={{ py: 3 }} maxWidth="md">
            <Search monsters={props.monsters} />
            <Grid container>
                {props.monsters.map(monster => (
                    <Monster
                        key={monster.id}
                        name={monster.name}
                        company={monster.company.name}
                        id={monster.id}
                        onClickMoreInfo={props.onClickMoreInfo}
                    />
                ))}
            </Grid>
        </Container>
    );
}

Monsters.propTypes = {
    monsters: PropTypes.instanceOf(Array).isRequired,
    onClickMoreInfo: PropTypes.func.isRequired,

};
export default Monsters;
