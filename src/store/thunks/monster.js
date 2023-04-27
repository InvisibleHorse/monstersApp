import { setIsLoadingMonster, setMonster } from '../actions/monster';
import { monsters } from '../../api/monstersApi';

export const getMonster = id => async dispatch => {
    dispatch(setIsLoadingMonster(true));
    const response = await monsters.getMonster(id);
    dispatch(setIsLoadingMonster(false));
    dispatch(setMonster(response.data));
};
