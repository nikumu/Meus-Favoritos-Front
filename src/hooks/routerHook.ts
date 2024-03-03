import { useRouter as UseRouter } from "next/router";

export function routerHook() {
  const router = UseRouter();

  return {
    router
  };
}
