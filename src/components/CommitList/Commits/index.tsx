import { useState } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../../hooks/Commits";
import * as s from "../styled";

const Commits = () => {
  const params = useParams();

  const paramLogin = params["login"] as string;
  const paramName = params["name"] as string;

  const { commit } = useFetch(`/${paramLogin}/${paramName}/commits`);

  const [commitF, setCommitF] = useState("");

  const lowerCommit = commitF.toLowerCase();

  const filterCommit = commit.filter((commit) =>
    commit.commit.message.toLowerCase().includes(lowerCommit)
  );

  return (
    <>
      <input
        placeholder="filtered commit search"
        type="text"
        value={commitF}
        onChange={(event) => setCommitF(event.target.value)}
      />
      {commit ? <s.Title>{paramName}</s.Title> : undefined}

      {filterCommit.slice(0, 10).map((commit) => (
        <s.ListItem key={commit.commit.message}>
          <p>{commit?.commit.message}</p>
        </s.ListItem>
      ))}
    </>
  );
};

export default Commits;
