import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonsters } from '../../store/thunks/monsters';
import SingleMonster from '../../components/monster/SingleMonster';

function MonsterContainer() {
    const dispatch = useDispatch();
    const monster = useSelector(state => state.monster.monster);

    useEffect(() => {
        dispatch(getMonsters(monster.id));
    }, []);

    return (
        {monster.map(monster => (
                <SingleMonster
                    key={monster.id}
                    name={monster.name}
                    company={monster.company.name}
                    id={monster.id}
                    onClickMoreInfo={props.onClickMoreInfo}
                />
            ))}
    );
}

export default MonsterContainer;
