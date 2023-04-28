import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Container } from '@mui/material';

import Monsters from '../../components/monsters/Monsters';
import { getMonster } from '../../store/thunks/monster';
import { getMonsters } from '../../store/thunks/monsters';
import Preloader from '../../partials/Preloader';
import s from '../../components/monsters/Monsters.module.css';

function MonstersContainer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const monsters = useSelector(state => state.monsters.monsters);
    const isLoading = useSelector(state => state.monsters.isLoading);
    const isEmpty = useSelector(state => state.monsters.isEmpty);

    const onClickMoreInfo = id => {
        dispatch(getMonster(id));
        navigate(`/${id}`);
    };
    const [limit] = useState(3);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (monsters.length === 0) {
            dispatch(getMonsters(0, limit));
        }
    }, [monsters]);

    const loadMore = () => {
        dispatch(getMonsters(page + 1, limit));
        setPage(page + 1);
    };

    return (
        <Container maxWidth="md">
            <Monsters onClickMoreInfo={onClickMoreInfo} monsters={monsters} />
            {isLoading ? <Preloader /> : null}
            { isEmpty
                ? null
                : (
                    <Button
                        className={s.textStyle}
                        color="success"
                        onClick={loadMore}
                    >
                        Load more
                    </Button>
                ) }
        </Container>
    );
}

export default MonstersContainer;
