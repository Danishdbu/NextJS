import Image from "next/image";
import Link from "next/link";

export default async function Home(searchParams,
params) {
  console.log(await searchParams);
  console.log(await params);
  return (
   <div>
    <h1>Weclcome home</h1>
    <Link href="/about">About</Link>
    <br />
    <Link href="/blog">Blog Page</Link>
   </div>
  );
}
