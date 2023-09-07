import * as actions from 'interfaces/redux'

export interface AppState {
    toggleOfSidebar: boolean
    email: string
    data: Object
}

const initialState: AppState = {
    toggleOfSidebar: true,
    email: '',
    data: {},
}

export default function appReducer(state: AppState = initialState, action: actions.AppActions): AppState {
    switch (action.type) {
        case actions.TOGGLE_REQUEST:
            if (action.target === 'left') return { ...state, toggleOfSidebar: !state.toggleOfSidebar }
            else return state
        case actions.LOGIN_REQUEST:
            return state
        case actions.LOGIN_SUCCESS:
            return { ...state, data: action.data }
        default:
            return state
    }
}
