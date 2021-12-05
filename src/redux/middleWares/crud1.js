import { actions } from "../actions/createAction"

export const getCards = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_CARDS') {
        const url = `https://sv443.net/jokeapi/v2/joke/Programming?type=single`
        return fetch(url).then((res) => res.json()).then((result) => {
            dispatch(actions.setArrCards(result))
        }).catch((error) => {
            alert(error)
        })
    }
    return next(action);
}


