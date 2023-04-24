export const GET_MONSTER = 'GET_MONSTER';
export const IS_LOADING_MONSTER = 'IS_LOADING_MONSTER';

export const setMonster = monster => ({
    type: GET_MONSTER,
    monster,
});
export const setIsLoadingMonster = isLoading => ({
    type: IS_LOADING_MONSTER,
    isLoading,
});
