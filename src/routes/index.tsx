import { Route, Routes as RoutesRRD } from "react-router-dom";

import Commits from "../pages/Commits";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <RoutesRRD>
      <Route index element={<Home />} />
      <Route path="/:login/:name/commits" element={<Commits />} />
    </RoutesRRD>
  );
};

export default Routes;
