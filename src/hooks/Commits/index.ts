import { useEffect, useState } from "react";

import { CommitsApi } from "../../services/api";
import { TCommitsProps } from "./types";

export function useFetch<T = TCommitsProps>(url: string) {
  const [commit, setCommit] = useState<T[]>([]);

  useEffect(() => {
    CommitsApi.get(url)
      .then((response) => setCommit(response.data))
      .catch((err) => err);
  }, [url]);
  return { commit };
}
