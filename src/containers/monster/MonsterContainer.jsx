import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getMonster } from '../../store/thunks/monster';
import SingleMonster from '../../components/monster/SingleMonster';

function MonsterContainer() {
    const dispatch = useDispatch();
    const monster = useSelector(state => state.monster.monster);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getMonster(id));
    }, []);

    return (
        Object.keys(monster).length !== 0 && <SingleMonster monster={monster} />
    );
}

export default MonsterContainer;
