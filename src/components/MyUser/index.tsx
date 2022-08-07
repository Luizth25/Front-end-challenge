import { UserDatas } from "../BasicDatas";
import { useDistributor } from "../../hooks/Distributor";
import { UserAvatar } from "./style";
import TUserProps from "./types";

const MyUser = () => {
  const { info: data } = useDistributor<TUserProps>("/users/Luizth25");

  return (
    <>
      <UserAvatar src={data?.avatar_url} alt="ProfilePicture" />
      <UserDatas
        name={data?.name}
        followers={data?.followers}
        login={data?.login}
      />
    </>
  );
};
export default MyUser;
