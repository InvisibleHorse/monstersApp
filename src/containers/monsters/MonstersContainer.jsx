import React, { useEffect } from 'react';
import Monsters from '../../components/monsters/Monsters';
import { monsters } from '../../api/monstersApi';

function MonstersContainer() {
    useEffect(() => {
        monsters.getMonsters(0, 3);
    }, []);

    return (
        <Monsters />
    );
}

export default MonstersContainer;
