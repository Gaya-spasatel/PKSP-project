import { createStore } from 'redux'
import {reducer} from "./recuders";
import {initialState} from "./initialState";

export const store = createStore(reducer, initialState);