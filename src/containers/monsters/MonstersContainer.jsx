import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Container } from '@mui/material';

import Monsters from '../../components/monsters/Monsters';
import { getMonster } from '../../store/thunks/monster';
import { getMonsters, searchMonsters } from '../../store/thunks/monsters';
import Preloader from '../../partials/Preloader';
import s from '../../components/monsters/Monsters.module.css';

function MonstersContainer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const monsters = useSelector(state => state.monsters.monsters);
    const searchedMonsters = useSelector(state => state.monsters.searchedMonsters);
    const isLoading = useSelector(state => state.monsters.isLoading);
    const isEmpty = useSelector(state => state.monsters.isEmpty);
    const [search, setSearch] = useState('');

    const onClickMoreInfo = id => {
        dispatch(getMonster(id));
        navigate(`/${id}`);
    };

    const handleChangeSearch = e => {
        dispatch(searchMonsters(1, 100, e));
        setSearch(e);
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
            {search.length > 1 ? (
                <Monsters
                    onClickMoreInfo={onClickMoreInfo}
                    monsters={searchedMonsters}
                    handleChangeSearch={handleChangeSearch}
                />
            ) : (
                <Monsters
                    onClickMoreInfo={onClickMoreInfo}
                    monsters={monsters}
                    handleChangeSearch={handleChangeSearch}
                />
            )}
            {isLoading ? <Preloader /> : null}
            { isEmpty || search.length > 1
                ? null
                : (
                    <div>
                        <Button
                            className={s.textStyle}
                            color="success"
                            onClick={loadMore}
                        >
                            Load more
                        </Button>
                    </div>
                ) }
        </Container>
    );
}

export default MonstersContainer;
