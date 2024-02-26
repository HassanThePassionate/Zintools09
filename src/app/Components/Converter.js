"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { addBookmark, removeBookmark } from "../reducer/bookmarkSlice";
const Converter = ({ mode }) => {
  const dispatch = useDispatch();
  const bookMarks = useSelector((state) => state.bookmark.items);

  const clickBookmark = (id, e) => {
    if (bookMarks.some((item) => item.id === id)) {
      dispatch(removeBookmark(id));
    } else {
      dispatch(
        addBookmark({ id: id, title: e.title, des: e.des, image: e.image })
      );
    }
  };
  const data = [
    {
      title: "Word to PDF",
      des: "The best Word to PDF converter online.",
      url: "https://www.hipdf.com/word-to-pdf",
      image: "https://images.hipdf.com/images2022/icons/word-pdf.svg",
      id: 12,
    },
    {
      title: "PPT to PDF",
      des: "Convert Powerpoint to PDF online.",
      url: "https://www.hipdf.com/word-to-pdf",
      image: "https://images.hipdf.com/images2022/icons/PPT-PDF.svg",
      id: 13,
    },
    {
      title: "Excel to PDF",
      des: "Easily Convert Excel spreadsheet to PDF.",
      url: "https://www.hipdf.com/word-to-pdf",
      image: "https://images.hipdf.com/images2022/icons/Excel-PDF.svg",
      id: 14,
    },
    {
      title: "JPG to PDF",
      des: "Convert JPG, PNG, BMP, GIF and TIFF images to PDF.",
      url: "https://www.hipdf.com/word-to-pdf",
      image: "https://images.hipdf.com/images2022/icons/jpg-pdf.svg",
      id: 15,
    },
    {
      title: "TXT to PDF",
      des: "Convert TXT to PDF online for free.",
      url: "https://www.hipdf.com/word-to-pdf",
      image: "https://images.hipdf.com/images2022/icons/Image-in-TXT.svg",
      id: 16,
    },
    {
      title: "RTX to PDF",
      des: "Convert RTF file to PDF online for free.",
      url: "https://www.hipdf.com/word-to-pdf",
      image: "https://images.hipdf.com/images2022/icons/Image-in-RTX.svg",
      id: 17,
    },
    {
      title: "PUB to PDF",
      des: "Convert Publisher to PDF document.",
      url: "https://www.hipdf.com/word-to-pdf",
      image: "https://images.hipdf.com/images2022/icons/Excel-PUB.svg",
      id: 18,
    },
  ];

  return (
    <>
      <main className={`main ${mode === "dark" ? "dark-main" : "main"}`}>
        <section className="container slider">
          <h2>Convert from PDF</h2>
          <div className="grid">
            {data.map((e, index) => (
              <div className="relate" key={index}>
                <div
                  className="btn-book"
                  onClick={() => clickBookmark(e.id, e)}
                >
                  {bookMarks.some((item) => item.id === e.id) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ fill: mode === "dark" ? "white" : "black" }}
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                    </svg>
                  )}
                </div>
                <Link href={e.url} className="card">
                  <Image
                    src={e.image}
                    alt=""
                    width={65}
                    height={65}
                    className="card-img"
                  />
                  <h3>{e.title}</h3>
                  <p>{e.des}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Converter;
