import UserInformation from "../../components/UserInformation";
import UserSearchData from "../../components/UserSearchData";
import Title from "./style";
import UserContainer from "../../components/UserInformation/style";

const Home = () => {
  return (
    <>
      <header>
        <Title>My profile</Title>
      </header>
      <UserContainer>
        <UserInformation />
        <UserSearchData />
      </UserContainer>
    </>
  );
};

export default Home;
