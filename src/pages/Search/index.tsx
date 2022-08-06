import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import UserSearch from "../../components/UserSearch";
import { NavBar } from "../Home/style";

const Search = () => {
  return (
    <>
      <Header title="GitHub User Search" />
      <NavBar>
        <Link to="/">
          <Button name="Home" />
        </Link>
      </NavBar>
      <UserSearch />
    </>
  );
};

export default Search;
