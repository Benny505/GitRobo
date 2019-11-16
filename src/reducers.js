import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL
} from "./constants";

const initialState = {
    searchField: ""
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD: 
            return Object.assign({}, state, { searchField: action.payload }); // need to pass parameter you want to change as an object
            default:
                return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ""
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING: 
            return Object.assign({}, state, { isPending: true }); // need to pass parameter you want to change as an object
        case REQUEST_ROBOTS_SUCCESS: 
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAIL: 
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
             return state;
    }
}