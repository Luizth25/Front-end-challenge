import * as s from "../User/style";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/Repos/repos";

export const Repos = () => {
  const { repos } = useFetch("/luizth25/repos");

  return (
    <>
      <ol>
        <s.Username>Repositories</s.Username>
        {repos?.map((repo) => (
          <li key={repo.id}>
            <Link to={`luizth25/${repo.name}/commits`}>
              <p>{repo?.name}</p>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};
export default Repos;
