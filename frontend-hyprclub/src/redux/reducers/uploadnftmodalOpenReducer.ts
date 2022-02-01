import { uploadnftmodalTypes } from "../actions/uploadnftmodalOpenAction"
import { UPLOADNFT_MODAL_OPEN_SUCCESS, UPLOADNFT_MODAL_CLOSE_SUCCESS } from "../constants/uploadnftmodalOpen"

interface State {
    clicked: boolean
}

const initialState: State = {
    clicked: false
}

export const uploadnftmodalOpenReducer = (state: State = initialState, action: uploadnftmodalTypes) => {
    switch (action.type) {
        case UPLOADNFT_MODAL_OPEN_SUCCESS:
            return {
                clicked: true
            }       

        case UPLOADNFT_MODAL_CLOSE_SUCCESS:
            return {
                clicked: false
            }
        default:
             return state
    }
}