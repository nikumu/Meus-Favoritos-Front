import { Button } from "@/components/ui";
import { HOME } from "@/utils/routerPaths";
import Link from "next/link";

export default function Profile(): JSX.Element {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Link href={HOME}>
        <Button>Home</Button>
      </Link>
    </main>
  );
}
