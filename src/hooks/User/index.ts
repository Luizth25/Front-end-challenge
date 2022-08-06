import { useEffect, useState } from "react";

import { UserApi } from "../../services/api";
import { TUserProps } from "./types";

export function useFetch<T = TUserProps>(url: string) {
  const [user, setUser] = useState<T>();

  useEffect(() => {
    UserApi.get(url)
      .then((response) => setUser(response.data))
      .catch((err) => err);
  }, [url]);

  return { user };
}
