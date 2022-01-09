import Link from "next/link";

export default function Navbar() {
  return (
    <div className="space-x-10 flex items-center">
      <Link href="/" passHref>
        <div className="link">Home</div>
      </Link>
      <Link href="/about" passHref>
        <div className="link">About</div>
      </Link>
    </div>
  );
}
