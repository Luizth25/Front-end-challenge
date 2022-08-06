import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import MyUser from "../../components/MyUser";
import { RepoList } from "../../components/MyUser/ReposList";
import { NavBar, UserContainer } from "./style";

const Home = () => {
  return (
    <>
      <Header title="My profile" />
      <NavBar>
        <Link to="/search">
          <Button name="Search for new user" />
        </Link>
      </NavBar>
      <UserContainer>
        <MyUser />
        <RepoList />
      </UserContainer>
    </>
  );
};

export default Home;
