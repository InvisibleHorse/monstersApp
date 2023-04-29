export const GET_MONSTERS = 'GET_MONSTERS';
export const IS_LOADING_MONSTERS = 'IS_LOADING_MONSTERS';
export const IS_MONSTERS_EMPTY = 'IS_MONSTERS_EMPTY';
export const FILTER_MONSTERS = 'FILTER_MONSTERS';

export const setMonsters = monsters => ({
    type: GET_MONSTERS,
    monsters,
});
export const setIsLoadingMonsters = isLoading => ({
    type: IS_LOADING_MONSTERS,
    isLoading,
});

export const isMonstersEmpty = isEmpty => ({
    type: IS_MONSTERS_EMPTY,
    isEmpty,
});
export const filterMonsters = filter => ({
    type: FILTER_MONSTERS,
    filter,
});
