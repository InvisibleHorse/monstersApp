import { configureStore } from '@reduxjs/toolkit';
import monsters from './reducers/monsters';
import monster from './reducers/monster';

export const store = configureStore({
    reducer: {
        monsters,
        monster,
    },
});
