import { Link } from "react-router-dom";
import UserSearchData from "../../components/UserSearchData";

const UserSearch = () => {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <UserSearchData />
    </>
  );
};

export default UserSearch;
