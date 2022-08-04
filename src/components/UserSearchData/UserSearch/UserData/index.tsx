import { Link } from "react-router-dom";
import { useState } from "react";

import * as s from "../../../UserInformation/User/style";
import { ReposApi, UserApi } from "../../../../services/api";
import { TUserProps, TRepoProps } from "./types";

const UserInfo = () => {
  const [userSearch, setUserSearch] = useState("");
  const [user, setUser] = useState<TUserProps>();
  const [repos, setRepos] = useState<TRepoProps[]>([]);

  const getUser = () => {
    ReposApi.get(`/${userSearch}/repos`).then((response) =>
      setRepos(response.data)
    );
    UserApi.get(`/users/${userSearch}`)
      .then((response) => setUser(response.data))
      .catch((err) => err);
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
            {repos?.map((repo) => (
              <li key={repo.id}>
                <Link to={`${user.login}/${repo.name}/commits`}>
                  <p>{repo.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : undefined}
    </>
  );
};
export default UserInfo;
