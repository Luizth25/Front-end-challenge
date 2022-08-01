import { useState } from "react";

import Api from "../../../../services/api";
import TUserProps from "./types";

const UserInfo = () => {
  const [user, setUser] = useState<TUserProps>();
  const [userSearch, setUserSearch] = useState("");

  const getUser = () => {
    Api.get(`/users/${userSearch}`)
      .then((response) => {
        return setUser(response.data);
      })
      .catch((err) => {
        console.error("erro aqui ", err);
      });
  };

  return (
    <div>
      {user ? (
        <>
          <h3>Name: {user?.name}</h3>
          <p>Login: {user?.login}</p>
          <p>Followers: {user?.followers}</p>
          <img src={user?.avatar_url} alt="profilePicture" />
        </>
      ) : undefined}

      <input
        type="text"
        value={userSearch}
        onChange={(event) => setUserSearch(event.target.value)}
      />
      <button onClick={getUser}>Search</button>
    </div>
  );
};
export default UserInfo;
