import { useEffect, useState } from "react";

import { TCommitsProps } from "../components/Commit/types";
import { CommitsApi } from "../services/api";

export function useFetch<T = TCommitsProps>(url: string) {
  const [commit, setCommit] = useState<T[]>([]);

  useEffect(() => {
    CommitsApi.get(url)
      .then((response) => setCommit(response.data))
      .catch((err) => err);
  }, [url]);
  return { commit };
}
