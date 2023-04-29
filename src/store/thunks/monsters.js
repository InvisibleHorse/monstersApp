import { isMonstersEmpty, setIsLoadingMonsters, setMonsters, filterMonsters } from '../actions/monsters';
import { monsters } from '../../api/monstersApi';

export const getMonsters = (page, limit) => async dispatch => {
    dispatch(setIsLoadingMonsters(true));
    const response = await monsters.getMonsters(page, limit);
    if (response.data.length === 0) {
        dispatch(isMonstersEmpty(true));
    }
    dispatch(setIsLoadingMonsters(false));
    dispatch(setMonsters(response.data));
};

export const searchMonsters = (page, limit, search) => async dispatch => {
    dispatch(setIsLoadingMonsters(true));
    const response = await monsters.filterMonsters(page, limit, search);
    dispatch(setIsLoadingMonsters(false));
    dispatch(filterMonsters(response.data));
};
