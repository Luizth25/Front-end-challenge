import { Route, Routes as RoutesRRD } from "react-router-dom";

import Commits from "../pages/Commits";
import Home from "../pages/Home";
import UserSearch from "../pages/UserSearch";

const Routes = () => {
  return (
    <RoutesRRD>
      <Route path="/" element={<Home />} />
      <Route path="/usersearch" element={<UserSearch />} />
      <Route path="/usersearch/:login/:name/commits" element={<Commits />} />
      <Route path="/:login/:name/commits" element={<Commits />} />
    </RoutesRRD>
  );
};

export default Routes;
