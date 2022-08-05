import UserInformation from "../../components/UserInformation";
import Title from "./style";
import UserContainer from "../../components/UserInformation/style";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <Title>My profile</Title>
      </header>
      <nav>
        <Link to="/usersearch">
          <button>Search new user</button>
        </Link>
      </nav>
      <UserContainer>
        <UserInformation />
      </UserContainer>
    </>
  );
};

export default Home;
