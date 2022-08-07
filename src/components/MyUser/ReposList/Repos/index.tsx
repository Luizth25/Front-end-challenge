import { Link } from "react-router-dom";

import { useDistributor } from "../../../../hooks/Distributor";
import { RepoData } from "../../../BasicDatas";
import TRepoProps from "./types";

export const Repos = () => {
  const { info: repos } = useDistributor<TRepoProps[]>("/users/luizth25/repos");

  return (
    <>
      {repos?.map((repo) => (
        <li key={repo.id}>
          <Link to={`/commits/luizth25/${repo.name}`}>
            <RepoData key={repo.id} name={repo?.name} />
          </Link>
        </li>
      ))}
    </>
  );
};
export default Repos;
