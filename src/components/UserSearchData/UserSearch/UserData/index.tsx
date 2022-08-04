import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as s from "../../../UserInformation/User/style";
import { ReposApi, UserApi } from "../../../../services/api";
import { TUserProps, TRepoProps } from "./types";

const UserInfo = () => {
  const [user, setUser] = useState<TUserProps>();
  const [repos, setRepos] = useState<[TRepoProps]>();

  useEffect(() => {
    ReposApi.get("/luizth25/repos").then((response) => {
      return setRepos(response.data);
    });
    UserApi.get("/users/Luizth25")
      .then((response) => {
        return setUser(response.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <>
      <s.UserAvatar src={user?.avatar_url} alt="profilePicture" />
      <s.Username>Name: {user?.name}</s.Username>
      <s.UserData>Login: {user?.login}</s.UserData>
      <s.UserData>Followers: {user?.followers}</s.UserData>
      <ul>
        {repos?.map((repo) => (
          <li key={repo.id}>
            <Link to={"/commit"}>
              <p>{repo.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default UserInfo;
