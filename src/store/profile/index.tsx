import { ProfileActionTypes } from "./action";

const initialState = {
  formData: {
    memberId: "",
    nickname: "",
    password: "",
    e_mail: "",
    belong: "",
    region: "",
    createdAt: "",
    followers: [],
    followings: [],
    reward: 0,
    status: "",
    updatedAt: "",
    userId: -1,
  },
};

const reducer = (state = initialState, action: ProfileActionTypes) => {
  switch (action.type) {
    case "EDIT_PROFILE":
      console.log(action.payload);
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
