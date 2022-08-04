import { useEffect, useState } from "react";

import * as s from "./style";
import { UserApi } from "../../../services/api";
import { TUserProps } from "./types";

export const User = () => {
  const [user, setUser] = useState<TUserProps>();
  useEffect(() => {
    UserApi.get("/users/Luizth25")
      .then((response) => setUser(response.data))
      .catch((err) => err);
  }, []);

  return (
    <>
      <s.UserAvatar src={user?.avatar_url} alt="ProfilePicture" />
      <s.Username>Name: {user?.name}</s.Username>
      <s.UserData>Login: {user?.login}</s.UserData>
      <s.UserData>Followers: {user?.followers}</s.UserData>
    </>
  );
};
