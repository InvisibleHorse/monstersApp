import React from 'react';
import Monster from './Monster';

export default function SingleMonsterCover(props) {
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
