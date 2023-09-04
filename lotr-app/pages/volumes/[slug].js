import { volumes } from "../../../lib/data.js";
import Pagination from "@/components/pagination.jsx";
import Link from "next/link.js";
import Image from "next/image.js";
import { useState } from "react";
import { useRouter } from "next/router.js";

export default function TheFellowshipOfTheRing() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("Query:", router.query);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;

  function handlePreviousClick() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextClick() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      router.push(`${slug}`);
    }
  }

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
      <p>{`Page ${currentPage} Content`}</p>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
      />
    </>
  );
}
