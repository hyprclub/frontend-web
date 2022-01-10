/* eslint-disable @typescript-eslint/no-unused-vars */
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { modalOpenReducer } from "./redux/reducers/modalOpenReducer";
import { uploadBtnReducer } from "./redux/reducers/uploadBtnReducers";


const reducers = combineReducers({
    uploadBtn: uploadBtnReducer,
    modalOpen: modalOpenReducer
})

const middleware = [thunk];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export type RootStore = ReturnType<typeof reducers>


