import { Button } from "@/components/ui";
import { PROFILE } from "@/utils/routerPaths";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href={PROFILE}>
        <Button>Profile</Button>
      </Link>
    </main>
  );
}
