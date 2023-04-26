import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Monster from '../../components/monsters/Monsters';
import { getMonsters } from '../../store/thunks/monsters';

function MonsterContainer() {
    const dispatch = useDispatch();
    const monsters = useSelector(state => state.monsters.monsters);

    useEffect(() => {
        dispatch(getMonsters(0, 3));
    }, []);

    return (
        <Monster monsters={monsters} />
    );
}

export default MonsterContainer;
