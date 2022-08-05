import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import CommitsInfo from "../../components/Commit";
import { Header } from "../../components/Header";
import { NavBar } from "../Home/style";

const Commits = () => {
  return (
    <>
      <Header title="Commit List" />
      <NavBar>
        <Link to="/">
          <Button name="Home" />
        </Link>
        <Link to="/usersearch">
          <Button name="Search new User" />
        </Link>
      </NavBar>
      <CommitsInfo />
    </>
  );
};

export default Commits;
