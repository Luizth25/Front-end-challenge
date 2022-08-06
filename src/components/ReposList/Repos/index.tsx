import { Link } from "react-router-dom";

import { RepoData } from "../../BasicDatas";
import { useFetch } from "../../../hooks/Repos";

export const Repos = () => {
  const { repos } = useFetch("/luizth25/repos");

  return (
    <>
      {repos?.map((repo) => (
        <li key={repo.id}>
          <Link to={`luizth25/${repo.name}/commits`}>
            <RepoData key={repo.id} name={repo?.name} />
          </Link>
        </li>
      ))}
    </>
  );
};
export default Repos;
