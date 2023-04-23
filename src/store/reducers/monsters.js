import { GET_MONSTERS, IS_LOADING_MONSTERS } from '../actions/monsters';

const initialState = {
    monsters: [],
    isLoading: false,
};

const monsters = (state = initialState, action) => {
    switch (action.type) {
        case GET_MONSTERS:
            return {
                ...state,
                monsters: action.monsters,
            };
        case IS_LOADING_MONSTERS:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
};

export default monsters;
