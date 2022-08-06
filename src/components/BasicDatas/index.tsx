import * as s from "./style";
import TBasicDatasProps from "./types";

export const UserDatas = ({ name, followers, login }: TBasicDatasProps) => {
  return (
    <>
      <s.Username>Name:{name}</s.Username>
      <s.Paragraph>Login:{login}</s.Paragraph>
      <s.Paragraph>Followers:{followers}</s.Paragraph>
    </>
  );
};

export const RepoData = ({ name }: TBasicDatasProps) => {
  return (
    <>
      <s.Paragraph>{name}</s.Paragraph>
    </>
  );
};
