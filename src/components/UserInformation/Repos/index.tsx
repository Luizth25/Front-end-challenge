import * as s from "../User/style";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/repos";

export const Repos = () => {
  const { repos } = useFetch("/luizth25/repos");

  return (
    <>
      <ul>
        <s.Username>Repositories</s.Username>
        {repos?.map((repo) => (
          <li key={repo.id}>
            <Link to={`luizth25/${repo.name}/commits`}>
              <p>{repo?.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Repos;
