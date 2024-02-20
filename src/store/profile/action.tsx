interface EditProfileAction {
  type: "EDIT_PROFILE";
  payload: User;
}
export type ProfileActionTypes = EditProfileAction;

interface User {
  memberId: string;
  nickname: string;
  password: string;
  e_mail: string;
  belong?: string;
  region?: string;
  createdAt: string;
  followers: number[];
  followings: number[];
  reward: number;
  status: string;
  updatedAt: string;
  userId: number;
}

export const editProfile = (payload: User) => ({
  type: "EDIT_PROFILE",
  payload,
});
