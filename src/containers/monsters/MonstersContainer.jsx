import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Monsters from '../../components/monsters/Monsters';
import { getMonsters } from '../../store/thunks/monsters';

function MonstersContainer() {
    const dispatch = useDispatch();
    const monsters = useSelector(state => state.monsters.monsters);

    useEffect(() => {
        dispatch(getMonsters(0, 3));
    }, []);

    return (
        <Monsters monsters={monsters} />
    );
}

export default MonstersContainer;
