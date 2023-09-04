import { introduction } from "../lib/data";
import Link from "next/link.js";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <a>{introduction}</a>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href={`/volumes/${volume.slug}`}>
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The two Towers</Link>
        </li>
      </ul>
    </div>
  );
}
