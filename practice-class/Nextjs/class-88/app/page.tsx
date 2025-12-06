import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>this is our homepage</h1>
      <Button asChild><Link href="/blog">Blog page</Link></Button>
    </div>
  );
}
