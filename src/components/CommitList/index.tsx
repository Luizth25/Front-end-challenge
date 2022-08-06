import Commits from "./Commits";
import * as s from "./styled";

const CommitsList = () => {
  return (
    <s.CommitsContainer>
      <s.ListCommit>
        <Commits />
      </s.ListCommit>
    </s.CommitsContainer>
  );
};
export default CommitsList;
