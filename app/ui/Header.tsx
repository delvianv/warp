import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar bg-neutral text-neutral-content justify-center md:justify-start">
      <Link href="/" className="text-xl">
        Warp Development Assessment
      </Link>
    </header>
  );
}
