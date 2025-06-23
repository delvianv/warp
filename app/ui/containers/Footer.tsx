import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          &copy;&nbsp;
          <Link href="https://delvianv.github.io" className="link">
            Delvian Valentine
          </Link>
        </p>
      </aside>
    </footer>
  );
}
