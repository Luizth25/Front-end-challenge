import { useEffect, useState } from "react";

import { ReposApi } from "../../../services/api";
import { TRepoProps } from "./types";
import * as s from "../User/style";

export const Repos = () => {
  const [repos, setRepos] = useState<[TRepoProps]>();
  useEffect(() => {
    ReposApi.get("/luizth25/repos")
      .then((response) => setRepos(response.data))
      .catch((err) => err);
  }, []);

  return (
    <>
      <ul>
        <s.Username>Repositories</s.Username>
        {repos?.map((repo) => (
          <li key={repo.id}>
            <p>{repo.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Repos;
