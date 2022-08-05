import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/Commits/commits";
import { Title, CommitsContainer, ListCommit, ListItem } from "./styled";

const CommitsInfo = () => {
  const params = useParams();
  const para2 = params["login"] as string;
  const param1 = params["name"] as string;

  const { commit } = useFetch(`/${para2}/${param1}/commits`);

  return (
    <CommitsContainer>
      {commit ? <Title>{param1}</Title> : undefined}
      <ListCommit>
        {commit.slice(0, 10).map((commit) => (
          <ListItem key={commit?.id}>
            <p>{commit?.commit.message}</p>
          </ListItem>
        ))}
      </ListCommit>
    </CommitsContainer>
  );
};

export default CommitsInfo;
