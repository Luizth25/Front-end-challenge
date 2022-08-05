import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import UserSearchData from "../../components/UserSearchData";
import { NavBar } from "../Home/style";

const UserSearch = () => {
  return (
    <>
      <Header title="GitHub User Search" />
      <NavBar>
        <Link to="/">
          <Button name="Home" />
        </Link>
      </NavBar>
      <UserSearchData />
    </>
  );
};

export default UserSearch;
