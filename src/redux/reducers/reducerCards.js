import produce from 'immer';
import { createReducer } from './ReducerUtils'

const initialState = {
    arrCards: [],
    arrCardClick: [],
    arrNoShowCards:[],
}
const cards = {
    setArrCards(state, action) {
        state.arrCards.push(action.payLoad);
    },
    setArrCardClick(state, action) {
        state.arrCardClick.push(action.payLoad);
    },
    setArrNoShowCards(state, action) {
        state.arrNoShowCards.push(action.payLoad);
    },
}
export default produce((state, action) => createReducer(state, action, cards), initialState);







