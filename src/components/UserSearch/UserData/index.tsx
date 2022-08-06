import { Link } from "react-router-dom";
import { useState } from "react";

import { RepoData, UserDatas } from "../../BasicDatas";
import { EventButton } from "../../Button";
import { ReposApi, UserApi } from "../../../services/api";
import * as s from "./style";
import { TUserProps, TRepoProps } from "./types";

const UserData = () => {
  const [userSearch, setUserSearch] = useState("");
  const [user, setUser] = useState<TUserProps>();
  const [repos, setRepos] = useState<TRepoProps[]>([]);

  const getUser = () => {
    ReposApi.get(`/${userSearch}/repos`).then((response) =>
      setRepos(response.data)
    );

    UserApi.get(`/users/${userSearch}`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        return window.location.reload(), alert("User not Found"), err;
      });
  };

  return (
    <>
      <s.Input
        type="text"
        placeholder="Search for new user"
        value={userSearch}
        onChange={(event) => setUserSearch(event.target.value)}
      />

      <EventButton handleClick={getUser} name="Search" />

      {user ? (
        <>
          <s.UserAvatar src={user?.avatar_url} alt="profilePicture" />
          <UserDatas
            name={user?.name}
            followers={user?.followers}
            login={user?.login}
          />
          <s.ListUser>
            {repos?.map((repo) => (
              <li key={repo.id}>
                <Link to={`/commits/${user.login}/${repo.name}`}>
                  <RepoData name={repo.name} />
                </Link>
              </li>
            ))}
          </s.ListUser>
        </>
      ) : undefined}
    </>
  );
};

export default UserData;
