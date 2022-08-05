import { useEffect, useState } from "react";

import { TUserProps } from "../../components/UserInformation/User/types";
import { UserApi } from "../../services/api";

export function useFetch<T = TUserProps>(url: string) {
  const [user, setUser] = useState<T>();

  useEffect(() => {
    UserApi.get(url)
      .then((response) => setUser(response.data))
      .catch((err) => err);
  }, [url]);

  return { user };
}
