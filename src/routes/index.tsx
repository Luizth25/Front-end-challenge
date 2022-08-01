import { Route, Routes as RoutesRRD } from "react-router-dom";

import Home from "../pages/Home";

const Routes = () => {
  return (
    <RoutesRRD>
      <Route index element={<Home />} />
    </RoutesRRD>
  );
};

export default Routes;
