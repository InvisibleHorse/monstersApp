import React from 'react';
import Monster from '../../components/monsters/Monster';

export default function SingleMonsterContainer(props) {
    return (
        props.monsters.map(
            m => (
                <Monster
                    name={m.name}
                    company={m.company.name}
                    id={m.id}
                />
            ),
        ));
}
