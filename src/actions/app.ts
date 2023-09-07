import * as actions from '../interfaces/redux'

export function toggleRequest(target: string): actions.ToggleRequestAction {
    return {
        type: actions.TOGGLE_REQUEST,
        target,
    }
}

export function loginRequest(email: string, password: string): actions.LoginRequestAction {
    return {
        type: actions.LOGIN_REQUEST,
        email,
        password,
    }
}

export function loginSuccess(data: Object): actions.LoginSuccessAction {
    return {
        type: actions.LOGIN_SUCCESS,
        data,
    }
}

export function loginFailure(error: Error | string): actions.LoginFailureAction {
    return {
        type: actions.LOGIN_FAILURE,
        error,
    }
}
