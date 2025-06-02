import Link from "next/link";
import TestComponent from "./_components/test";
export default function Home() {
  return (
    <>
      <h1>Technical Agency</h1>
      <TestComponent/>
      <p>
        <Link href="/about">About</Link>
      </p>{" "}
      <p>
        <Link href="/services">Services</Link>
      </p> 
     
    </>
  );
}