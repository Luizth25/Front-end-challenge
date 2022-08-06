import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import CommitsList from "../../components/CommitList";
import { Header } from "../../components/Header";
import { NavBar } from "../Home/style";

const Commit = () => {
  return (
    <>
      <Header title="Commit List" />
      <NavBar>
        <Link to="/">
          <Button name="Home" />
        </Link>
        <Link to="/search">
          <Button name="Search new User" />
        </Link>
      </NavBar>
      <CommitsList />
    </>
  );
};

export default Commit;
