import { useState } from "react";
import * as s from "./style";

import UserApi from "../../../../services/api";
import TUserProps from "./types";

const UserInfo = () => {
  const [user, setUser] = useState<TUserProps>();
  const [userSearch, setUserSearch] = useState("");

  const getUser = () => {
    UserApi.get(`/users/${userSearch}`)
      .then((response) => {
        return setUser(response.data);
      })
      .catch((err) => {
        console.error("erro aqui ", err);
      });
  };

  return (
    <s.UserContainer>
      <input
        type="text"
        value={userSearch}
        onChange={(event) => setUserSearch(event.target.value)}
      />
      <button onClick={getUser}>Search</button>
      {user ? (
        <>
          <s.UserAvatar src={user?.avatar_url} alt="profilePicture" />
          <s.Username>Name: {user?.name}</s.Username>
          <s.UserData>Login: {user?.login}</s.UserData>
          <s.UserData>Followers: {user?.followers}</s.UserData>
        </>
      ) : undefined}
    </s.UserContainer>
  );
};
export default UserInfo;
