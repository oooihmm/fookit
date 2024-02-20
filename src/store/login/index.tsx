import { LOGIN, LOGOUT, SET_USER_ID, LoginActionType } from "./action";

const initialState = {
  isLoggedIn: false,
  userId: undefined,
};

const reducer = (state = initialState, action: LoginActionType) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userId: undefined,
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
