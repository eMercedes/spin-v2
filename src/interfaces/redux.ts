export const TOGGLE_REQUEST = 'appActionTypes/TOGGLE_REQUEST'
export interface ToggleRequestAction {
    type: typeof TOGGLE_REQUEST
    target: string
}

export const LOGIN_REQUEST = 'appActionTypes/LOGIN_REQUEST'
export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST
    email: string
    password: string
}

export const LOGIN_SUCCESS = 'appActionTypes/LOGIN_SUCCESS'
export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS
    data: Object
}

export const LOGIN_FAILURE = 'appActionTypes/LOGIN_FAILURE'
export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE
    error: Error | string
}

export type AppActions = ToggleRequestAction | LoginRequestAction | LoginSuccessAction | LoginFailureAction
