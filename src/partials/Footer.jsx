import React from 'react';
import s from './Partials.module.css';
import style from '../components/monsters/Monsters.module.css';

function Footer() {
    return (
        <div className={`${s.footer} ${style.textStyle}`}>
            <p>&copy; InvHorse 🍰</p>
        </div>
    );
}

export default Footer;
