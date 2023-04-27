import { GET_MONSTER, IS_LOADING_MONSTER } from '../actions/monster';

const initialState = {
    monster: {},
    isLoading: false,
};

const monster = (state = initialState, action) => {
    switch (action.type) {
        case GET_MONSTER:
            return {
                ...state,
                monster: { ...action.monster },
            };
        case IS_LOADING_MONSTER:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
};

export default monster;
