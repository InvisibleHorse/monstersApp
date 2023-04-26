import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Monsters from '../../components/monsters/Monsters';
import { getMonster } from '../../store/thunks/monster';
import { getMonsters } from '../../store/thunks/monsters';

function MonstersContainer() {
    const dispatch = useDispatch();
    const monsters = useSelector(state => state.monsters.monsters);
    const onClickMoreInfo = id => {
        dispatch(getMonster(id));
    };

    useEffect(() => {
        dispatch(getMonsters(0, 3));
    }, []);

    return (
        <Monsters onClickMoreInfo={onClickMoreInfo} monsters={monsters} />
    );
}

export default MonstersContainer;
