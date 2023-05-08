import Link from "next/link";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  return (
    <>
      dashboard-{slug}
      <Link href={"/"}>Back to home</Link>
    </>
  );
}
