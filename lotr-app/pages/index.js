import { introduction } from "../lib/data";
import { volumes } from "../lib/data.js";
import Link from "next/link.js";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <a>{introduction}</a>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
