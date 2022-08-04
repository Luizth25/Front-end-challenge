import * as s from "./style";
import { useFetch } from "../../../hooks/user";

export const User = () => {
  const { user } = useFetch("/users/Luizth25");

  return (
    <>
      <s.UserAvatar src={user?.avatar_url} alt="ProfilePicture" />
      <s.Username>Name: {user?.name}</s.Username>
      <s.UserData>Login: {user?.login}</s.UserData>
      <s.UserData>Followers: {user?.followers}</s.UserData>
    </>
  );
};
