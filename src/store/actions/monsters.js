export const GET_MONSTERS = 'GET_MONSTERS';
export const IS_LOADING_MONSTERS = 'IS_LOADING_MONSTERS';

export const setMonsters = monsters => ({
    type: GET_MONSTERS,
    monsters,
});
export const setIsLoadingMonsters = isLoading => ({
    type: IS_LOADING_MONSTERS,
    isLoading,
});
