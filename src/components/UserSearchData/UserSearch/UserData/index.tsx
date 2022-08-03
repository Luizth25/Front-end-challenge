import { useState } from "react";

import * as s from "./style";
import { ReposApi, UserApi } from "../../../../services/api";
import { TUserProps, TRepoProps } from "./types";

const UserInfo = () => {
  const [user, setUser] = useState<TUserProps>();
  const [userSearch, setUserSearch] = useState(String);
  const [repos, setRepos] = useState<[TRepoProps]>();

  const getUser = () => {
    UserApi.get(`/users/${userSearch}`).then((response) => {
      return setUser(response.data);
    });
    ReposApi.get(`/${userSearch}/repos`)
      .then((response) => {
        return setRepos(response.data);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <>
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
          <ul>
            <s.UserRepo>Repositories</s.UserRepo>
            {repos?.map((repo) => (
              <li key={repo.id}>
                <p>{repo.name}</p>
              </li>
            ))}
          </ul>
        </>
      ) : undefined}
    </>
  );
};
export default UserInfo;
