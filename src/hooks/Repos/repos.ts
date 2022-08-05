import { useEffect, useState } from "react";

import { TRepoProps } from "../../components/UserInformation/Repos/types";
import { ReposApi } from "../../services/api";

export function useFetch<T = TRepoProps>(url: string) {
  const [repos, setRepos] = useState<T[]>();

  useEffect(() => {
    ReposApi.get(url)
      .then((response) => setRepos(response.data))
      .catch((err) => err);
  }, [url]);

  return { repos };
}
