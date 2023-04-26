import { setIsLoadingMonsters, setMonsters } from '../actions/monsters';
import { monsters } from '../../api/monstersApi';

export const getMonsters = (page, limit, monstersList) => async dispatch => {
    if (monstersList === 0) {
        dispatch(setIsLoadingMonsters(true));
        const response = await monsters.getMonsters(page, limit);
        dispatch(setIsLoadingMonsters(true));
        dispatch(setMonsters(response.data));
    }
};

export const loadMoreThunk = (page, limit) => async dispatch => {
    dispatch(setIsLoadingMonsters(true));
    const response = await monsters.getMonsters(page, limit);
    dispatch(setIsLoadingMonsters(true));
    dispatch(setMonsters(response.data));
};
