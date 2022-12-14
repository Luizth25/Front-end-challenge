import { useState } from "react";
import { useParams } from "react-router-dom";

import { useDistributor } from "../../../hooks/Distributor";
import * as s from "../styled";
import TCommitsProps from "./types";

const Commits = () => {
  const params = useParams();

  const paramLogin = params["login"] as string;
  const paramRepo = params["repo"] as string;
  const { info: commit } = useDistributor<TCommitsProps[]>(
    `/repos/${paramLogin}/${paramRepo}/commits`
  );

  const [commitF, setCommitF] = useState("");

  const lowerCommit = commitF.toLowerCase();

  const filterCommit = commit?.filter((commit) =>
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
      {commit ? <s.Title>{paramRepo}</s.Title> : null}

      {filterCommit?.slice(0, 10).map((commit) => (
        <s.ListItem key={commit.commit.message}>
          <s.Message>{commit?.commit.message}</s.Message>
        </s.ListItem>
      ))}
    </>
  );
};

export default Commits;
