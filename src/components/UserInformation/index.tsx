import Repos from "./Repos";
import UserContainer from "./style";

import { User } from "./User";

const UserInformation = () => {
  return (
    <UserContainer>
      <User />
      <Repos />
    </UserContainer>
  );
};
export default UserInformation;
