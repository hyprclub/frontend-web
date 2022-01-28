/* eslint-disable @typescript-eslint/no-unused-vars */
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { modalOpenReducer } from "./redux/reducers/modalOpenReducer";
import { perksModalOpenReducer } from "./redux/reducers/perkModalOpenReducer";
import { uploadBtnReducer } from "./redux/reducers/uploadBtnReducers";


const reducers = combineReducers({
    uploadBtn: uploadBtnReducer,
    modalOpen: modalOpenReducer,
    perksModalOpen: perksModalOpenReducer
})

const middleware = [thunk];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export type RootStore = ReturnType<typeof reducers>


