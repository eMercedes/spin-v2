import * as actions from '../interfaces/redux';

export interface AppState {
  email: string;
  data: Object;
}

const initialState: AppState = {
  email: '',
  data: {},
};

export default function appReducer(state: AppState = initialState, action: actions.AppActions): AppState {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return state;
    case actions.LOGIN_SUCCESS:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
