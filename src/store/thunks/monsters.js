import { isMonstersEmpty, setIsLoadingMonsters, setMonsters } from '../actions/monsters';
import { monsters } from '../../api/monstersApi';

export const getMonsters = (page, limit) => async dispatch => {
    dispatch(setIsLoadingMonsters(true));
    const response = await monsters.getMonsters(page, limit);
    if ((response.data.length - 1) === 0) {
        dispatch(isMonstersEmpty(true));
    }
    dispatch(setIsLoadingMonsters(false));
    dispatch(setMonsters(response.data));
};
