import { volumes } from "../../lib/data.js";
import Link from "next/link.js";
import Image from "next/image.js";
import { useRouter } from "next/router.js";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("Query:", router.query);

  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);
  const currentVolume = volumes[currentIndex];
  const nextVolume = volumes[currentIndex + 1];
  const previousVolume = volumes[currentIndex - 1];

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;

  return (
    <>
      <Link href="/../../">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
      <Image src={cover} alt={title} width="140" height="230" />
      {/* conditional rendering */}
      {previousVolume && (
        <Link href={`/volumes/${previousVolume.slug}`}>Previous Volume</Link>
      )}{" "}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>Next Volume</Link>
      )}
    </>
  );
}
