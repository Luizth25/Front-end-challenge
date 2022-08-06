import { Link } from "react-router-dom";
import { useFetch } from "../../../../hooks/Repos";
import { RepoData } from "../../../BasicDatas";

export const Repos = () => {
  const { repos } = useFetch("/luizth25/repos");

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
