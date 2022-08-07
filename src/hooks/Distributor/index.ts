import { useEffect, useState } from "react";

import { UserApi } from "../../services/api";

export function useDistributor<T = unknown>(url: string) {
  const [info, setInfo] = useState<T | null>(null);

  useEffect(() => {
    UserApi.get(url)
      .then((response) => setInfo(response.data))
      .catch((err) => err);
  }, [url]);

  return { info };
}
