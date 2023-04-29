import {
    FILTER_MONSTERS,
    GET_MONSTERS,
    IS_LOADING_MONSTERS,
    IS_MONSTERS_EMPTY,
} from '../actions/monsters';

const initialState = {
    monsters: [],
    searchedMonsters: [],
    isLoading: false,
    isEmpty: false,
};

const monsters = (state = initialState, action) => {
    switch (action.type) {
        case GET_MONSTERS:
            return {
                ...state,
                monsters: [...state.monsters, ...action.monsters],
            };
        case IS_LOADING_MONSTERS:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case IS_MONSTERS_EMPTY:
            return {
                ...state,
                isEmpty: action.isEmpty,
            };
        case FILTER_MONSTERS:
            return {
                ...state,
                searchedMonsters: action.filter,
            };
        default:
            return state;
    }
};

export default monsters;
