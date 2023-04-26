import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Container } from '@mui/material';

import Monsters from '../../components/monsters/Monsters';
import { getMonster } from '../../store/thunks/monster';
import { getMonsters, loadMoreThunk } from '../../store/thunks/monsters';

function MonstersContainer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const monsters = useSelector(state => state.monsters.monsters);

    const defaultMonstersLength = monsters.length;
    const onClickMoreInfo = id => {
        dispatch(getMonster(id));
        navigate(`/${id}`);
    };
    const [limit, setLimit] = useState(3);
    const limitStep = limit + 3;

    useEffect(() => {
        dispatch(getMonsters(0, limit, monsters.length));
    }, []);

    const loadMore = () => {
        dispatch(loadMoreThunk(0, limitStep));
        setLimit(limitStep);
    };

    return (
        <Container maxWidth="md">
            <Monsters onClickMoreInfo={onClickMoreInfo} monsters={monsters} />
            {limit <= defaultMonstersLength
                ? <Button onClick={loadMore}>Load more</Button>
                : null}
        </Container>
    );
}

export default MonstersContainer;
