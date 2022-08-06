import { UserDatas } from "../BasicDatas";
import { useFetch } from "../../hooks/User";
import { UserAvatar } from "./style";

const MyUser = () => {
  const { user } = useFetch("/users/Luizth25");

  return (
    <>
      <UserAvatar src={user?.avatar_url} alt="ProfilePicture" />
      <UserDatas
        name={user?.name}
        followers={user?.followers}
        login={user?.login}
      />
    </>
  );
};
export default MyUser;
