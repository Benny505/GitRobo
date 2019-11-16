import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL
} from "./constants";

export const setSearchField = text => ({ // by wrapping in brackets, you can avoid return statement
    type: CHANGE_SEARCHFIELD,
    payload: text
})
// the above const is an action

export const requestRobots = () => (dispatch) => { // higher function, first function returns second function
    dispatch({ type:REQUEST_ROBOTS_PENDING });
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()) // when arrow function has no brackets, it returns whatever is on the same line after it
    .then(data => {
        // console.log(data);
        return dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
    })
    .catch(error => dispatch( { type: REQUEST_ROBOTS_FAIL, payload: error }))
}