import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/commits";
import Title from "./styled";

const CommitsInfo = () => {
  const params = useParams();
  const para2 = params["login"] as string;
  const param1 = params["name"] as string;

  const { commit } = useFetch(`/${para2}/${param1}/commits`);

  return (
    <div>
      <>{commit ? <Title>{param1}</Title> : undefined}</>
      <ul>
        {commit.slice(0, 10).map((commit) => (
          <li key={commit?.id}>
            <p>{commit?.commit.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommitsInfo;
