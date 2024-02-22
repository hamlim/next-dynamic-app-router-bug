import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/dynamic">Go to next/dynamic demo</Link> <br />
      <Link href="/static">Go to static css demo</Link>
      <br />
      <Link href="/edge">Go to Edge css demo</Link>
    </div>
  );
}
