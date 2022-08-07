import { Route, Routes as RoutesRRD } from "react-router-dom";

import Commits from "../pages/Commit";
import Home from "../pages/Home";
import Search from "../pages/Search";

const Routes = () => {
  return (
    <RoutesRRD>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/commits/:login/:repo/" element={<Commits />} />
    </RoutesRRD>
  );
};

export default Routes;
