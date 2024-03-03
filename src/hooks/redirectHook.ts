import { redirect as UseRedirect } from "next/navigation";

export function redirectHook() {
  const redirect = (path: string) => {
    UseRedirect(path);
  };

  return {
    redirect,
  };
}
