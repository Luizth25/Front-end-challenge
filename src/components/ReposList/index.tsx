import Repos from "./Repos";
import { SubTitle, ListRepo } from "./style";

export const RepoList = () => {
  return (
    <ListRepo>
      <SubTitle>Repositories</SubTitle>
      <Repos />
    </ListRepo>
  );
};
