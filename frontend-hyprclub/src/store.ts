/* eslint-disable @typescript-eslint/no-unused-vars */
import { applyMiddleware,  combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { uploadBtnReducer } from "./redux/reducers/uploadBtnReducers";
import {configureStore} from '@reduxjs/toolkit' ;
import userData from './redux/slices/userData';

const reducers = combineReducers({
    uploadBtn: uploadBtnReducer,
    userData
})

const middleware = [thunk];


export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export type RootStore = ReturnType<typeof reducers>


