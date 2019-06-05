import { GET_CONTRACTORS, DELETE_CONTRACTOR, GET_CONTRACTOR } from "../actions/types";

const initialState = {
    contractors: [],
    contractor: {}
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_CONTRACTORS:
            return {
                ...state,
                contractors: action.payload
            };

        case GET_CONTRACTOR:
            return {
                ...state,
                contractor: action.payload
            };

        case DELETE_CONTRACTOR:
            return {
                ...state,
                contractors: state.contractors.filter(
                    contractor => contractor.id !== action.payload
                )
            };
            
        default:
            return state;
    }
}

