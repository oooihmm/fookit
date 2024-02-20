export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_USER_ID = "SET_USER_ID";

interface LoginAction {
  type: typeof LOGIN;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface SetUserIdAction {
  type: typeof SET_USER_ID;
  payload: number;
}

export type LoginActionType = LoginAction | LogoutAction | SetUserIdAction;

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setUserId = (payload: number) => ({
  type: SET_USER_ID,
  payload,
});
