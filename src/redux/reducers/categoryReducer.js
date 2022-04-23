import { CATEGORY_ADD_REQUEST, 
CATEGORY_ADD_SUCCESS, CATEGORY_ADD_FAIL } from '../constants/categoryConstants.js';

export const addCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORY_ADD_REQUEST:
            return {loading : true };
        case CATEGORY_ADD_SUCCESS:
            return {loading : false, categories : action.payload};
        case CATEGORY_ADD_FAIL:
        return {loading: false, error: action.payload };
    default: return state
    }
}