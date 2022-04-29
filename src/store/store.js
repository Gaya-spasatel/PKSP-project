import {applyMiddleware, compose, createStore} from 'redux'
import {reducer} from "./recuders";
import {initialState} from "./initialState";
import thunk from "redux-thunk";

export const store = createStore(reducer, initialState, compose(
    applyMiddleware(
        thunk
    )
));