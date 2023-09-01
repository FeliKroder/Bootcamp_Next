import { volumes } from "../../../lib/data.js";
import Pagination from "@/components/pagination.jsx";
import Link from "next/link.js";
import Image from "next/image.js";
import { useState } from "react";
import { useRouter } from "next/router.js";

export default function TheFellowshipOfTheRing() {
  const slug = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const router = useRouter();

  function handlePreviousClick() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextClick() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      router.push("/volumes/the-two-towers");
    }
  }

  return (
    <>
      <Link href="/../../">All Volumes</Link>
      <h1>{slug.title}</h1>
      <p>{slug.description}</p>
      <ul>
        {slug.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
      <Image src={slug.cover} alt={slug.title} width="140" height="230" />
      <div>
        <p>{`Page ${currentPage} Content`}</p>
      </div>{" "}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
      />
    </>
  );
}
