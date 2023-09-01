import { volumes } from "../../../lib/data.js";
import Pagination from "@/components/pagination.jsx";
import Link from "next/link.js";
import Image from "next/image.js";
import { useState } from "react";
import { useRouter } from "next/router.js";

export default function TheTwoTowers() {
  const slug = volumes.find(({ slug }) => slug === "the-two-towers");

  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 3;
  const router = useRouter();

  function handlePreviousClick() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      router.push("/volumes/the-fellowship-of-the-ring");
    }
  }

  function handleNextClick() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      router.push("/volumes/the-return-of-the-king");
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
