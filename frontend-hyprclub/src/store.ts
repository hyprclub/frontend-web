/* eslint-disable @typescript-eslint/no-unused-vars */
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { modalOpenReducer } from "./redux/reducers/modalOpenReducer";
import { perksModalOpenReducer } from "./redux/reducers/perkModalOpenReducer";
import { uploadBtnReducer } from "./redux/reducers/uploadBtnReducers";
import {uploadnftmodalOpenReducer} from "./redux/reducers/uploadnftmodalOpenReducer"

const reducers = combineReducers({
    uploadBtn: uploadBtnReducer,
    modalOpen: modalOpenReducer,
    perksModalOpen: perksModalOpenReducer,
    uploadnftModalOpen: uploadnftmodalOpenReducer,
})

const middleware = [thunk];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export type RootStore = ReturnType<typeof reducers>


