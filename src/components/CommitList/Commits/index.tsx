import { useParams } from "react-router-dom";

import { useFetch } from "../../../hooks/Commits";
import * as s from "../styled";

const Commits = () => {
  const params = useParams();
  const para2 = params["login"] as string;
  const param1 = params["name"] as string;

  const { commit } = useFetch(`/${para2}/${param1}/commits`);

  return (
    <>
      {commit ? <s.Title>{param1}</s.Title> : undefined}

      {commit.slice(0, 10).map((commit) => (
        <s.ListItem key={commit?.id}>
          <p>{commit?.commit.message}</p>
        </s.ListItem>
      ))}
    </>
  );
};

export default Commits;
