import UserInformation from "../../components/UserInformation";

import UserContainer from "../../components/UserInformation/style";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { NavBar } from "./style";

const Home = () => {
  return (
    <>
      <Header title="My profile" />
      <NavBar>
        <Link to="/usersearch">
          <Button name="Search new user" />
        </Link>
      </NavBar>
      <UserContainer>
        <UserInformation />
      </UserContainer>
    </>
  );
};

export default Home;
