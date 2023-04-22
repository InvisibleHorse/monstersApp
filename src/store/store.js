import { configureStore } from '@reduxjs/toolkit';
import monsters from './reducers/monsters';

export const store = configureStore({
    reducer: {
        monsters,
    },
});
