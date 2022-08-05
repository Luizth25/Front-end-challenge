import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/Commits/commits";
import { Title, CommitsContainer } from "./styled";

const CommitsInfo = () => {
  const params = useParams();
  const para2 = params["login"] as string;
  const param1 = params["name"] as string;

  const { commit } = useFetch(`/${para2}/${param1}/commits`);

  return (
    <CommitsContainer>
      <>{commit ? <Title>{param1}</Title> : undefined}</>
      <ol>
        {commit.slice(0, 10).map((commit) => (
          <li key={commit?.id}>
            <p>{commit?.commit.message}</p>
          </li>
        ))}
      </ol>
    </CommitsContainer>
  );
};

export default CommitsInfo;
